import React from 'react';
import classNames from 'classnames/bind';
import Icon from '@components/icon/icon';
import { H4 } from '@components/typography/typography';
import styles from './icon-label.module.scss';

const cx = classNames.bind(styles);

type Props = {
  icon: string;
  title?: string;
  style?: string;
  children: React.ReactNode;
};

export const IconLabel = ({ icon, title, children, style }: Props) => {
  return (
    <div className={cx('icon-section', style)}>
      <Icon icon={icon} />
      <div className={cx('icon-content')}>
        {!!title && <H4>{title}</H4>}
        <p>{children}</p>
      </div>
    </div>
  );
};
