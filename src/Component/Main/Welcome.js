import styles from '../../styles/Main.module.css'
import React from 'react';
import Slider from './Slider';


export default function Welcome() {
  return (
    <div className={styles.welcome}>
      <h2>Welcome to Aroma Roasting</h2>
        <p>Welcome to Aroma Roasting, where the essence of Normandy meets the art of exceptional coffee. </p>
        <p>Aroma Roasting takes pride in crafting exquisite coffee blends that capture the unique flavors of the Normandy terroir. </p>
        <p>Our journey begins with carefully selected beans, expertly roasted to perfection, resulting in a symphony of aromas and tastes that resonate with the rich cultural heritage of Normandy. </p>
        <p>At Aroma Roasting, we blend tradition with innovation, offering a sensory experience that elevates your coffee enjoyment to new heights. </p>
        <p>Explore our curated selection of roasts and embark on a delightful journey through the captivating world of Aroma Roasting.</p>

            <Slider/>
    </div>
  )
}
