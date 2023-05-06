import React from 'react'
import { NavLink } from 'react-router-dom'

const Rankingnavbar = ({title}) => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12'></div>
        
      </div>
      <div className='card'>
      <p>
       {title}
      </p>
      </div>

    </div>
  )
}

export default Rankingnavbar