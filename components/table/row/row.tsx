import React from 'react';
import styles from './row.module.scss';
import { RowI } from './row.interface';

const Row = (props: RowI) => (
  <div className={styles.row}>
    <p>{props.name}</p>
  </div>
);

export default Row;
