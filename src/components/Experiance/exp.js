import "./exp.css";
import "./styles.css";

import "swiper/css";
import "swiper/css/navigation";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

const Exp = () => {
  return (
    <>
      <div className="exp">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Exp;
