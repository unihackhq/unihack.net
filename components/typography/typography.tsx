import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './typography.module.scss';

const cx = classNames.bind(styles);

type HeadingProps = {
  children: ReactNode;
  className?: string;
  underlineColor?: 'underline-primary' | 'underline-green'
};

const HXL = (props: HeadingProps) => (
  <h1 className={cx('hxl', props.className, props.underlineColor)}>
    {props.children}
  </h1>
);

const HL = (props: HeadingProps) => (
  <h1 className={cx('hl', props.className)}>{props.children}</h1>
);

const H1 = (props: HeadingProps) => (
  <h1 className={cx('h1', props.className)}>{props.children}</h1>
);

const H2 = (props: HeadingProps) => (
  <h2 className={cx('h2', props.className)}>{props.children}</h2>
);

const H3 = (props: HeadingProps) => (
  <h3 className={cx('h3', props.className)}>{props.children}</h3>
);

const H4 = (props: HeadingProps) => (
  <h4 className={cx('h4', props.className)}>{props.children}</h4>
);

type TextProps = {
  bold?: boolean;
  children?: ReactNode;
  html?: any;
};

const Text = (props: TextProps) => {
  const className = cx('body', { 'body-bold': props.bold });
  return props.html ? (
    <p className={className} dangerouslySetInnerHTML={{ __html: props.html }} />
  ) : (
      <p className={className}>{props.children}</p>
    );
};

export { HXL, HL, H1, H2, H3, H4, Text };
