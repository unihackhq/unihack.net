import classNames from 'classnames/bind';
import styles from './team.module.scss';
import { TeamItemI } from './team-item.interface';
import Image from 'next/image';
import { H3, Text } from '@components/typography/typography';

const cx = classNames.bind(styles);

type Props = {
  items: TeamItemI[];
  basePath: string;
  style?: string;
};

const Team = ({ style, basePath, items }: Props) => {
  const teamItems = items.map((item: TeamItemI) => (
    <div className={cx('images')}>
      <Image
        className={styles.images}
        src={`${basePath}${item.imagePath}`}
        alt={item.name}
        height="500"
        width="500"
      />
      <div className={styles.content}>
        <H3>{item.name}</H3>
        <Text className={styles.title}>{item.role}</Text>
      </div>
    </div>
  ));

  return <div className={cx('team', style)}>{teamItems}</div>;
};

export default Team;
