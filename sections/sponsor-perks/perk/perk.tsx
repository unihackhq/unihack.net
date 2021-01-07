import { ReactNode } from 'react';
import styles from './perk.module.scss';
import Card from '@components/card/card';
import { H3 } from '@components/typography/typography';

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
        <H3>{props.title}</H3>
        <p>{props.children}</p>
        {listItems ? <ul>{listItems}</ul> : ''}
      </div>
    </Card>
  );
};

export default Perk;
