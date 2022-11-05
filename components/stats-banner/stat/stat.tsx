import React from 'react';
import styles from './stat.module.scss';
import classNames from 'classnames/bind';

export type StatType = {
  name: string;
  value: string;
  colour?: 'salmon' | 'midori' | 'pacific' | 'yellow';
};

const cx = classNames.bind(styles);

export const Stat = ({ name, value }: StatType) => (
  <div className={cx('stat', styles.colour)}>
    <p>
      <span className={styles.headline}>{value}</span> {name}
    </p>
  </div>
);
