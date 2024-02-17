import { Swiper, SwiperSlide } from 'swiper/react';
import CoffeeCard from './CoffeeCard';
import { coffeeList } from '@/Data/coffees';

import styles from '../../styles/Main.module.css';

export default function Coffees() {
  return (
    <div className={styles.coffees}>
        <div className={styles.coffeeContent}>
            <h2>Our roasts</h2>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                pagination={{
                clickable: false,
                }}
                breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
                }}
                className="mySwiper"
            >
                {coffeeList.map((item) => (<SwiperSlide><CoffeeCard name={item.name} image={item.image} /></SwiperSlide>))}
            </Swiper>
        </div>
    </div>
  )
}
