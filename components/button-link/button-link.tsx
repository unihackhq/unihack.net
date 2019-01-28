import { ReactNode } from 'react';
import Link from 'next/link';
import './button-link.scss';

type Props = {
  type?: 'primary' | 'secondary',
  href: string,
  target?: string,
  children: ReactNode
};

const ButtonLink = (props: Props) => (
  <Link href={props.href}>
    <a className={'btn-link ' + props.type} target={props.target ? props.target : ''}>{props.children}</a>
  </Link>
);

export default ButtonLink;
