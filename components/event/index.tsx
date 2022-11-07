import styles from './event.module.scss';
import Stack from '@components/stack/stack';
import { H3, Text } from '@components/typography/typography';
import Link from 'next/link';
type Props = {
  link: string;
  title: string;
  location: string;
  date: string;
  image: string;
};
export const Event = ({ link, title, date, location, image }: Props) => (
  <Link href={link}>
    <div className={styles.event}>
      <Stack size="xsmall" className={styles.header}>
        <div className={styles['header-title']}>
          <H3>{title}</H3>
        </div>

        <Stack size="xsmall">
          <div className={styles.description}>
            <Text>{location}</Text>
            <Text>{date}</Text>
          </div>
        </Stack>
      </Stack>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url('images/${image}')`,
        }}
      ></div>
    </div>
  </Link>
);
