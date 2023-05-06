import React from 'react';
import img from "./images/baal.jpg";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Latextnews from './Latextnews';
import virat from "./images/prashant.jpg.png";


const Home = () => {
  const navigate=useNavigate();
  useEffect(()=>{
    const auth=localStorage.getItem("user");
    if(auth)
    {
      navigate("/livescore");
    }
   },[]);
  return (
    <div className='homeimg'>
      <div className='child'>
   <img src={img} className='baal'/>
   {/* <img src={img} className='baal2'/> */}
   <div className='ragister-btn'>
   <div className="container-fluid">
    <div>
      <div className='H1TAG'>
      <h1  >VIRAT KOHLI </h1>
      </div>
      <div>
        <img className='viratimg' src={virat} alt=""/>
      </div>
    </div>
   </div>
   </div>
   </div>

   </div>
  )
}

export default Home