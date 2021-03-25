import React from 'react';
import { H3, HL } from '@components/typography/typography';
import styles from './stat.module.scss';

export type StatType = {
  name: string;
  value: string;
  colour?: 'salmon' | 'midori' | 'pacific' | 'yellow';
};

export const Stat = ({ name, value }: StatType) => (
  <div className={styles.stat}>
    <HL className={styles.colour}>{value}</HL>
    <H3 className={styles.name}>{name}</H3>
  </div>
);
