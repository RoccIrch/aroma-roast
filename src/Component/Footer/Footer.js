import Link from "next/link";
import Image from "next/image";

import styles from "../../styles/Footer.module.css"

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.disclamer}>
        <p>This website is not an operational roasting company store but rather a showcase for my portfolio, highlighting my web development skills and creativity.</p>
        <p> For any DMCA complain please contact me on my github !</p>
      </div>
      
      <div className={styles.links}>
        <Link href="https://github.com/RoccIrch"><Image src="/images/github-mark-white.png" width={48} height={48} alt="githublogo"/></Link>
        
        <Link href="https://www.malt.fr/profile/antoinelaroche"><Image src="/images/malt.svg" width={48} height={48} alt="githublogo"/></Link>
      </div>
    </div>
  )
}
