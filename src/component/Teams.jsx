import React, { useState } from 'react'
import axios from "axios";


const Teams = () => {
  const [userInfo,setUserInfo]=useState({
    file:[],
    filepreview:null,
  });
  const [msg,setMsg] = useState("");
  const handleInputChange=(event)=>{
setUserInfo({
  file:event.target.files[0],
  filepreview:URL.createObjectURL(event.target.files[0]),
});
  }
  const handleSubmit=()=>{
    const formdata=new FormData();
    formdata.append("avatar",userInfo.file)
    axios.post("http://localhost:5000/uploadFile",formdata,{
      headers: { "Content-Type":"multipart/from-data"}
    }).then((res)=>{
      
      if(res.data.status==1){
        localStorage.setItem("profile",JSON.stringify(userInfo.filepreview));
        setMsg(res.data.message);
        console.log("res",res.data.message);
      }
      else{
        setMsg(res.data.message);
        console.log("res",res.data.message);
      }
    });
  }
  return (
    <div>   
      
        <input type="file" name='upload_file' onChange={handleInputChange} />
        <button type='submit' onClick={handleSubmit}>submit</button>
     
     {
      userInfo.filepreview !== null ? 
      <img className='profiles' src={userInfo.filepreview} alt='Upload Image' /> : null
     }
     <h1 style={{color:"red"}}>{msg}</h1>
    </div>
  )
}

export default Teams