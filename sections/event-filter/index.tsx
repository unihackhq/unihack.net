import styles from './event-filter.module.scss';
import { FC } from 'react';

type Props = {
  options: string[];
};

const Filter: FC<Props> = ({ options }) => (
  <div className={styles.filter}>
    <span>Filter events</span>
    <div className={styles.buttons}>
      <button className={styles.selected}>All</button>
      {options?.map(tag => (
        <button>{tag}</button>
      ))}
    </div>
  </div>
);

export default Filter;
