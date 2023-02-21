import React from 'react';
import styles from './workshops.module.scss';
import { HL, Subtitle } from '@components/typography/typography';
import { WorkshopsModel } from '@components/workshop/workshop.model';
import { Workshop } from '@components/workshop';
import Stack from '@components/stack/stack';

type PropTypes = {
  data: WorkshopsModel;
};

const Workshops = ({ data }: PropTypes) => {
  const workshops = data.events.map((event) => {
    return (
      <Workshop workshop={event} key={event.name} imageBase={data.imageBase} />
    );
  });

  return (
    <div id="workshops" className={styles['event-page-workshops']}>
      <Stack size="small">
        <HL>Workshops</HL>
        <Subtitle>
          Meet, learn and have an opportunity to network with some of the best
          and talented people in the industry.
        </Subtitle>
      </Stack>
      <div className={styles['workshop-grid']}>{workshops}</div>
    </div>
  );
};

export default Workshops;
