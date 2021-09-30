import React from 'react';
import classNames from 'classnames/bind';
import Icon from '@components/icon/icon';
import { H4 } from '@components/typography/typography';
import styles from './icon-label.module.scss';

const cx = classNames.bind(styles);

type IconLabelProps = {
  icon: string;
  title?: string;
  style?: string;
  children: React.ReactNode;
};

type IconLabelWithTitleProps = {
  icon: string;
  title?: string;
  style?: string;
  children: React.ReactNode;
};

export const IconLabel = ({ icon, children, style }: IconLabelProps) => {
  return (
    <div className={cx('icon-section', style)}>
      <Icon icon={icon} />
      <p>{children}</p>
    </div>
  );
};

export const IconLabelWithTitle = ({
  icon,
  title,
  children,
  style,
}: IconLabelWithTitleProps) => {
  return (
    <div className={cx('icon-section', 'icon-section-with-title', style)}>
      <div className={cx('icon-title')}>
        <Icon icon={icon} />
        <H4>{title}</H4>
      </div>
      <p>{children}</p>
    </div>
  );
};
