import React from 'react';
import { Link } from 'react-router-dom';
import steven from "./images/steven.jpg";
import babar from "./images/babar.jpg";
import virat from "./images/virat.jpg";
import imam from "./images/imam.jpg";
import shubham from "./images/shubman.jpg";
import david from "./images/david.jpg";
import fakhar from "./images/fakhar.jpg";
import rohit from "./images/rohit.jpg";
import rasis from "./images/rassie.jpg";


const Odi = () => {
  return (
    <div className='card'>
        <div className="container-fluid">
            <div className="row tue">
                <div className="col-md-3">
                    <h3>Position</h3>
                </div>
                <div className="col-md-5">
                    <h3>Player</h3>
                </div>
                <div className="col-md-4">
                    <h3>Rating</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <h3 className='digits'>1</h3>
                </div>
                <div className="col-md-5">
                    <img src={babar} alt="marunsimg" className='imes' />
                    <Link className='imglinks' to="https://www.cricbuzz.com/profiles/8359/babar-azam">Babar Azam</Link>
                    <div className='spans'> PAKISTAN</div>
                </div>
                <div className="col-md-4">
                    <h3 className='digits'>862</h3>
                </div>
            </div>
            <hr style={{background:"gray",marginTop:"13px"}} />
            <div className="row">
                <div className="col-md-3">
                    <h3 className='digits'>2 </h3>
                </div>
                <div className="col-md-5">
                    <img src={virat} alt="marunsimg" className='imges' />
                    <Link className='imglinks' to="https://www.cricbuzz.com/profiles/1413/virat-kohli">Virat Kohli</Link>
                    <div className='spans'> INDIA</div>
                </div>
                <div className="col-md-4">
                    <h3 className='digits'>915</h3>
                </div>
            </div>
            <hr style={{background:"gray",marginTop:"13px"}} />
            <div className="row">
                <div className="col-md-3">
                    <h3 className='digits'>3 </h3>
                </div>
                <div className="col-md-5">
                    <img src={imam} alt="marunsimg" className='imes' />
                    <Link className='imglinks' to="https://www.cricbuzz.com/profiles/8364/imam-ul-haq">Imam-ul-Haq</Link>
                    <div className='spans'> PAKISTAN</div>
                </div>
                <div className="col-md-4">
                    <h3 className='digits'>683</h3>
                </div>
            </div>
            <hr style={{background:"gray",marginTop:"13px"}} />
            <div className="row">
                <div className="col-md-3">
                    <h3 className='digits'>4 </h3>
                </div>
                <div className="col-md-5">
                    <img src={steven} alt="marunsimg" className='imes' />
                    <Link className='imglinks' to="https://www.cricbuzz.com/profiles/2250/steven-smith">Steven Smith</Link>
                    <div className='spans'> AUSTRALIA</div>
                </div>
                <div className="col-md-4">
                    <h3 className='digits'>072</h3>
                </div>
            </div>
            <hr style={{background:"gray",marginTop:"13px"}} />
            <div className="row">
                <div className="col-md-3">
                    <h3 className='digits'>5 </h3>
                </div>
                <div className="col-md-5">
                    <img src={david} alt="marunsimg" className='imes' />
                    <Link className='imglinks' to="https://www.cricbuzz.com/profiles/8019/joe-root">Joe Root</Link>
                    <div className='spans'> ENGLAND</div>
                </div>
                <div className="col-md-4">
                    <h3 className='digits'>971</h3>
                </div>
            </div>
            {/* <hr style={{background:"gray",marginTop:"13px"}} /> */}
            <hr style={{background:"gray",marginTop:"13px"}} />
            <div className="row">
                <div className="col-md-3">
                    <h3 className='digits'>6</h3>
                </div>
                <div className="col-md-5">
                    <img src={shubham} alt="marunsimg" className='imes' />
                    <Link className='imglinks' to="https://www.cricbuzz.com/profiles/8497/travis-head">Travis Head</Link>
                    <div className='spans'> AUSTRALIA</div>
                </div>
                <div className="col-md-4">
                    <h3 className='digits'>853</h3>
                </div>
            </div>
            <hr style={{background:"gray",marginTop:"13px"}} />
            <div className="row">
                <div className="col-md-3">
                    <h3 className='digits'>7</h3>
                </div>
                <div className="col-md-5">
                    <img src={rohit} alt="marunsimg" className='imes' />
                    <Link className='imglinks' to="https://www.cricbuzz.com/profiles/6635/usman-khawaja">Usman Khawaja</Link>
                    <div className='spans'> AUSTRALIA</div>
                </div>
                <div className="col-md-4">
                    <h3 className='digits'>815</h3>
                </div>
            </div>
            <hr style={{background:"gray",marginTop:"13px"}} />
            <div className="row">
                <div className="col-md-3">
                    <h3 className='digits'>8</h3>
                </div>
                <div className="col-md-5">
                    <img src={rasis} alt="marunsimg" className='imes' />
                    <Link className='imglinks' to="https://www.cricbuzz.com/profiles/9554/rassie-van-der-dussen">Rassie van der Dussen</Link>
                    <div className='spans'> SOUTH AFRICA</div>
                </div>
                <div className="col-md-4">
                    <h3 className='digits'>792</h3>
                </div>
            </div>
            <hr style={{background:"gray",marginTop:"13px"}} />
            <div className="row">
                <div className="col-md-3">
                    <h3 className='digits'>9</h3>
                </div>
                <div className="col-md-5">
                    <img src={fakhar} alt="marunsimg" className='imes' />
                    <Link className='imglinks' to="https://www.cricbuzz.com/profiles/10863/fakhar-zaman">Fakhar Zaman</Link>
                    <div className='spans'> PAKISTAN</div>
                </div>
                <div className="col-md-4">
                    <h3 className='digits'>766</h3>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Odi