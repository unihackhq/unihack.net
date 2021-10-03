import styles from './event.module.scss';
import { EventInfo } from '@sections/event-info/event-hero/event-hero';
import Stack from '@components/stack/stack';
import { H3, Text } from '@components/typography/typography';

// TODO: need to check if path exists, and then fallback to devpostURL
export const Event = ({ title, location, date, coverImage }: EventInfo) => (
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
    <div
      className={styles.image}
      style={{ backgroundImage: `url('images/covers/${coverImage}')` }}
    ></div>
  </div>
);
