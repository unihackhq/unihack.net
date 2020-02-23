import { ReactNode } from 'react';
import Link from 'next/link';

import './menu-item.scss';

type Props = {
  href: string;
  children: ReactNode;
};

const MenuItem = (props: Props) => (
  <li className="menu-item">
    <Link href={props.href}>
      <a>{props.children}</a>
    </Link>
  </li>
);

export default MenuItem;
