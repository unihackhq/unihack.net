import React from 'react';
import styles from './brand-hero.module.scss';
import ButtonLink from '@components/button/button-link';
import { H2, HXL } from '@components/typography/typography';
import Stack from '@components/stack/stack';
import { event, AnalyticsCategory } from '../../lib/gtag';
import Image from 'next/image';
import brandHero from '';

const BrandHero = () => (
  <section className={styles['brand-hero']}>
    <Stack size="small" className={styles['brand-hero-content']}>
      <HXL className={styles.logo}>UNIHACK 2022</HXL>
      <p>
        The Imagination Hackathon <span>is coming back on February 25</span>
      </p>
      <div className={styles.actions}>
        <ButtonLink
          type="primary"
          theme="light"
          href="/events/2021"
          onClick={() => {
            event({
              action: 'brand_hero_button_clicked',
              category: AnalyticsCategory.EVENT,
              label: 'Clicked "More from UNIHACK 2021"',
            });
          }}
        >
          Pre-register Now
        </ButtonLink>
        <ButtonLink
          type="primary"
          theme="light"
          href="/events/2021"
          onClick={() => {
            event({
              action: 'brand_hero_button_clicked',
              category: AnalyticsCategory.EVENT,
              label: 'Clicked "More from UNIHACK 2021"',
            });
          }}
        >
          Join the Discord
        </ButtonLink>
      </div>
    </Stack>
  </section>
);

export default BrandHero;
