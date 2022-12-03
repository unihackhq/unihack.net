import React from 'react';
import styles from './brand-hero.module.scss';
import ButtonLink from '@components/button/button-link';
import { Text } from '@components/typography/typography';
import Stack from '@components/stack/stack';

const BrandHero = () => (
  <section className={styles['brand-hero']}>
    <Stack size="small" className={styles['brand-hero-content']}>
      <Text className={styles.title}>
        <span>Pre-registration is NOW OPEN.</span>
      </Text>
      <Text className={styles.subtitle}>
        Be the first to know when we open for 2023.
      </Text>
      <div className={styles.actions}>
        <ButtonLink
          type="primary"
          theme="transparent"
          href="https://forms.gle/pDS9xbnBN4Ki4gNVA"
        >
          Pre-register now
        </ButtonLink>
      </div>
    </Stack>
  </section>
);

export default BrandHero;
