import { ReactNode } from 'react';
import styles from './button.module.scss';

type Props = {
  type: 'primary' | 'secondary';
  theme: 'light' | 'dark';
  active?: boolean;
  children: ReactNode;
};

const Button = (props: Props) => (
  <button className={`${styles.btn} ${styles[props.type]} ${styles[props.theme]} ${props.active ? styles['active'] : ''}`}>
    {props.children}
  </button>
);

export default Button;
