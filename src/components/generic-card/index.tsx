import styles from './style.module.css';
import { Button } from '@/components/button';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface GenericCardProps {
  title: string;
  subtext: string;
  primaryColor?: string;
  secondaryColor?: string;
  mode?: 'outline' | 'filled';
  header?: React.ReactNode;
  footer?: React.ReactNode;
  actions: {
    href: string;
    text: string;
  }[];
}

export const GenericCard = ({
  title,
  subtext,
  primaryColor = 'transparent',
  secondaryColor = 'white',
  mode = 'filled',
  header,
  footer,
  actions,
}: GenericCardProps) => {
  const styles = {
    '--primary-color': primaryColor,
    '--secondary-color': secondaryColor,
  } as React.CSSProperties;

  return (
    <div className={cx('card', mode)} style={styles}>
      {header}
      <div className={cx('content')}>
        <h3>{title}</h3>
        <p className={cx('subtext')}>{subtext}</p>
      </div>
      <div className={cx('actions')}>
        {actions.map((action, index) => (
          <Button key={index} href={action.href} text={action.text} />
        ))}
      </div>
      {footer}
    </div>
  );
};
