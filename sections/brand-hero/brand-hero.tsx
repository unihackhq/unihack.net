import React from 'react';
import styles from './brand-hero.module.scss';
import ButtonLink from '@components/button/button-link';
import { H2, HXL } from '@components/typography/typography';
import Stack from '@components/stack/stack';
import { event, AnalyticsCategory } from '../../lib/gtag';

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
        <ButtonLink
          type="primary"
          theme="light"
          href="/events/2021"
          onClick={() => {
            event({
              action: 'brand_hero_button_clicked',
              category: AnalyticsCategory.EVENT,
              label: 'Clicked "More from UNIHACK 2021"'
            });
          }}
        >
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
