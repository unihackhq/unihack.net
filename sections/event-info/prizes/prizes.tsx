import React from 'react';
import styles from './prizes.module.scss';
import { H2, HL, Subtitle } from '@components/typography/typography';
import Stack from '@components/stack/stack';
import { Prize } from '@components/prize/prize';
import { PrizeData } from './prize-data.model';
import { JudgingCriteria } from '@components/judging-criteria';

type PropTypes = {
  data: PrizeData;
};

const Prizes = ({ data: { main, category, sponsor } }: PropTypes) => {
  const mainPrizes = main.map((prize) => {
    return <Prize key={prize.title} prize={prize} />;
  });

  const categoryPrizes = category.map((prize) => {
    return <Prize key={prize.title} prize={prize} />;
  });

  const sponsorPrizes = sponsor.map((prize) => {
    return <Prize key={prize.title} prize={prize} />;
  });

  return (
    <Stack size="xlarge" className={styles['event-page-prizes']}>
      <Stack size="xlarge" className={styles['event-page-prizes-content']}>
        <Stack size="small">
          <HL id="prizes">Prizes</HL>
          <Subtitle>What you can win and how to win them.</Subtitle>
        </Stack>
        <Stack size="medium" className={styles['prize-section']}>
          <H2>Main Prizes</H2>
          <div className={styles['prize-grid']}>{mainPrizes}</div>
        </Stack>
      </Stack>
      <JudgingCriteria />
      <div className={styles['event-page-prizes-content']}>
        <Stack size="xlarge">
          <Stack size="medium" className="prize-section">
            <H2>Category Prizes</H2>
            <div className={styles['prize-grid']}>{categoryPrizes}</div>
          </Stack>
          {sponsor.length > 0 && (
            <Stack size="medium" className="prize-section">
              <H2>Sponsor Prizes</H2>
              <div className={styles['prize-grid']}>{sponsorPrizes}</div>
            </Stack>
          )}
        </Stack>
      </div>
    </Stack>
  );
};

export default Prizes;
