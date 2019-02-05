import { ReactNode } from 'react';
import './pill.scss';

type Props = {
  color: string,
  children: ReactNode
};

const Pill = (props: Props) => (
  <div className={'pill pill-' + props.color}>
    <p>{props.children}</p>
  </div>
);

export default Pill;
