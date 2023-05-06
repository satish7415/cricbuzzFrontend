import React from 'react';
import { NavLink } from 'react-router-dom';
import Currentmatcheslinks from './Currentmatcheslinks';

const Livescorelinks = () => {
  return (
    <> 
    <Currentmatcheslinks/>
      <div className='container-fluid livecricket'>
        <div className='row'>
            <div className='col-sm-12'>
            <div>
        <p>Live Cricket Score</p>
      <NavLink to="/livescore/Live" className='llink'>Live</NavLink>
      <NavLink to="/livescore/recent" className='llink'>Recent</NavLink>
      <NavLink to="/livescore/upcoming" className='llink'>Upcoming</NavLink>
      </div>
            </div>
        </div>
      </div>
      <hr  style={{background:"gray",marginTop:"-1px"}} />
      
    </>
  )
}

export default Livescorelinks