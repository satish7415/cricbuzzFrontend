import React from 'react'
import { NavLink } from 'react-router-dom'

const Cricketranking = () => {
  return (
    <>
    <div className='container-fluid cricketranking'>
         <hr style={{background:"gray",marginTop:"-1px"}} />
        <div className='row'>
            <div className="col-md-12">
            <h3 style={{margin:"22px 37px"}}>ICC Cricket Rankings - Men's Batting</h3>
            </div>
            <div className="col-md-12" style={{marginTop:"5px"}}>
                <NavLink className="clinks" to="https://www.cricbuzz.com/cricket-stats/icc-rankings/men/batting">Batting</NavLink>
                <NavLink className="clinks" to="https://www.cricbuzz.com/cricket-stats/icc-rankings/men/bowling">Bowling</NavLink>
                <NavLink className="clinks" to="https://www.cricbuzz.com/cricket-stats/icc-rankings/men/all-rounder">All-rounders</NavLink>
                <NavLink className="clinks" to="https://www.cricbuzz.com/cricket-stats/icc-rankings/men/teams">Teams</NavLink>
            </div>
        </div>
       
    </div>
    <hr style={{background:"gray",marginTop:"-1px"}} />
    </>
  )
}

export default Cricketranking