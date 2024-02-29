import Link from 'next/link';

import styles from '../../styles/Main.module.css';

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h2>Please contact us by email</h2>
      
      <button className={styles.btn}>
        <span>
          Contact us !
        </span>
      </button>

    </div>
  )
}
