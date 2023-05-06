import React from 'react';
import { Link } from 'react-router-dom';

const Recent = () => {
  return (
    <div  style={{backgroundColor:"#fff"}}>
         <h5 className='tue' id='live'>ICC CRICKET WORLD CUP QUALIFIER PLAY-OFF 2023</h5>
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
    </div>
  )
}

export default Recent