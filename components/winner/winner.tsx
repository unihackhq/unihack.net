import React from 'react';
import ReactPlayer from 'react-player/youtube';
import Stack from '@components/stack/stack';
import { H3, Text } from '@components/typography/typography';
import styles from './winner.module.scss';
import { WinnerModel } from './winner.model';

type PropTypes = {
  winner: WinnerModel;
};

const MediaBanner = ({ hack: { name, videoPath, imagePath } }: WinnerModel) => {
  if (videoPath) {
    return <ReactPlayer url={videoPath} width="100%" height="200px" />;
  }

  return <img src={imagePath} alt={name} className={styles['winner-img']} />;
};

export const Winner = ({ winner }: PropTypes) => (
  <a
    className={styles.winner}
    href={winner.hack.devpostUrl}
    target="_blank"
    rel="noreferrer"
  >
    <Stack size="small" className={styles['winner-stack']}>
      <MediaBanner hack={winner.hack} />
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
