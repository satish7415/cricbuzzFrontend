import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Matchnavbar = () => {
  return (
    <>
    <div className='container-fluid navcontrol'>
      <div className='row'>
        <div className='col-md-12'>
        <Link  className='link'>MATCHES</Link>
          <Link className='link'>NZ vs SL-Preview</Link>
          <Link className='link'>GT vs CSK-Preview</Link>
          <Link className='link'>UAE vs USA-Com</Link>
          <Link className='link'>JER vs NAM-NAM</Link>
          <Link className='link'>BAN vs iIRE-Preview</Link>
        </div>
      </div> 
    </div>
    </>
  )
}

export default Matchnavbar