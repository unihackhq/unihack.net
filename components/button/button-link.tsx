import { ReactNode } from 'react';
import Link from 'next/link';
import classNames from 'classnames/bind';
import styles from '../button/button.module.scss';

const cx = classNames.bind(styles);

type Props = {
  type: 'primary' | 'secondary';
  theme: 'light' | 'dark' | 'transparent';
  href: string;
  target?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
};

const ButtonLink = (props: Props) => {
  return isInternalLink(props.href) ? (
    <ButtonLinkInternal {...props} />
  ) : (
    <ButtonLinkExternal {...props} />
  );
};

const ButtonLinkInternal = (props: Props) => (
  <Link href={props.href} scroll={true}>
    <a
      className={cx(props.type, props.theme, 'btn', props.className)}
      target={props.target ? props.target : ''}
      onClick={props.onClick}
    >
      {props.children}
    </a>
  </Link>
);

const ButtonLinkExternal = (props: Props) => (
  <a
    className={cx(props.type, props.theme, 'btn', props.className)}
    href={props.href}
    target={props.target ? props.target : ''}
    onClick={props.onClick}
  >
    {props.children}
  </a>
);

const isInternalLink = (href: string) => {
  return href[0] === '/' ? true : false;
};

export default ButtonLink;
