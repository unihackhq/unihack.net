import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './page-navigation.module.scss';
import BackNav from '@components/back-nav/back-nav';
import Stack from '@components/stack/stack';
import { HXL } from '@components/typography/typography';

const cx = classNames.bind(styles);

type Props = {
  backLinkTitle?: string;
  backLinkHref?: string;
  underlineColor?: 'yellow' | 'midori' | 'pacific' | 'salmon';
  ignoreMargin?: boolean;
  children: ReactNode;
};

export const PageNavigation = (props: Props) => {
  const className = cx('page-navigation', !props.ignoreMargin && 'with-margin');

  return (
    <Stack className={className} size="xsmall">
      {props.backLinkTitle && props.backLinkHref ? (
        <BackNav route={props.backLinkHref}>{props.backLinkTitle}</BackNav>
      ) : null}
      <HXL underlineColor={props.underlineColor || undefined}>
        {props.children}
      </HXL>
    </Stack>
  );
};
