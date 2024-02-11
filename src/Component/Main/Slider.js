import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../../styles/Main.module.css'

import 'swiper/css';

export default function Slider({}) {
    /*const swiperOptions = {
        slidesPerView: 1,
        loop: true, 
        autoplay: {
          delay: 3000,
          disableOnInteraction: false, 
        },
      };*/

  return (
    <>
      <Swiper 
         className={styles.swiper}
         slidesPerView={1}
         autoplay={{
           delay: 1000,
           disableOnInteraction: false,
         }}
         speed={1000}
         loop={true}
         pagination={{
         clickable: true,
         }}
         navigation={true}
      >
        <SwiperSlide><img src="/images/swiper/image1.jpg"  alt="image"/></SwiperSlide>
        <SwiperSlide><img src="/images/swiper/image2.jpg"  alt="image"/></SwiperSlide>
        <SwiperSlide><img src="/images/swiper/image3.jpg"  alt="image"/></SwiperSlide>
        <SwiperSlide><img src="/images/swiper/image4.jpg"  alt="image"/></SwiperSlide>
        <SwiperSlide><img src="/images/swiper/image5.jpg"  alt="image"/></SwiperSlide>
        <SwiperSlide><img src="/images/swiper/image6.jpg"  alt="image"/></SwiperSlide>
        <SwiperSlide><img src="/images/swiper/image7.jpg"  alt="image"/></SwiperSlide>
      </Swiper>
    </>
  )
}
