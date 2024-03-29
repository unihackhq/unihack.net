import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './typography.module.scss';

const cx = classNames.bind(styles);

type HeadingProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  underlineColor?: 'yellow' | 'midori' | 'pacific' | 'salmon';
};

const HXL = (props: HeadingProps) => (
  <h1
    className={cx('hxl', props.className, `underline-${props.underlineColor}`)}
  >
    {props.children}
  </h1>
);

const HL = (props: HeadingProps) => (
  <h1 id={props.id} className={cx('hl', props.className)}>
    {props.children}
  </h1>
);

const H1 = (props: HeadingProps) => (
  <h1 className={cx('h1', props.className)}>{props.children}</h1>
);

const H2 = (props: HeadingProps) => (
  <h2 className={cx('h2', props.className)}>{props.children}</h2>
);

const H2XL = (props: HeadingProps) => (
  <h2 className={cx('h2xl', props.className)}>{props.children}</h2>
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
} & React.HTMLAttributes<HTMLParagraphElement>;

const Text = (props: TextProps) => {
  const className = cx('body', { 'body-bold': props.bold }, props.className);
  return props.html ? (
    <p className={className} dangerouslySetInnerHTML={{ __html: props.html }} />
  ) : (
    <p className={className}>{props.children}</p>
  );
};

const Subtext = (props: TextProps) => {
  return <p className={cx('small', props.className)}>{props.children}</p>;
};

const Subtitle = (props: TextProps) => {
  return <p className={cx('subtitle', props.className)}>{props.children}</p>;
};

export { HXL, HL, H1, H2, H2XL, H3, H4, Text, Subtext, Subtitle };
