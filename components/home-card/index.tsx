import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';
import ButtonLink from '../button/button-link';
import styles from './home-card.module.scss';

const cx = classNames.bind(styles);

interface Props {
  title: string | ReactNode;
  placeholderColor: 'midori' | 'pacific' | 'salmon' | 'purple';
  buttonLink: string;
  buttonText: string;
  image?: any; // of type Static Import
}

const HomeCard = ({
  title,
  image,
  buttonLink,
  buttonText,
  placeholderColor,
}: Props) => (
  <section className={cx('homeCard', placeholderColor)}>
    {image && (
      <Image src={image} layout="responsive" quality="100" placeholder="blur" />
    )}
    <div className={cx('content')}>
      <h2>{title}</h2>
      <ButtonLink theme="transparent" type="primary" href={buttonLink}>
        {buttonText}
      </ButtonLink>
    </div>
  </section>
);

export default HomeCard;
