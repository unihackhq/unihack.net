import React from 'react';
import styles from './winners.module.scss';
import { HL, Text } from '@components/typography/typography';
import Stack from '@components/stack/stack';
import { WinnerModel } from '@components/winner/winner.model';
import { Winner } from '@components/winner/winner';
import ButtonLink from '@components/button-link/button-link';

type PropTypes = {
  data: WinnerModel[];
  devpostUrl: string;
};

const Winners = ({ data, devpostUrl }: PropTypes) => {
  const winners = data.map((winner) => {
    return <Winner key={winner.hack.devpostUrl} winner={winner} />;
  });

  return (
    <Stack size="xlarge" className={styles['event-page-winners']}>
      <Stack size="small">
        <HL>Winners</HL>
        <Text>Check them out!</Text>
      </Stack>
      <div className={styles['winners-grid']}>{winners}</div>

      <div className={styles.actions}>
        <ButtonLink type="primary" href={devpostUrl} target="_blank">
          See all the projects on Devpost
        </ButtonLink>
      </div>
    </Stack>
  );
};

export default Winners;
