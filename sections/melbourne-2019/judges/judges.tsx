import React from 'react';
import styles from './judges.module.scss';
import { H2, HL, Text } from '@components/typography/typography';
import Stack from '@components/stack/stack';
import judgeData from '../../../content/2021/judges.json';
import { Judge } from '@components/judge/judge';

const Judges = () => {
  const renderSection = ({ title, panel }) => {
    return (
      <>
        <H2>{title}</H2>
        {panel.map(judge => (
          <Judge key={judge.title} judge={judge} />
        ))}
      </>
    );
  };

  return (
    <Stack size="xlarge" className={styles['event-page-judges']}>
      <Stack size="xlarge" className={styles['event-page-judges-content']}>
        <Stack size="small">
          <HL>Judges</HL>
          <Text>Here to be impressed, so make an impression.</Text>
        </Stack>
        <div className={styles['event-page-judges-grid']}>
          {judgeData.judges.map(renderSection)}
        </div>
      </Stack>
    </Stack>
  );
};

export default Judges;
