import React from 'react';
import styles from './brand-hero.module.scss';
import ButtonLink from '@components/button/button-link';
import { Text } from '@components/typography/typography';
import Stack from '@components/stack/stack';

const BrandHero = () => (
  <section className={styles['brand-hero']}>
    <Stack size="small" className={styles['brand-hero-content']}>
      <Text className={styles.title}>
        <span>UNIHACK is back on March 3!</span>
      </Text>
      <Text className={styles.subtitle}>
        The Imagination Hackathon returns.
      </Text>
      <div className={styles.actions}>
        <ButtonLink
          type="primary"
          theme="transparent"
          href="https://manage.unihack.net/signup"
        >
          Register Now
        </ButtonLink>
        <ButtonLink
          type="primary"
          theme="transparent"
          href="https://manage.unihack.net"
        >
          Manage My Team
        </ButtonLink>
      </div>
    </Stack>
  </section>
);

export default BrandHero;
