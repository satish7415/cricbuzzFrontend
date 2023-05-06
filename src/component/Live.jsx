import React, { useState } from 'react'
import axios from "axios";
import { Link, Outlet } from 'react-router-dom';
import Recent from './Recent';

const options = {
  method: 'GET',
  url: 'https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/40381/scard',
  headers: {
    'X-RapidAPI-Key': '0ce2f2a597mshd307f10017141a1p19edbcjsnbb060d64eecc',
    'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
  }
};
const Live = () => {
    const [data,setData]=useState("");
    axios.request(options).then(function (response) {
        console.log(response.data);
        // setData(response.data.[0].matchId);
    }).catch(function (error) {
        console.error(error);
    });
  return (
    <div style={{backgroundColor:"#fff"}} id='live'>
     <div>
        <Link className='liveLink'>Portugal vs Gibraltar,</Link>
        <span className='newspan'>1st T20I <br/>
        Today  •  2:30 PM at Albergaria, Santarem Cricket Ground</span>
     <div className='livescoreData'>
            <Link className='liveLink' to="https://www.cricbuzz.com/live-cricket-scores/68829/port-vs-gib-1st-t20i-gibraltar-tour-of-portugal-2023"><h3>PORT <span>208-6 (20 Ovs)</span></h3></Link>
            <Link className='liveLink' to="https://www.cricbuzz.com/live-cricket-scores/68829/port-vs-gib-1st-t20i-gibraltar-tour-of-portugal-2023"> <h3 id='h3'>GIB <span>84 (15.3 Ovc)</span></h3></Link>
            <Link id='links' to="https://www.cricbuzz.com/live-cricket-scores/68829/port-vs-gib-1st-t20i-gibraltar-tour-of-portugal-2023">portugal won by 124 runs</Link>
        </div>
     </div>
     <Outlet/>
    </div>
  )
}

export default Live