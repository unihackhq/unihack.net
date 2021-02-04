import React from 'react';
import styles from './cell.module.scss';
import { Text } from '@components/typography/typography';

type Props = {
  checked?: boolean;
  content?: string;
};

const Cell = (props: Props) => (
  <div className={styles.cell}>
    {props.content ? (
      <Text bold>{props.content}</Text>
    ) : props.checked ? (
      <Tick />
    ) : (
      <Cross />
    )}
  </div>
);

const Tick = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7 16.1091L12.9268 22L25 10" stroke="#2D2D2D" strokeWidth="3" />
  </svg>
);

const Cross = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 9L16 16L23 23" stroke="#E3E3E3" strokeWidth="3" />
    <path d="M23 9L16 16L9 23" stroke="#E3E3E3" strokeWidth="3" />
  </svg>
);

export default Cell;
