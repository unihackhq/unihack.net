import styles from './event.module.scss';
import { EventModel } from './event.model';
import Stack from "@components/stack/stack";
import { H3, Text } from '@components/typography/typography';

export const Event = ({ title, location, date, imagePath }: EventModel) => (
  <div className={styles.event}>
    <Stack size="small" className={styles.header}>
      <div className={styles['header-title']}>
        <H3> {title} </H3>
      </div>

      <Stack size="xsmall">
        <Text> {location} </Text>
        <Text> {date} </Text>
      </Stack>
    </Stack>
    <div className={styles.image} style={{ backgroundImage: `url(${imagePath})` }}>
    </div>
  </div>
);
