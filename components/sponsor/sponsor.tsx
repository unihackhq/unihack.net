import React from 'react';
import Image from 'next/image';
import classNames from 'classnames/bind';
import styles from './sponsor.module.scss';
import ButtonLink from '../button/button-link';
import image from '../../public/images/homepage/sponsorship.png';

const cx = classNames.bind(styles);

const Sponsor = ({
  standalone,
  className,
}: {
  standalone?: boolean;
  className?: string;
}) => (
  <section className={cx('sponsor', { standalone }, className)}>
    <Image
      src={image}
      layout="fill"
      objectFit="cover"
      objectPosition="20%"
      quality="100"
      placeholder="blur"
    />
    <div className={cx('sponsor-content')}>
      <h2>Looking to sponsor?</h2>
      <p>Join us in the Imagination Revolution</p>
      <ButtonLink theme="transparent" type="primary" href="/sponsorship">
        Sponsor UNIHACK 2022
      </ButtonLink>
    </div>
  </section>
);

export default Sponsor;
