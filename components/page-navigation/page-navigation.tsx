import React, { ReactNode } from 'react';
import styles from './page-navigation.module.scss';
import BackNav from '@components/back-nav/back-nav';
import Stack from '@components/stack/stack';
import { HXL } from '@components/typography/typography';

type Props = {
  backLinkTitle?: string;
  backLinkHref?: string;
  underlineColor?: 'yellow' | 'midori' | 'pacific' | 'salmon';
  children: ReactNode;
};

export const PageNavigation = (props: Props) => {
  return (
    <Stack className={styles['page-navigation']} size="xsmall">
      {props.backLinkTitle && props.backLinkHref ? (
        <BackNav route={props.backLinkHref}>{props.backLinkTitle}</BackNav>
      ) : null}
      <HXL underlineColor={props.underlineColor || 'yellow'}>
        {props.children}
      </HXL>
    </Stack>
  );
};
