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
    target="_blank"
  >
    <h2>{props.city}</h2>
    <h2 className={styles.thin}>{props.year}</h2>
  </a>
);

export default CityBanner;
