import React from 'react';
import styles from './sponsors.module.scss';
import Grid from '@components/grid/grid';
import { H2, HL } from '@components/typography/typography';
import Stack from '@components/stack/stack';
import { SponsorData } from './sponsor-data.model';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type PropTypes = {
  data: SponsorData;
  title?: string;
  className?: string;
  isHomepage?: boolean;
};

const Sponsors = ({
  data: { sponsors, titles, base },
  title = 'Sponsors',
  isHomepage,
  className,
}: PropTypes) => {
  return (
    <section className={cx({ 'event-page-sponsors': !isHomepage }, className)}>
      <Stack size="xlarge" className={styles['event-page-sponsors-content']}>
        <Stack size="small">
          <HL id="sponsors">{title}</HL>
        </Stack>
        <Stack size="xlarge">
          {sponsors.platinum && (
            <Stack size="xlarge">
              <div className={styles['tier-title']}>
                <H2>{titles?.platinum ?? 'Platinum'}</H2>
                <hr className={`${styles['tier-accent']} ${styles.platinum}`} />
              </div>
              <div className={styles['logo-center']}>
                {sponsors.platinum.map((sponsor) => {
                  return (
                    <img
                      key={sponsor.name}
                      className={styles['company-logo']}
                      src={base + sponsor.imagePath}
                      alt={sponsor.name}
                    />
                  );
                })}
              </div>
            </Stack>
          )}
          {sponsors.gold && (
            <Stack size="large">
              <div className={styles['tier-title']}>
                <H2>{titles?.gold ?? 'Gold'}</H2>
                <hr className={`${styles['tier-accent']} ${styles.gold}`} />
              </div>
              <Grid items={sponsors.gold} basePath={base} />
            </Stack>
          )}
          {sponsors.silver && (
            <Stack size="large">
              <div className={styles['tier-title']}>
                <H2>{titles?.silver ?? 'Silver'}</H2>
                <hr className={`${styles['tier-accent']} ${styles.silver}`} />
              </div>
              <Grid items={sponsors.silver} basePath={base} />
            </Stack>
          )}
          {sponsors.bronze && (
            <Stack size="large">
              <div className={styles['tier-title']}>
                <H2>{titles?.bronze ?? 'Bronze & Product'}</H2>
                <hr className={`${styles['tier-accent']} ${styles.bronze}`} />
              </div>
              <Grid items={sponsors.bronze} basePath={base} />
            </Stack>
          )}
        </Stack>
      </Stack>
    </section>
  );
};

export default Sponsors;
