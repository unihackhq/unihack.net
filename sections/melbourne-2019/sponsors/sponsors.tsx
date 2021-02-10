import React from 'react';
import styles from './sponsors.module.scss';
import Grid from '@components/grid/grid';
import { H2, HL, Text } from '@components/typography/typography';
import sponsorData from '../../../content/2021/sponsors.json';
import Stack from '@components/stack/stack';

const Sponsors = () => {
  const platinumSponsorPath =
    sponsorData.base + sponsorData.sponsors.platinum.imagePath;

  return (
    <section className={styles['event-page-sponsors']}>
      <Stack size="xlarge" className={styles['event-page-sponsors-content']}>
        <Stack size="small">
          <HL>Sponsors</HL>
          <Text>Without whom this event would not be possible...</Text>
        </Stack>
        <Stack size="xlarge">
          <Stack size="xlarge">
            <div className={styles['tier-title']}>
              <H2>Platinum</H2>
              <hr className={`${styles['tier-accent']} ${styles.platinum}`} />
            </div>
            <div className={styles['logo-center']}>
              <img
                className={styles['company-logo']}
                src={platinumSponsorPath}
                alt={sponsorData.sponsors.platinum.name}
              />
            </div>
          </Stack>

          <Stack size="large">
            <div className={styles['tier-title']}>
              <H2>Gold</H2>
              <hr className={`${styles['tier-accent']} ${styles.gold}`} />
            </div>
            <Grid
              items={sponsorData.sponsors.gold}
              basePath={sponsorData.base}
            />
          </Stack>

          <Stack size="large">
            <div className={styles['tier-title']}>
              <H2>Silver</H2>
              <hr className={`${styles['tier-accent']} ${styles.silver}`} />
            </div>

            <Grid
              items={sponsorData.sponsors.silver}
              basePath={sponsorData.base}
            />
          </Stack>

          <Stack size="large">
            <div className={styles['tier-title']}>
              <H2>Bronze & Product</H2>
              <hr className={`${styles['tier-accent']} ${styles.bronze}`} />
            </div>

            <Grid
              items={sponsorData.sponsors.bronze}
              basePath={sponsorData.base}
            />
          </Stack>
        </Stack>
      </Stack>
    </section>
  );
};

export default Sponsors;
