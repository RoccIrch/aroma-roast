import Link from 'next/link';
import styles from '../../styles/Header.module.css';

export default function Nav() {
  return (
    <nav className={styles.navigation}>
       <ul>
        <li><Link href="">Our Roasts</Link></li>
        <li><Link href="">About us</Link></li>
        <li><Link href="">Contact</Link></li>
       </ul>
    </nav>
  )
}
