import { ReactNode } from 'react';
import styles from './pill.module.scss';

type Props = {
  color: string;
  children: ReactNode;
};

const Pill = (props: Props) => (
  <div className={`${styles.pill} ${styles[`pill-${props.color}`]}`}>
    <p>{props.children}</p>
  </div>
);

export default Pill;
