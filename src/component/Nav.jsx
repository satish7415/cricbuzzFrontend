import React, { useEffect } from 'react';
import { NavLink, useNavigate} from 'react-router-dom';
import Matchnavbar from './Matchnavbar';
import { Drawer } from 'antd';
import logo from "./images/logo.jpg";
import { useState } from 'react';
import user from "./images/user.jpg";
import Logout from './Logout';
const Nav = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  
  const onClose = () => {
    setOpen(false);
  };
  const auth = JSON.parse( localStorage.getItem("user"));
 const navigate=useNavigate("");
  return (
    <>
          {auth?
          
          <div>

<div  className='newnavbar'>
<div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12'>         
<ul > 
<li>
</li>
<li>
  <NavLink className='links' onClick={()=>{showDrawer()}}>Setting</NavLink>
</li>
<Drawer title="Settings" placement="right" onClose={onClose} open={open}>
        
        {/* <p>{getdata.fname}</p> */}
        <NavLink to="/profile" className="profileLink" >
        <h5 className='profile'><img className='profileImg' src={user} alt="user icon" /> Profile</h5>
        </NavLink>
        <p><Logout/></p>
      </Drawer>

<li>
  <NavLink to='/more' className='links'>More</NavLink>
</li>
<li>
  <NavLink to='/rankings' className='links'>Rankings</NavLink>
</li>
<li>
  <NavLink to='/teams' className='links'>Teams</NavLink>
</li>
<li>
  <NavLink to='/archives' className='links'>Archives</NavLink>
</li>
<li>
  <NavLink to='/schedule' className='links'>Schedule</NavLink>
</li>
<li>
  <NavLink to='/livescore' className='links'>Live Scores</NavLink>
</li>
<li>
<NavLink to='/home' className='links'>Home</NavLink>
</li>
<div>
  <h1 className='logospan'>cri<img className='logoimg' src={logo} alt="img not found" />uzz</h1>
</div>
</ul>

</div>

</div>

</div>
</div>
<div className='matchnavbar'>
<Matchnavbar/>
</div>
</div>
          :
              <div className='loginNav'>
              <NavLink to='/' className='mlink'>Home</NavLink>
              <NavLink to='/register' className='mlink'>Register</NavLink>
              <NavLink to='/login' className='mlink'>Login</NavLink>
              </div>
            
          }
         
        </>
  )
}

export default Nav