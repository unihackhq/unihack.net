import React from 'react';
import Icon from '@components/icon/icon';
import { H4 } from '@components/typography/typography';
import styles from './icon-label.module.scss';

type Props = {
  icon: string;
  title?: string;
  children: React.ReactNode;
};

export const IconLabel = ({ icon, title, children }: Props) => {
  return (
    <div className={`${styles['icon-section']}`}>
      <Icon icon={icon} />
      <div className={`${styles['icon-content']}`}>
        {!!title && <H4>{title}</H4>}
        <p>{children}</p>
      </div>
    </div>
  );
};
