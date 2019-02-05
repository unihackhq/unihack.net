import { ReactNode } from 'react';
import './button.scss';

type Props = {
  type?: 'primary' | 'secondary',
  children: ReactNode
};

const Button = (props: Props) => (
  <button className={'btn ' + props.type}>{props.children}</button>
);

export default Button;
