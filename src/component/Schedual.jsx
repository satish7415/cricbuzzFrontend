import React from 'react'
import Currentmatcheslinks from './Currentmatcheslinks'
import { Link, NavLink } from 'react-router-dom'

const Schedual = () => {
  return (
    <div>
      <Currentmatcheslinks />
      <div className='container-fluid livecricket'>
        <div className='row'>
          <div className='col-md-12'>
            <h4 style={{ marginTop: "20px" }}>Cricket Schedule</h4>
            <NavLink id='link' style={{ marginTop: "70px" }}>international</NavLink>
            <NavLink id='link'>Domestic & Others</NavLink>
            <NavLink id='link'>T20 Leagues</NavLink>
            <NavLink id='link'>Women</NavLink>
            <NavLink id='link'>All Matches</NavLink>
          </div>
          <div>
          </div>
          <div className='container-fluid tue'>
            <div className='row'>
              <div className='col-md-12'>
                <h5>TUE, APR 04 2023</h5>
              </div>
            </div>
          </div>
          <div className='container-fluid icc'>

            <div className='row' style={{ marginTop: "3%" }}>
              <div className='col-md-4'>
                <h5><Link style={{ color: "#000" }} to="https://www.cricbuzz.com/cricket-series/6025/icc-cricket-world-cup-qualifier-play-off-2023">ICC Cricket World Cup Qualifier Play-off 2023</Link></h5>
              </div>
              <div className='col-md-4'>
                <p id='text'>ICC Cricket World Cup Qualifier Play-off 2023</p>
                <p id='text'>United States vs Jersey, 13th Match
                  United Cricket Club Ground, Windhoek</p>
              </div>
              <div className='col-md-4'>
                <p id='text'>1:00 PM<br />
                  07:30 AM GMT / 09:30 AM LOCAL</p>
                <p id='text'>1:00 PM<br />
                  07:30 AM GMT / 09:30 AM LOCAL</p>

              </div>
            </div>

            <div className='row tue'>
              <div className='col-md-12'>
                <h5>WED, APR 05 2023</h5>
              </div>
            </div>
            <div className='row' style={{ marginTop: "3%" }}>
              <div className='col-md-4'>
                <h5><Link style={{ color: "#000" }} to="https://www.cricbuzz.com/cricket-series/6025/icc-cricket-world-cup-qualifier-play-off-2023">ICC Cricket World Cup Qualifier Play-off 2023</Link></h5>
              </div>
              <div className='col-md-4'>
                <p id='text'>Jersey vs United Arab Emirates, 14th Match
                  Wanderers Cricket Ground, Windhoek</p>
                <p id='text'>Canada vs Papua New Guinea, 15th Match
                  United Cricket Club Ground, Windhoek</p>
              </div>
              <div className='col-md-4'>
                <p id='text'>1:00 PM<br />
                  07:30 AM GMT / 09:30 AM LOCAL</p>
                <p id='text'>1:00 PM<br />
                  07:30 AM GMT / 09:30 AM LOCAL</p>
              </div>
              <div className='col-md-4'>
                <h5><Link style={{ color: "#000" }} to="https://www.cricbuzz.com/cricket-series/6025/icc-cricket-world-cup-qualifier-play-off-2023">Sri Lanka tour New Zealand, 2023</Link></h5>
              </div>
              <div className='col-md-4'>
                <p id='text'>Jersey vs United Arab Emirates, 14th Match
                  Wanderers Cricket Ground, Windhoek</p>
              </div>
              <div className='col-md-4'>
                <p id='text'>1:00 PM<br />
                  01:30 AM GMT / 02:00 pM LOCAL</p>
              </div>
              <div className='col-md-4'>
                <h5><Link style={{ color: "#000" }} to="https://www.cricbuzz.com/cricket-series/6025/icc-cricket-world-cup-qualifier-play-off-2023">Ireland tour of Bangladesh, 2023</Link></h5>
              </div>
              <div className='col-md-4'>
                <p id='text'>Bangladesh vs Ireland, Only Test, Day 2
                  Shere Bangla National Stadium, Dhaka</p>
              </div>
              <div className='col-md-4'>
                <p id='text'>1:00 PM<br />
                  04:30 PM GMT / 10:00 AM LOCAL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Schedual