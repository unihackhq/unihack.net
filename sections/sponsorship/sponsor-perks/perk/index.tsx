import React, { ReactNode } from 'react';
import styles from './perk.module.scss';
import Card from '@components/card/card';
import { H3, Text } from '@components/typography/typography';
import Stack from '@components/stack/stack';
import Image from 'next/image';

type Props = {
  className: string;
  imgSrc: string;
  title: string;
  listItems: string[];
  children: ReactNode;
};

const Perk = (props: Props) => {
  const listItems = props.listItems.length
    ? props.listItems.map((item, index) => (
        <li key={index}>
          <Text>{item}</Text>
        </li>
      ))
    : null;

  return (
    <Card noInset className={`${styles.perk} ${props.className}`}>
      <div className={styles['perk-img']}>
        <Image src={props.imgSrc} layout="intrinsic" height="280" width="420" />
      </div>
      <Stack size="medium" className={styles['perk-desc']}>
        <H3>{props.title}</H3>
        <div className="text-content">
          <Text>{props.children}</Text>
          {listItems ? <ul>{listItems}</ul> : ''}
        </div>
      </Stack>
    </Card>
  );
};

export default Perk;
