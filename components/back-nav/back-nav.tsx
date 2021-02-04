import { ReactNode } from 'react';
import Link from 'next/link';
import styles from './back-nav.module.scss';
import { Text } from '@components/typography/typography';

type Props = {
  route: string;
  children: ReactNode;
};

const BackNav = (props: Props) => (
  <Link href={props.route}>
    <a className={styles['back-nav']}>
      <Text>← {props.children}</Text>
    </a>
  </Link>
);

export default BackNav;
