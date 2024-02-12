import Image from "next/image"
import Link from "next/link"

import styles from '../../styles/Main.module.css';

export default function CoffeeCard(props) {
  return (
    <div className={styles.coffee}>
        <Image src={'/images/coffees/italian_blend.png'} width={128} height={200} alt="coffee"/>
        <h4>{props.name}</h4>
        <Link href=''>Coming soon</Link>
    </div>
  )
}
