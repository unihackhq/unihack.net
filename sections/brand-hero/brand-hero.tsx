import React from 'react';
import styles from './brand-hero.module.scss';
import ButtonLink from '@components/button/button-link';
import { Text } from '@components/typography/typography';
import Stack from '@components/stack/stack';

const BrandHero = () => (
  <section className={styles['brand-hero']}>
    <div className={styles['brand-hero-content']}>
      <Stack size="small">
        <h1>UNIHACK 2025 - 14-16 March, 2025</h1>
        <Text className={styles.title}>
          <span>March 14-16, 2025</span>
        </Text>
        <Text className={styles.subtitle}>
          The Imagination Hackathon is back for another year.
        </Text>
        <div className={styles.actions}>
          <ButtonLink
            type="primary"
            theme="transparent"
            href="https://manage.unihack.net"
          >
            Register Now
          </ButtonLink>
          <ButtonLink
            type="primary"
            theme="transparent"
            href="https://merch.unihack.net"
          >
            Buy Swag (coming soon)
          </ButtonLink>
        </div>
      </Stack>
    </div>
  </section>
);

export default BrandHero;
