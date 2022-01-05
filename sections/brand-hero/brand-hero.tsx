import React from 'react';
import styles from './brand-hero.module.scss';
import ButtonLink from '@components/button/button-link';
import { HXL, Text } from '@components/typography/typography';
import Stack from '@components/stack/stack';
import { event, AnalyticsCategory } from '../../lib/gtag';

const BrandHero = () => (
  <section className={styles['brand-hero']}>
    <Stack size="small" className={styles['brand-hero-content']}>
      <HXL className={styles.logo}>UNIHACK 2022</HXL>
      <Text className={styles.title}>
        Register for the Imagination Hackathon! <span>We are back on February 25</span>
      </Text>
      <Text className={styles.subtitle}>
        Open to all Australia and New Zealand university/TAFE students
      </Text>
      <div className={styles.actions}>
        <ButtonLink
          type="primary"
          theme="light"
          href="https://docs.google.com/forms/d/e/1FAIpQLScBvuU4VDabnj4AoBX7W-3JuGg1GiG1fJJqEnOLWBRX9FOCzQ/viewform?usp=sf_link"
          onClick={() => {
            event({
              action: 'brand_hero_registration_button_clicked',
              category: AnalyticsCategory.EVENT,
              label: 'Clicked "Registration Link"',
            });
          }}
        >
          Register Now
        </ButtonLink>
      </div>
    </Stack>
  </section>
);

export default BrandHero;
