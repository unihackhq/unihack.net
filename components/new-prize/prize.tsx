import React from 'react';
import styles from './prize.module.scss';
import Stack from '@components/stack/stack';
import { H3, Text, Subtext } from '@components/typography/typography';
import { PrizeModel, PrizeLinksModel } from './prize.model';
import ButtonLink from '@components/button/button-link';

type PropTypes = {
  prize: PrizeModel;
  isSponsor?: boolean;
};

export const PrizeLinks = ({ links }: { links: PrizeLinksModel[] }) => {
  return (
    <div className={styles.links}>
      {links.map(({ link, title }) => {
        return (
          <ButtonLink theme="light" type="primary" href={link}>
            {title}
          </ButtonLink>
        );
      })}
    </div>
  );
};

export const Prize = ({ prize, isSponsor }: PropTypes) => {
  return (
    <div className={styles.prize}>
      <Stack size="small" className={styles.header}>
        <div className={styles['header-title']}>
          {prize.imagePath && <img src={prize.imagePath} alt="" />}
          <H3>
            {isSponsor && <span>Sponsor</span>}
            {prize.title}
          </H3>
        </div>
        {prize.description && <Text>{prize.description}</Text>}
        {prize.subtext && <Subtext>{prize.subtext}</Subtext>}
        {prize.links && <PrizeLinks links={prize.links} />}
      </Stack>
      {prize.contents && (
        <div className={styles['prize-content']}>
          <ul>
            {prize.contents.map((prizeContent) => {
              return <li key={prizeContent}>{prizeContent}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
