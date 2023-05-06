import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Swiperslider = () => {
  return (
    <div>
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className='slide'>
            <h5>2nd Match . Indian premier Legaue 2023  <span className='handleSpan'>T20</span></h5>
            <h3>PBKS <span>191-5 (20    )</span></h3>
            <h3>KKR <span>17-1 (1.5)</span></h3>
            <h4 style={{color:"red",paddingLeft:"10px"}}>Kolkata Knight Riders need 175 runs</h4>
            <div className='footer'>
                <span>FANTASY</span>
                <span>TABLE</span>
                <span>SCHEDULE</span>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='slide'>
            <h5>2nd Match . Indian premier Legaue 2023  <span>T20</span></h5>
            <h3>PBKS <span>191-5(20)</span></h3>
            <h3>KKR <span>17-1 (1.5)</span></h3>
            <h4 style={{color:"green",paddingLeft:"10px"}}>Kolkata Knight Riders need 175 runs</h4>
            <div className='footer'>
                <span>FANTASY</span>
                <span>TABLE</span>
                <span>SCHEDULE</span>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='slide'>
            <h5>2nd Match . Indian premier Legaue 2023  <span>T20</span></h5>
            <h3>Lucknow Super Giants</h3>
            <h3>Delhi Capitalis</h3>
            <h4 style={{color:"red",paddingLeft:"10px"}}>Today 07:30 PM</h4>
            <div className='footer'>
                <span>FANTASY</span>
                <span>TABLE</span>
                <span>SCHEDULE</span>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='slide'>
            <h5>2nd Match . Indian premier Legaue 2023  <span>T20</span></h5>
            <h3>CAN <span>254 (48.5)</span></h3>
            <h3>UAE <span>144-1 (30.4)</span></h3>
            <h4 style={{color:"blue",paddingLeft:"10px"}}>Gujrat Titans Won by 5 wkts</h4>
            <div className='footer'>
                <span>FANTASY</span>
                <span>TABLE</span>
                <span>SCHEDULE</span>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='slide'>
            <h5>2nd Match . Indian premier Legaue 2023  <span>T20</span></h5>
            <h3>JER <span>291-4(50)</span></h3>
            <h3>PNG <span>203-1 (2.5)</span></h3>
            <h4 style={{color:"red",paddingLeft:"10px"}}>Punjab Kings won by 7 runs (DLS method)</h4>
            <div className='footer'>
                <span>FANTASY</span>
                <span>TABLE</span>
                <span>SCHEDULE</span>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='slide'>
            <h5>2nd Match . Indian premier Legaue 2023  <span>T20</span></h5>
            <h3>CSK <span>182-7(20)</span></h3>
            <h3>GT <span>178-5 (19.2)</span></h3>
            <h4 style={{color:"green",paddingLeft:"10px"}}>Gujrat Titans Won by 5 wkts</h4>
            <div className='footer'>
                <span>FANTASY</span>
                <span>TABLE</span>
                <span>SCHEDULE</span>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='slide'>
            <h5>2nd Match . Indian premier Legaue 2023  <span>T20</span></h5>
            <h3>NED <span>190-5(46.3)</span></h3>
            <h3>RSA <span>189-2 (30)</span></h3>
            <h4 style={{color:"blue",paddingLeft:"10px"}}>South Africa Won by 8 wkts</h4>
            <div className='footer'>
                <span>FANTASY</span>
                <span>TABLE</span>
                <span>SCHEDULE</span>
            </div>
        </div>
      </SwiperSlide>
      .
      </Swiper>
    </div>
  )
}

export default Swiperslider