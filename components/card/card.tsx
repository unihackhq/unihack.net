import { ReactNode } from 'react';
import './card.scss';

type Props = {
  className?: string,
  noInset?: boolean,
  children: ReactNode
};

const Card = (props: Props) => (
  <div className={`card ${props.className ? props.className : ''} ${props.noInset ? 'no-padding' : ''}`}>
    {props.children}
  </div>
);

export default Card;
