import { ReactNode } from 'react';
import './perk.scss';
import Card from '../../../components/card/card';

type Props = {
  className?: string,
  imgSrc: string,
  title: string,
  listItems: string[],
  children: ReactNode
};

const Perk = (props: Props) => {
  const listItems = props.listItems ? props.listItems.map((item, index) =>
    <li key={index}>{item}</li>
  ) : '';

  return (
    <Card noInset className={`perk ${props.className ? props.className : ''}`}>
      <div className="perk-img">
        <img src={props.imgSrc}/>
      </div>
      <div className="perk-desc">
        <h4>{props.title}</h4>
        <p>{props.children}</p>
        {listItems ? <ul>{listItems}</ul> : ''}
      </div>
    </Card>
  );
};

export default Perk;
