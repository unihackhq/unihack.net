import React from 'react';
import styles from './judge.module.scss';
import Stack from '@components/stack/stack';
import { H3, Text } from '@components/typography/typography';
import { JudgeModel } from './judge.model';

type PropTypes = {
  judge: JudgeModel;
};

export const Judge = ({ judge }: PropTypes) => {
  return (
    <div className={styles.judge}>
      <img src={judge.imagePath} alt="" />
      <div className={styles.content}>
        <H3>{judge.name}</H3>
        <Text className={styles.title}>{judge.title}</Text>
        <Text className={styles.org}>{judge.org}</Text>

        {!!judge.links && (
          <ul>
            {judge.links.map(({ name, href }) => (
              <li key="name">
                <a href={href}>{name}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
