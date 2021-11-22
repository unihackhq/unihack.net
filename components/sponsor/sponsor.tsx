import React from 'react';
import Image from 'next/image'
import styles from './sponsor.module.scss';
import ButtonLink from '../button/button-link';
import image from '../../public/images/homepage/sponsorship.png';

const Sponsor = () => (
  <section className={styles.sponsor}>
    <Image src={image} layout="fill" quality="100" />
    <div className={styles['sponsor-content']}>
        <h2>Looking to sponsor?</h2>
        <p>Join us in the Imagination Revolution</p>
        <ButtonLink
          theme="transparent"
          type="primary"
          href="/sponsorship"
        >
          Sponsor UNIHACK 2022
        </ButtonLink>
    </div>
  </section>
);

export default Sponsor;
