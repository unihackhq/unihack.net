import React from 'react';
import Stack from '@components/stack/stack';
import { H3, Text } from '@components/typography/typography';
import styles from './winner.module.scss';
import { WinnerModel } from './winner.model';

type PropTypes = {
  winner: WinnerModel;
};

export const Winner = ({ winner }: PropTypes) => (
  <a
    className={styles.winner}
    href={winner.hack.devpostUrl}
    target="_blank"
    rel="noreferrer"
  >
    <Stack size="small" className={styles['winner-stack']}>
      <img
        src={winner.hack.imagePath}
        alt=""
        className={styles['winner-img']}
      />
      <Stack size="xsmall" className={styles['winner-content']}>
        <H3>{winner.hack.name}</H3>
        <Text className={styles['winner-description']}>
          {winner.hack.description}
        </Text>
      </Stack>
      <Stack size="xsmall" className={styles.prizes}>
        {winner.hack.prizes.map((prize) => {
          return (
            <div
              key={`${winner.hack.name}-${prize.title}`}
              className={styles.prize}
            >
              <div className={styles['prize-name']}>
                <img src={prize.imagePath} alt="" />
                <Text bold>{prize.title}</Text>
              </div>
            </div>
          );
        })}
      </Stack>
    </Stack>
  </a>
);
