import React from 'react';
import Stack from '@components/stack/stack';
import { H3, Text } from '@components/typography/typography';
import styles from './workshop.module.scss';
import { WorkshopModel } from './workshop.model';
import moment from 'moment';
import Icon from '@components/icon/icon';

type PropTypes = {
  workshop: WorkshopModel;
  imageBase: string;
};

const parseDate = (date: string) =>
  moment(date, 'YYYY-MM-DD HH:mm Z').format('ddd MMMM Do YYYY, h:mma');

export const Workshop = ({ workshop, imageBase }: PropTypes) => (
  <a
    className={styles.workshop}
    href={workshop.link}
    target="_blank"
    rel="noreferrer"
  >
    <Stack size="small" className={styles['workshop-stack']}>
      <img
        src={imageBase + workshop.imagePath}
        alt={workshop.name}
        className={styles['workshop-img']}
      />{' '}
      <Stack size="xsmall" className={styles['workshop-content']}>
        <H3>{workshop.name}</H3>
        <Text className={styles['workshop-text']}>
          <Icon icon="Location" />
          {workshop.address}
        </Text>
        <Text className={styles['workshop-text']}>
          <Icon icon="Calendar" />
          {parseDate(workshop.date)}
        </Text>
      </Stack>
      <Text className={styles['workshop-register']}>Register Now</Text>
    </Stack>
  </a>
);
