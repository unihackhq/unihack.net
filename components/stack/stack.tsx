import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './stack.module.scss';

const cx = classNames.bind(styles);

type Props = {
  size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
  children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Stack = (props: Props) => {
  return (
    <div className={cx(styles[`stack-${props.size}`], props.className)}>
      {props.children}
    </div>
  );
};

export default Stack;
