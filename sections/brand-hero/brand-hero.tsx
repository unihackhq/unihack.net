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
        The Imagination Hackathon <span>is coming back on February 25</span>
      </Text>
      <Text>
        Open to all Australia and New Zealand university/TAFE students
      </Text>
      <div className={styles.actions}>
        <ButtonLink
          type="primary"
          theme="light"
          href="https://docs.google.com/forms/d/e/1FAIpQLScBvuU4VDabnj4AoBX7W-3JuGg1GiG1fJJqEnOLWBRX9FOCzQ/viewform?usp=sf_link"
          onClick={() => {
            event({
              action: 'brand_hero_preregistration_button_clicked',
              category: AnalyticsCategory.EVENT,
              label: 'Clicked "Pre-Registration Link"',
            });
          }}
        >
          Pre-register Now
        </ButtonLink>
        <ButtonLink
          type="primary"
          theme="light"
          href="https://discord.gg/MfuzHurGpd"
          onClick={() => {
            event({
              action: 'brand_hero_join_discord_button_clicked',
              category: AnalyticsCategory.EVENT,
              label: 'Clicked "Join Discord"',
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
