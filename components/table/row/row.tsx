import React from 'react';
import styles from './row.module.scss';
import { RowI } from './row.interface';
import { Text } from '@components/typography/typography';

const Row = (props: RowI) => (
  <div className={styles.row}>
    <Text>{props.name}</Text>
  </div>
);

export default Row;
