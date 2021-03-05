import { ReactNode } from 'react';
import Link from 'next/link';
import classNames from 'classnames/bind';

import styles from './menu-item.module.scss';
import { Text } from '@components/typography/typography';

const cx = classNames.bind(styles);

type Props = {
  href: string;
  dark?: boolean;
  children: ReactNode;
};

const MenuItem = (props: Props) => (
  <li className={cx('menu-item', props.dark && 'dark')}>
    <Link href={props.href}>
      <a>
        <Text>{props.children}</Text>
      </a>
    </Link>
  </li>
);

export default MenuItem;
