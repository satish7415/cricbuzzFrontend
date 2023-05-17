import  {  useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import {  useFormik } from 'formik';
import Modal from 'react-bootstrap/Modal';
import {formSchema} from "./FormSchema"
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Signup(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [open, setOpen] = useState(false);
  const handleCloses=()=>setOpen(false);
  var formInitialValues={
    fname:"",
    lname:"",
    email:"",
    password:"",
    mobile:""
  }
  var {handleChange,handleSubmit,values,errors,handleBlur,touched }=useFormik({ 
    initialValues:formInitialValues,
    validationSchema:formSchema,
    onSubmit:(values,action)=>{
    action.resetForm(values);
    }
  });
  const [msg,setMsg]=useState("");
  const navigate=useNavigate();

  const handleSubmitApi =()=>{
   console.log("satish",formInitialValues,"and",values);
   let fname=values.fname;
   console.log("first",values.fname);
   let lname=values.lname;
   console.log(values.lname);
   let email=values.email;
   let password=values.password;
   let mobile=values.mobile;

    axios
    .post("http://localhost:5000/ragister",{fname,lname,email,password,mobile,}).then((res) => {
      console.log("backend response=",res.data);
       if(res.data.status===1)
       {
        setMsg(res.data.message);
        handleShow();
       values="";
       setOpen(true);
      }
      else{
        setMsg(res.data.message);
        handleShow();
      }
    }).catch((err) => {
      alert("error",err);
    });   
}
const verifyHandle=()=>{
  let email=values.email;
  let otp=values.otp;
  axios
  .post("http://localhost:5000/verified",{email,otp}).then((res) =>{
    console.log("verify response=",res)
    if(res.data.status===1){
      // localStorage.setItem("user",JSON.stringify(res.data));
    alert(res.data.message)
    setTimeout(()=>{
      navigate("/login");
     },3000);
    // setMsg(res.data.message)
    setOpen(false);
    }
   else{
    alert(res.data.message)
   }
  })
  .catch((err) => {
    setMsg(err.data);
  });
}
  return (
    <div className='bgimg'>
    <div className='container'>
      
      <div className='row'>
        <div className='col-md-12 loginhandle'>
        <form className='fontSize' onSubmit={handleSubmit} >
      <div className='m'>
      <label  className="control extraMarginP">FirstName*</label>
      <input type="text" className="form-control" onBlur={handleBlur} value={values.fname} name='fname'  placeholder="Enter first name" onChange={(handleChange)}/>
      {touched.fname&&errors.fname ? <span className='spanError'>{errors.fname}</span> : ""}
      <br/>
      <label  className="control extraMarginP">LastName*</label>
      <input type="text" className="form-control" value={values.lname} name='lname' 
       placeholder="Enter last name" onBlur={handleBlur} onChange={handleChange} />
      {touched.lname&&errors.fname ? <span className='spanError'>{errors.lname}</span> : ""}
      <br/>      
    
      <label  className="control extraMarginEmail">Email* </label>
      <input type="text" className="form-control" name='email'
       value={values.email} id="exampleInputEmail1" aria-describedby="emailHelp"
        placeholder="Enter email" onBlur={handleBlur} onChange={handleChange} />
      
      {touched.email&&errors.email ? <span className='spanError'>{errors.email}</span> :""}
      <br/>
      
      <label  className="control extraMargin">Mobile*</label>
      <input type="text" className="form-control" name='mobile' value={( values.mobile)}
        placeholder="Enter mobile number" onBlur={handleBlur} onChange={handleChange} />
      
      {touched.mobile&&errors.mobile? <span className='spanError'>{errors.mobile}</span> :""}
      <br/>
      <label className="control extraMarginP" >Password*</label>
      <input type="password" className="form-control" name='password'
       value={values.password} id="exampleInputPassword1" placeholder="Password"
       onBlur={handleBlur} onChange={handleChange} />
      
      {touched.password&&errors.password ? <span className='spanError'>{errors.password}</span> :""}
      <br/>
      
      </div>
    {
    values.fname.length> 2 &&
    values.lname.length> 2 &&
    values.email.length> 0 &&
    values.password.length> 6 &&
    values.mobile.length>= 10 ?(
  <button className="btn btn-primary" onClick={()=>{handleSubmitApi()}} >Submit</button>
      ): 
      (<button className="btn btn-primary dis" onClick={()=>{handleSubmit()}} disabled>Submit</button>) }
  </form>
  <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      className='backgroundColor' >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description" >
           <label htmlFor="">Email</label>
           <br/>
           <input type="text"  className="form-control1" value={values.email} name='email' onBlur={handleBlur} onChange={handleChange} />
           {errors.email && touched.email ? <span className='spanError'>{errors.email}</span> : ""}
           <br/>
           <br/>
           <label htmlFor="">Otp</label>
           
           <input  className="form-control1" type="text" value={values.otp} placeholder='Enter Otp' name='otp' onBlur={handleBlur} onChange={handleChange} />

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloses}>Cancel</Button>
          <Button onClick={verifyHandle} className='btn'>Verify</Button>
        </DialogActions>
      </Dialog>
        </div>
       </div>
       </div>
       <Modal show={show} onHide={handleClose} className='popupBox'>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body><h1 style={{color:"green"}}>{msg}</h1></Modal.Body>
        <Modal.Footer/>
      </Modal>
       </div>
  )
}
