import { ReactNode } from 'react';
import Link from 'next/link';
import styles from './back-nav.module.scss';

type Props = {
  route: string;
  children: ReactNode;
};

const BackNav = (props: Props) => (
  <Link href={props.route}>
    <a className={styles['back-nav']}>← {props.children}</a>
  </Link>
);

export default BackNav;
