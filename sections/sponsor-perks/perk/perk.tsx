import { ReactNode } from 'react';
import styles from './perk.module.scss';
import Card from '../../../components/card/card';

type Props = {
  className: string;
  imgSrc: string;
  title: string;
  listItems: string[];
  children: ReactNode;
};

const Perk = (props: Props) => {
  const listItems = props.listItems
    ? props.listItems.map((item, index) => <li key={index}>{item}</li>)
    : '';

  return (
    <Card noInset className={`${styles.perk} ${props.className}`}>
      <div className={styles['perk-img']}>
        <img src={props.imgSrc} />
      </div>
      <div className={styles['perk-desc']}>
        <h3>{props.title}</h3>
        <p>{props.children}</p>
        {listItems ? <ul>{listItems}</ul> : ''}
      </div>
    </Card>
  );
};

export default Perk;
