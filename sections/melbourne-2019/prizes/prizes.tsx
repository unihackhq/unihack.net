import React from 'react';
import styles from './prizes.module.scss';
import { H2, H3, H4, HL, Text } from '@components/typography/typography';
import Stack from '@components/stack/stack';
import { Prize } from '@components/prize/prize';
import prizeData from '../../../content/2021/prizes.json';

const Prizes = () => {
  const mainPrizes = prizeData.prizes.main.map(prize => {
    return <Prize key={prize.title} prize={prize} />;
  });

  const categoryPrizes = prizeData.prizes.category.map(prize => {
    return <Prize key={prize.title} prize={prize} />;
  });

  const sponsorPrizes = prizeData.prizes.sponsor.map(prize => {
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
                Is the hack usable in its current state? Does it work as the
                creators say? Is the user experience smooth? Is it well designed
                for the target audience? Our judges will want to see and use
                your prototype - so make sure it works!
              </Text>
            </Stack>
            <Stack size="xsmall">
              <H4>💪 Technical Difficulty</H4>
              <Text>
                Is the hack technically interesting or difficult? Is it just
                some lipstick on an API, or were there any technical challenges
                to surmount when building it?
              </Text>
            </Stack>
            <Stack size="xsmall">
              <H4>💡 Originality and Creativity</H4>
              <Text>
                Is the hack more than just another generic social/mobile/web/IoT
                solution? Does it do something entirely novel, or at least take
                a fresh approach to an old problem?
              </Text>
            </Stack>
            <Stack size="xsmall">
              <H4>😲 Wow Factor</H4>
              <Text>
                Is it something people would actually use? Does it fulfil a real
                need that the community, the broader society or the target
                audience has? You do not need to prepare a business plan, but
                you should at least identify who is your target audience.
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
