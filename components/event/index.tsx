import styles from './event.module.scss';
import { EventPost } from '@sections/past-events';
import Stack from '@components/stack/stack';
import { H3, Text } from '@components/typography/typography';
import Link from 'next/link';
type Props = {
  eventDetail: EventPost;
  eventPath: string;
};
export const Event = ({ eventDetail, eventPath }: Props) => (
  <Link
    href={eventDetail.devPost ? eventDetail.devpostUrl : `/events/${eventPath}`}
  >
    <div className={styles.event}>
      <Stack size="small" className={styles.header}>
        <div className={styles['header-title']}>
          <H3> {eventDetail.title} </H3>
        </div>

        <Stack size="xsmall">
          <Text> {eventDetail.location} </Text>
          <Text> {eventDetail.date} </Text>
        </Stack>
      </Stack>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url('images/covers/${eventDetail.coverImage}')`
        }}
      ></div>
    </div>
  </Link>
);
