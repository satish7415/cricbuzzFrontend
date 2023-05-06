import React from 'react';
import { NavLink } from 'react-router-dom';

const Currentmatcheslinks = () => {
  return (
    <div>
        <div className='contain live'>
        <div className='row'>
         <div className='col-md-12'>
        <div className='livescore'>
      <NavLink  className='llink'>Current Matches</NavLink>
      <NavLink  className='llink'>Current & Future Series</NavLink>
      <NavLink className='llink'>matches By Day</NavLink>
      <NavLink className='llink'>Teams</NavLink>
      <NavLink className='llink'>Series Archive</NavLink>
      
      </div>
            </div>
        </div>
    </div>
    <hr style={{background:"red",marginTop:"-1px"}} />
    </div>
  )
}

export default Currentmatcheslinks