import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import Cricketranking from './Cricketranking';
import Text from './Text';
import Odi from "./Odi";
import T20 from "./T20";

const Ranking = () => {
  const [active,setActive] = useState("first");
  return (
    <div>
     <Cricketranking/>
    <div>
    
    <nav className='cricketranking'>
    <hr style={{background:"gray",marginTop:"-18px"}} />
        <NavLink className="clinks" onClick={()=>{setActive("first")}}>TEST</NavLink>
        <NavLink className="clinks" onClick={()=>{setActive("second")}}>ODI</NavLink>
        <NavLink className="clinks" onClick={()=>{setActive("thirld")}}>T20</NavLink>
      </nav>
      <hr style={{background:"gray",marginTop:"-1px"}} />
      {active==="first" &&<Text/>}
      {active==="second" &&<Odi/>}
      {active==="thirld" &&<T20/>}
    </div>
  </div>
  )
}

export default Ranking