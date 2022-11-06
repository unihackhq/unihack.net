import React from 'react';
import styles from './brand-hero.module.scss';
import ButtonLink from '@components/button/button-link';
import { Text } from '@components/typography/typography';
import Stack from '@components/stack/stack';

const BrandHero = () => (
  <section className={styles['brand-hero']}>
    <Stack size="small" className={styles['brand-hero-content']}>
      <Text className={styles.title}>We are coming back for UNIHACK 2023.</Text>
      <Text className={styles.subtitle}>
        In the meantime, you can revisit what happened at UNIHACK 2022, and see
        the incredible ideas from university students.
      </Text>
      <div className={styles.actions}>
        <ButtonLink type="primary" theme="light" href="/events/2022">
          See this year's winners
        </ButtonLink>
      </div>
    </Stack>
  </section>
);

export default BrandHero;
