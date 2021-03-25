import React from 'react';
import Icon from '@components/icon/icon';
import { H3 } from '@components/typography/typography';
import styles from './icon-label.module.scss';

type Props = {
  icon: string;
  children: React.ReactNode;
};

export const IconLabel = ({ icon, children }: Props) => (
  <div className={`${styles['icon-section']}`}>
    <Icon icon={icon} />
    <H3>{children}</H3>
  </div>
);
