import React from 'react';
import styles from './sponsors.module.scss';
import Grid from '@components/grid/grid';
import { H2, HL, Text } from '@components/typography/typography';
import Stack from '@components/stack/stack';
import { SponsorData } from './sponsor-data.model';

type PropTypes = {
  data: SponsorData;
};

const Sponsors = ({ data }: PropTypes) => {
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
              {data.sponsors.platinum.map(sponsor => {
                return (
                  <img
                    key={sponsor.name}
                    className={styles['company-logo']}
                    src={data.base + sponsor.imagePath}
                    alt={sponsor.name}
                  />
                );
              })}
            </div>
          </Stack>

          <Stack size="large">
            <div className={styles['tier-title']}>
              <H2>Gold</H2>
              <hr className={`${styles['tier-accent']} ${styles.gold}`} />
            </div>
            <Grid items={data.sponsors.gold} basePath={data.base} />
          </Stack>

          <Stack size="large">
            <div className={styles['tier-title']}>
              <H2>Silver</H2>
              <hr className={`${styles['tier-accent']} ${styles.silver}`} />
            </div>

            <Grid items={data.sponsors.silver} basePath={data.base} />
          </Stack>

          <Stack size="large">
            <div className={styles['tier-title']}>
              <H2>Bronze & Product</H2>
              <hr className={`${styles['tier-accent']} ${styles.bronze}`} />
            </div>

            <Grid items={data.sponsors.bronze} basePath={data.base} />
          </Stack>
        </Stack>
      </Stack>
    </section>
  );
};

export default Sponsors;
