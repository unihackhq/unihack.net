import React from 'react';
import styles from './prizes.module.scss';
import { PrizeData } from './prize-data.model';
import { JudgingCriteria } from '@components/judging-criteria';
import { Prize } from '@components/new-prize/prize';

type PropTypes = {
  data: PrizeData;
};

const Prizes = ({ data: { main, category, sponsor } }: PropTypes) => {
  return (
    <>
      <div className={styles['main-prize']}>
        <h2>Main Prize</h2>
        <div className={styles['prize-list']}>
          {main.map((prize) => {
            return <Prize key={prize.title} prize={prize} />;
          })}
        </div>
        <JudgingCriteria />
      </div>
      <div className={styles['sponsor-prize']}>
        <h2>Sponsor Prizes</h2>
        <div className={styles['prize-list']}>
          {sponsor.map((prize) => {
            return <Prize key={prize.title} prize={prize} isSponsor={true} />;
          })}
        </div>
      </div>
      <div className={styles['category-prize']}>
        <h2>Category Prizes</h2>
        <div className={styles['prize-list']}>
          {category.map((prize) => {
            return <Prize key={prize.title} prize={prize} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Prizes;
