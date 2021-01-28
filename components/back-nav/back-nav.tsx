import { ReactNode } from 'react';
import Link from 'next/link';
import styles from './back-nav.module.scss';
import { Text } from '@components/typography/typography';

type Props = {
  className?: string;
  route: string;
  children: ReactNode;
};

const BackNav = (props: Props) => (
  <section className={styles['back-nav']}>
    <Link href={props.route}>
      <a>
        <Text className={`${props.className ? props.className : ''}`}>
          ← {props.children}
        </Text>
      </a>
    </Link>
  </section>
);

export default BackNav;
