import React from 'react'
import { Outlet } from 'react-router-dom'
import Livescorelinks from './Livescorelinks'
import Live from './Live'

const Livescore = () => {
  return (
   
    <div>
      <Livescorelinks/>
       <Outlet/>
    </div>
    
  )
}

export default Livescore