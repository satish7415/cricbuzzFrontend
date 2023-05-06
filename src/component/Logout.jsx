import React from 'react';
import Link from 'antd/es/typography/Link';
import { useNavigate } from 'react-router-dom';
import logout from "./images/logout.jpg";
const Logout = () => {
    const navigate = useNavigate();
    const handleLogout=()=>{
        const confrm=window.confirm("Do you want logout");
        if(confrm===true)
        {
          localStorage.clear();
          navigate("/login");
        }
        else{
          navigate("/home");
        }
      }
  return (
    <div>
        <img className='logOutImg' src={logout} alt="" />
        <Link onClick={()=>{handleLogout()}} className='logOut'>LogOut</Link>
    </div>
  )
}

export default Logout