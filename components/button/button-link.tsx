import { ReactNode } from 'react';
import Link from 'next/link';
import styles from '../button/button.module.scss';

type Props = {
  type: 'primary' | 'secondary';
  theme: 'light' | 'dark';
  href: string;
  target?: string;
  children: ReactNode;
};

const ButtonLink = (props: Props) => {
  return isInternalLink(props.href) ? (
    <ButtonLinkInternal {...props} />
  ) : (
      <ButtonLinkExternal {...props} />
    );
};

const ButtonLinkInternal = (props: Props) => (
  <Link href={props.href}>
    <a
      className={`${styles['btn-link']} ${styles[props.type]} ${styles[props.theme]} ${styles.btn}`}
      target={props.target ? props.target : ''}
    >
      {props.children}
    </a>
  </Link>
);

const ButtonLinkExternal = (props: Props) => (
  <a
    className={`${styles['btn-link']} ${styles[props.type]} ${styles[props.theme]} ${styles.btn}`}
    href={props.href}
    target={props.target ? props.target : ''}
  >
    {props.children}
  </a>
);

const isInternalLink = (href: string) => {
  return href[0] === '/' ? true : false;
};

export default ButtonLink;
