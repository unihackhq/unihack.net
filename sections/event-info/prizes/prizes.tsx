import React from 'react';
import styles from './prizes.module.scss';
import { H2, H3, H4, HL, Text } from '@components/typography/typography';
import Stack from '@components/stack/stack';
import { Prize } from '@components/prize/prize';
import { PrizeData } from './prize-data.model';

type PropTypes = {
  data: PrizeData;
};

const Prizes = ({ data }: PropTypes) => {
  const mainPrizes = data.main.map((prize) => {
    return <Prize key={prize.title} prize={prize} />;
  });

  const categoryPrizes = data.category.map((prize) => {
    return <Prize key={prize.title} prize={prize} />;
  });

  const sponsorPrizes = data.sponsor.map((prize) => {
    return <Prize key={prize.title} prize={prize} />;
  });

  return (
    <Stack size="xlarge" className={styles['event-page-prizes']}>
      <Stack size="xlarge" className={styles['event-page-prizes-content']}>
        <Stack size="small">
          <HL>Prizes</HL>
          <Text>What you can win and how to win them.</Text>
        </Stack>
        <Stack size="medium" className={styles['prize-section']}>
          <H2>Main Prizes</H2>
          <div className={styles['prize-grid']}>{mainPrizes}</div>
        </Stack>
      </Stack>
      <div className={styles['judging-section']}>
        <Stack size="medium" className={styles['judging-section-content']}>
          <H3>Judging Criteria</H3>
          <div className={styles['criteria-grid']}>
            <Stack size="xsmall">
              <H4>✨ Polish, Design, and Execution</H4>
              <Text>
                What does the project look like? Is it intuitive, aesthetically
                pleasing, and accessible? And most importantly, does it actually
                work?
              </Text>
            </Stack>
            <Stack size="xsmall">
              <H4>💪 Technical Difficulty</H4>
              <Text>
                Does the hack look technically interesting or challenging? Is it
                simply putting a pretty frontend on an existing API or does it
                do something more?
              </Text>
            </Stack>
            <Stack size="xsmall">
              <H4>💡 Originality and Creativity</H4>
              <Text>
                How unique is the hack? Does it solve a new problem, or have a
                new take on an existing problem?
              </Text>
            </Stack>
            <Stack size="xsmall">
              <H4>😲 Wow Factor</H4>
              <Text>
                Does it spark joy? Would this be something you use and show to
                your friends? Yes, this is totally subjective. But that’s what
                makes it fun.
              </Text>
            </Stack>
          </div>
        </Stack>
      </div>
      <div className={styles['event-page-prizes-content']}>
        <Stack size="xlarge">
          <Stack size="medium" className="prize-section">
            <H2>Category Prizes</H2>
            <div className={styles['prize-grid']}>{categoryPrizes}</div>
          </Stack>
          <Stack size="medium" className="prize-section">
            <H2>Sponsor Prizes</H2>
            <div className={styles['prize-grid']}>{sponsorPrizes}</div>
          </Stack>
        </Stack>
      </div>
    </Stack>
  );
};

export default Prizes;
