import React from 'react';
import styles from './brand-hero.module.scss';
import ButtonLink from '@components/button/button-link';
import { Text } from '@components/typography/typography';
import Stack from '@components/stack/stack';

const BrandHero = () => (
  <section className={styles['brand-hero']}>
    <div className={styles['brand-hero-content']}>
      <Stack size="small">
        <h1>UNIHACK 2024</h1>
        <Text className={styles.title}>
          <span>Get ready for UNIHACK 2024!</span>
        </Text>
        <Text className={styles.subtitle}>
          The competition starts at 6PM (Sydney time) on March 1.
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
          <ButtonLink
            type="primary"
            theme="transparent"
            href="https://merch.unihack.net"
          >
            Buy Stickers + T-Shirt
          </ButtonLink>
        </div>
      </Stack>
    </div>
  </section>
);

export default BrandHero;
