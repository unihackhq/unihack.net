import { H2XL } from '@components/typography/typography';
import React from 'react';
import styles from './about-hero.module.scss';


const Abouthero = () => (
  <section className={styles['about-hero']}>
    <div className={styles['about-hero-container']}>
      <H2XL>
        We help build the next generation of makers and thinkers
      </H2XL>
    </div>
  </section>
);

export default Abouthero;
