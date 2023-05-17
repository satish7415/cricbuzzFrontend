import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { message } from 'antd';
import { Spin } from 'antd';

export default function Signup() {
  // antd designed loading
  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';
  const openMessage = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'Loaded!',
        duration: 2,
      });
    }, 2000);
  };
  // antd designed closed

  // validation
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const auth = JSON.stringify(localStorage.getItem("user"));
  console.log("localstorage data", auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  useEffect(()=>{
    var auth=localStorage.getItem("user");
      if(auth){
        navigate("/home")
      }   
  })
  const handleSubmit = async () => {
    axios
      .post("http://localhost:5000/login", { email, password }).then((res) => {
        console.log("backend response=", res);
        if (res.data.status === 1) {
          setMsg(res.data.message);
          setTimeout(() => {
            setShow(res.data.message)
            localStorage.setItem("user", JSON.stringify(res.data));
          },3000);
          handleShow();
         
        }
        else {
          setMsg(res.data.message);
          setShow(res.data.message)
          handleShow()
        }
      }).catch((err) => {

        setMsg("Server error");
         handleShow();
      });
    setEmail("");
    setPassword("");
    
  }
  return (
    <div className='bgimg1'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 loginhandle'>
            <form >
              <div className='fontSize2'  >
              <label className="control1 ">Email*</label>
              <br />  <br />
              <input type="email" className="form-control" value={email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
            
             <label className="control1">Password*</label>
             <br />  <br />
              <input type="password" className="form-control" value={password} id="exampleInputPassword1" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                              {
                password.length > 0 &&
                  email.length > 0 ? (
                  <button className="btn btn-primary" onClick={() => { handleSubmit();openMessage() }}>Submit</button>

                ) : (<button className="btn btn-primary dis" onClick={() => { handleSubmit() }} disabled>Submit</button>)
              }
            </div>
            </form>
          </div>
        </div>
        <Modal show={show} onHide={handleClose} className='popupBox'>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body><h1 style={{ color: "green" }}>{msg}   <Spin /> </h1></Modal.Body>
        <Modal.Footer />
      </Modal>
      </div>
      
    </div >
  )
}

