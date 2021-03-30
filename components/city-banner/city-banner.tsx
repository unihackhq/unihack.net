import React from 'react';
import { H2 } from '@components/typography/typography';
import styles from './city-banner.module.scss';

type Props = {
  city: string;
  year: string;
  href: string;
  left?: boolean;
};

const CityBanner = (props: Props) => (
  <a
    className={`${styles['city-banner']} ${styles[props.city]} ${
      props.left ? styles.left : styles.right
    }`}
    href={props.href}
    rel="noopener noreferrer"
  >
    <H2>{props.city}</H2>
    <H2 className={styles.thin}>{props.year}</H2>
  </a>
);

export default CityBanner;
