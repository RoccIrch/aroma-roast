import { Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import Image from 'next/image';

import styles from '../../styles/Main.module.css'
import 'swiper/css';
import 'swiper/css/autoplay';


export default function Welcome() {
  return (
    <div className={styles.welcome}>
      <div className={styles.welcomeText}>
        <h2>Welcome to Aroma Roasting,</h2>
        <p>Welcome to Aroma Roasting, where the essence of Normandy meets the art of exceptional coffee. </p>
        <p>Aroma Roasting takes pride in crafting exquisite coffee blends that capture the unique flavors of the Normandy terroir. </p>
        <p>Our journey begins with carefully selected beans, expertly roasted to perfection, resulting in a symphony of aromas and tastes that resonate with the rich cultural heritage of Normandy. </p>
        <p>At Aroma Roasting, we blend tradition with innovation, offering a sensory experience that elevates your coffee enjoyment to new heights. </p>
        <p>Explore our curated selection of roasts and embark on a delightful journey through the captivating world of Aroma Roasting.</p>
      </div>
        
        <div className={styles.welcomeSwiper}>
          <Swiper className="mySwiper"
           modules={[Autoplay]}
           autoplay={{delay : 3000}}
           loop={true}

          >
            <SwiperSlide><Image src="/images/swiper/image1.jpg" width={600} height={450} alt="image"/></SwiperSlide>
            <SwiperSlide><Image src="/images/swiper/image2.jpg" width={600} height={450} alt="image"/></SwiperSlide>
            <SwiperSlide><Image src="/images/swiper/image3.jpg" width={600} height={450} alt="image"/></SwiperSlide>
            <SwiperSlide><Image src="/images/swiper/image4.jpg" width={600} height={450} alt="image"/></SwiperSlide>
            <SwiperSlide><Image src="/images/swiper/image5.jpg" width={600} height={450} alt="image"/></SwiperSlide>
            <SwiperSlide><Image src="/images/swiper/image6.jpg" width={600} height={450} alt="image"/></SwiperSlide>
            <SwiperSlide><Image src="/images/swiper/image7.jpg" width={600} height={450} alt="image"/></SwiperSlide>
          </Swiper>
        </div>
    </div>
  )
}
