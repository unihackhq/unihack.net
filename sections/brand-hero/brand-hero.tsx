import React from 'react';
import styles from './brand-hero.module.scss';
import ButtonLink from '@components/button-link/button-link';
import { H2, HXL } from '@components/typography/typography';
import Stack from '@components/stack/stack';

const BrandHero = () => (
  <section className={styles['brand-hero']}>
    <Stack size="large" className={styles['brand-hero-info']}>
      <div>
        <HXL className={styles.salmon}>Create.</HXL>
        <HXL className={styles.midori}>Experience.</HXL>
        <HXL className={styles.pacific}>Share.</HXL>
      </div>
      <H2>UNIHACK 2021 has concluded.</H2>
      <div className={styles.actions}>
        <ButtonLink type="primary" href="/2021">
          More from UNIHACK 2021
        </ButtonLink>
      </div>
    </Stack>
    <div className={styles['brand-hero-graphic']}>
      <img src={`/images/brand-hero.svg`} alt="UNIHACK graphic" />
    </div>
  </section>
);

export default BrandHero;
