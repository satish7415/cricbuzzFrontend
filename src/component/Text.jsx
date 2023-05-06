import React from 'react';
import marunsimg from "./images/marnus.jpg";
import { Link } from 'react-router-dom';
import risbpnt from "./images/rishabh.jpg";
import kane from "./images/kane.jpg";
import steven from "./images/steven.jpg";
import joe from "./images/joe.jpg";
import babar from "./images/babar.jpg";
import travis from "./images/travis.jpg";
import usman from "./images/usman.jpg";
import dary from "./images/dary.jpg";

const Text = () => {
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
                    <h3 className='digits'>1 </h3>
                </div>
                <div className="col-md-5">
                    <img src={marunsimg} alt="marunsimg" className='imges' />
                    <Link className='imglinks' to="https://www.cricbuzz.com/profiles/10182/marnus-labuschagne">Marnus Labuschagne</Link>
                    <div className='spans'> AUSTRALIA</div>
                </div>
                <div className="col-md-4">
                    <h3 className='digits'>915</h3>
                </div>
            </div>
            <hr style={{background:"gray",marginTop:"13px"}} />
            <div className="row">
                <div className="col-md-3">
                    <h3 className='digits'>2 </h3>
                </div>
                <div className="col-md-5">
                    <img src={kane} alt="marunsimg" className='imes' />
                    <Link className='imglinks' to="https://www.cricbuzz.com/profiles/6326/kane-williamson">Kane Williamson</Link>
                    <div className='spans'> NEW ZEALAND</div>
                </div>
                <div className="col-md-4">
                    <h3 className='digits'>883</h3>
                </div>
            </div>
            <hr style={{background:"gray",marginTop:"13px"}} />
            <div className="row">
                <div className="col-md-3">
                    <h3 className='digits'>3 </h3>
                </div>
                <div className="col-md-5">
                    <img src={steven} alt="marunsimg" className='imes' />
                    <Link className='imglinks' to="https://www.cricbuzz.com/profiles/2250/steven-smith">Steven Smith</Link>
                    <div className='spans'> AUSTRALIA</div>
                </div>
                <div className="col-md-4">
                    <h3 className='digits'>872</h3>
                </div>
            </div>
            <hr style={{background:"gray",marginTop:"13px"}} />
            <div className="row">
                <div className="col-md-3">
                    <h3 className='digits'>4 </h3>
                </div>
                <div className="col-md-5">
                    <img src={joe} alt="marunsimg" className='imes' />
                    <Link className='imglinks' to="https://www.cricbuzz.com/profiles/8019/joe-root">Joe Root</Link>
                    <div className='spans'> ENGLAND</div>
                </div>
                <div className="col-md-4">
                    <h3 className='digits'>871</h3>
                </div>
            </div>
            <hr style={{background:"gray",marginTop:"13px"}} />
            <div className="row">
                <div className="col-md-3">
                    <h3 className='digits'>5 </h3>
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
                    <h3 className='digits'>6</h3>
                </div>
                <div className="col-md-5">
                    <img src={travis} alt="marunsimg" className='imes' />
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
                    <img src={usman} alt="marunsimg" className='imes' />
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
                    <img src={dary} alt="marunsimg" className='imes' />
                    <Link className='imglinks' to="https://www.cricbuzz.com/profiles/10713/daryl-mitchell">Daryl Mitchell</Link>
                    <div className='spans'> NEW ZEALAND</div>
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
                    <img src={risbpnt} alt="marunsimg" className='imes' />
                    <Link className='imglinks' to="https://www.cricbuzz.com/profiles/10744/rishabh-pant">Rishabh Pant</Link>
                    <div className='spans'> INDIA</div>
                </div>
                <div className="col-md-4">
                    <h3 className='digits'>766</h3>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Text