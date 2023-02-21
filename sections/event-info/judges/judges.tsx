import React from 'react';
import styles from './judges.module.scss';
import { H2, HL, Subtitle } from '@components/typography/typography';
import Stack from '@components/stack/stack';
import { Judge } from '@components/judge/judge';
import { JudgeGroup } from './judge-group.model';

type PropTypes = {
  data: JudgeGroup[];
};

const Judges = ({ data }: PropTypes) => {
  const renderSection = ({ title, panel }: JudgeGroup) => {
    return (
      <React.Fragment key={title}>
        <H2>{title}</H2>
        {panel.map((judge) => (
          <Judge key={judge.name} judge={judge} />
        ))}
      </React.Fragment>
    );
  };

  return (
    <Stack size="xlarge" className={styles['event-page-judges']}>
      <Stack size="xlarge" className={styles['event-page-judges-content']}>
        <Stack size="small">
          <HL>Judges</HL>
          <Subtitle>Here to be impressed, so make an impression.</Subtitle>
        </Stack>
        <div className={styles['event-page-judges-grid']}>
          {data.map(renderSection)}
        </div>
      </Stack>
    </Stack>
  );
};

export default Judges;
