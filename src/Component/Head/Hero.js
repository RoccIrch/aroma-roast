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
        alt="Aroma Roasting logo"
        className={styles.logo}
        width={50}
        height={50}
        sizes="35vw"
        style={{
          width: '35%',
          height: 'auto',
        }}
      />
    </>
  )
}
