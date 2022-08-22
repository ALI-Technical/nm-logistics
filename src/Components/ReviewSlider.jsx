import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Warehouse from '../Img/Warehouse.jpg'
import Ship from '../Img/Ship.jpg'
import Ship1 from '../Img/Ship1.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import './Slider.css';

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function ReviewSlider() {
  return (
    <div className="SliderComponent">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <p>I Love It! Literally it was a wonderful experience to visit your site the developer is  so nice just awesome i want meet him in person want to know how he can develop websites like these😍 </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={`https://source.unsplash.com/600x700/?shipping`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`https://source.unsplash.com/600x700/?shipping`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`https://source.unsplash.com/600x700/?shipping`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`https://source.unsplash.com/600x700/?shipping`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`https://source.unsplash.com/600x700/?shipping`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`https://source.unsplash.com/600x700/?shipping`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`https://source.unsplash.com/600x700/?shipping`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`https://source.unsplash.com/600x700/?shipping`} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
