import { ReactNode } from 'react';
import Link from 'next/link';

import styles from './menu-item.module.scss';

type Props = {
  href: string;
  children: ReactNode;
};

const MenuItem = (props: Props) => (
  <li className={styles['menu-item']}>
    <Link href={props.href}>
      <a>{props.children}</a>
    </Link>
  </li>
);

export default MenuItem;
