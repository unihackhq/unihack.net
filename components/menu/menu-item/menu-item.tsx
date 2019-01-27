import { ReactNode } from 'react';
import Link from 'next/link';

import './menu-item.scss';

type Props = {
  href: string,
  children: ReactNode
};

const MenuItem = (props: Props) => (
  <Link href={props.href}>
    <a className="menu-item">
      <li>{props.children}</li>
    </a>
  </Link>
);

export default MenuItem;
