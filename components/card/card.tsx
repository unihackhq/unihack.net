import { ReactNode } from 'react';
import styles from './card.module.scss';

type Props = {
  className?: string;
  noInset?: boolean;
  children: ReactNode;
};

const Card = (props: Props) => (
  <div
    className={`${styles.card} ${props.className ? props.className : ''} ${
      props.noInset ? styles['no-padding'] : ''
    }`}
  >
    {props.children}
  </div>
);

export default Card;
