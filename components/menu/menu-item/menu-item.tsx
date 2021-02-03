import { ReactNode } from 'react';
import Link from 'next/link';

import styles from './menu-item.module.scss';
import { Text } from '@components/typography/typography';

type Props = {
  href: string;
  children: ReactNode;
};

const MenuItem = (props: Props) => (
  <li className={styles['menu-item']}>
    <Link href={props.href}>
      <a>
        <Text>{props.children}</Text>
      </a>
    </Link>
  </li>
);

export default MenuItem;
