import React from 'react'
import { Link } from 'react-router-dom'

const Thirldnavbar = () => {
  return (
    <div className='thirldNavbar'>
      <hr style={{background:"red",marginTop:"-11px"}} />
      <span>Indian Premier League</span>
        <Link className='lik'>Home</Link>
        <Link className='lik'>Matches</Link>
        <Link className='lik'>News</Link>
        <Link className='lik'>Videos</Link>
        <Link className='lik'>Points Table</Link>
        <Link className='lik'>Squads</Link>
    </div>
  )
}

export default Thirldnavbar