import { ReactNode } from 'react';
import styles from './button.module.scss';

type Props = {
  type: 'primary' | 'secondary';
  children: ReactNode;
};

const Button = (props: Props) => (
  <button className={`${styles.btn} ${styles[props.type]}`}>
    {props.children}
  </button>
);

export default Button;
