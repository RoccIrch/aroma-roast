import styles from '../../styles/Header.module.css';
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <video autoPlay loop muted className={styles.video}>
        <source src="/videos/roasting.mp4" type="video/mp4" />
      </video>
      <div className={styles.bg}></div>
        <Image 
          src="/images/logo_dark.png"
          alt="logo"
          width={100}
          height={90}
        />
    </>
  )
}
