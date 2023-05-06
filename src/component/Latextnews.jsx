import React from 'react';
import {Link} from 'react-router-dom';
import img from "./images/powerplay.jpg";
import img2 from "./images/shakib.jpg";
import img3 from "./images/likevedio.jpg";
import img4 from "./images/ipldvedio.jpg";
import img5 from "./images/rcb.jpg";
const Latextnews = () => {
  return (
    <div>
        <hr style={{background:"red",marginTop:"-1px"}} />
        <div className='container-fluid latestNewsControler'>
        <div className='row'>
            <div className='col-md-4 border'>
                <p className='text' >LATEST NEWS</p>
                <p id='text'>Australia Women set to earn big in historical Mou <br/><span className='span'>13m ago</span></p>

<hr style={{background:"green",marginTop:"-1px"}} />
<p id='text'>USA and UAE pull ahead at World Cup Qualifier Play-Off
<br/>
<span className='span'>13h ago</span>
</p>

<hr style={{background:"green",marginTop:"-1px"}} />
<p id='text'>Williamson ruled out of IPL 2023 with knee injury
    <br/>
<span className='span'>1d ago</span>
</p>

<hr style={{background:"green",marginTop:"-1px"}} />
<p><p id='text'>Former India allrounder Salim Durani passes away
    <br/>
<span className='span'> 1d ago</span>
</p>

<hr style={{background:"green",marginTop:"-1px"}} /></p>
<p id='text'>
Ponting laments 'sloppy' DC fielding
<br/>
<span className='span'>1d ago</span>
</p>
<hr style={{background:"green",marginTop:"-1px"}} />
<p id='text'>
RCB hoping to have Patidar back at some stage of IPL 2023
<br/>
<span className='span'>1d ago</span>
</p>
<hr style={{background:"green",marginTop:"-1px"}} />
<p id='text'>
Tamim Iqbal returns to squad for Ireland Test<br/>
<span className='span'>1d ago</span>
</p>
<hr style={{background:"green",marginTop:"-1px"}} />
<p id='text'>
Beauty lies in the eyes of Benoni<br/>
<span className='span'>2d ago </span>
</p>
<hr style={{background:"green",marginTop:"-1px"}} />
<p id='text'>
Chandrakant Pandit: The conventional outlier<br/>
<span className='span'>2d ago</span>

</p>
<hr style={{background:"green",marginTop:"-1px"}} />
<p id='text'>
Taskin backs Bangladesh's positive approach despite crushing loss
<br/>
<span className='span'>2d ago</span>
</p>
            </div>
            <div className='col-md-4 border'>
                <p>IPL 2023</p>
                <Link id='imges' to="https://www.cricbuzz.com/live-cricket-scores/66197/ipl-2023">
                    <img src={img} /> 
                </Link>
                   <h4>
                    CSK openers fall after century stand
                    Ruturaj Gaikwad hit a fifty again as CSK raised 101 in 8 overs
                    </h4>
                    <p id='text'>Ruturaj Gaikwad hit a fifty again as CSK raised 101 in 8 overs</p>
                    
                    <div className='s'>
            <h3>CSK <span>118-2(10.2)</span></h3>
            <h3>RSA </h3>
            <h4 style={{color:"tomato",paddingLeft:"10px"}}>Lucknow Super Giants opt to  bowl</h4>
            </div>
            <hr style={{background:"red",marginTop:"-1px"}} />
            <div>-
                <p>IPL 2023</p>
                <Link to='https://www.cricbuzz.com/cricket-news/126147/shakib-al-hasan-out-of-ipl-2023'><img src={img2}/>
                </Link>
                <h4>Shakib Al Hasan out of IPL 2023</h4>
                <p id='text'>The all-rounder has informed Kolkata Knight Riders that he will be unavailable for the entire season</p>
            </div>
                    </div>
            
            <div className='col-md-4 border'>
            <p className='text' >FEATURED VIDEOS</p>
            <Link to='https://www.cricbuzz.com/cricket-videos/62297/like-rashid-khan-ravi-bishnois-arm-speed-makes-him-dangerous-lisa-sthalekar'>
                <img src={img3}/>
            </Link>
            <h4>
Like Rashid Khan, Ravi Bishnoi's arm speed makes him dangerous: Lisa Sthalekar
</h4>
<span>37m ago</span>
<div>
                <Link to='https://www.cricbuzz.com/cricket-news/126141/rcb-make-all-the-right-noises-in-a-happy-homecoming'>
                <img src={img5} style={{marginTop:"20px"}}/>
                </Link>
                <h4>RCB make all the right noises in a happy homecoming</h4>
                <span>1d ago</span>
            </div>
            <br></br>
<div>
                <Link>
                <img src={img4} />
                </Link>
            </div>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default Latextnews