import React from 'react';
import styles from './prize.module.scss';
import Stack from '@components/stack/stack';
import { H3, Text, Subtext } from '@components/typography/typography';
import { PrizeModel } from './prize.model';

type PropTypes = {
  prize: PrizeModel;
};

export const Prize = ({ prize }: PropTypes) => {
  return (
    <div className={styles.prize}>
      <Stack size="small" className={styles.header}>
        <div className={styles['header-title']}>
          {prize.imagePath && <img src={prize.imagePath} alt="" />}
          <H3>{prize.title}</H3>
        </div>
        {prize.description && <Text>{prize.description}</Text>}
        {prize.subtext && <Subtext>{prize.subtext}</Subtext>}
      </Stack>
      {prize.contents && (
        <>
          <hr className={styles.divider} />
          <div className={styles['prize-content']}>
            <Stack size="xsmall">
              {prize.contents.map((prizeContent) => {
                return <Text key={prizeContent}>{prizeContent}</Text>;
              })}
            </Stack>
          </div>
        </>
      )}
    </div>
  );
};
