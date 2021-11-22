import classNames from 'classnames/bind';
import styles from './grid.module.scss';
import { GridItemI } from './grid-item.interface';
import Image from 'next/image';

const cx = classNames.bind(styles);

type Props = {
  items: GridItemI[];
  basePath: string;
  style?: string;
};

const Grid = ({ style, basePath, items }: Props) => {
  const gridItems = items.map((item: GridItemI) => (
    <div key={item.name}>
      <Image
        src={`${basePath}${item.imagePath}`}
        alt={item.name}
        height="300"
        width="500"
      />
    </div>
  ));

  return <div className={cx('grid', style)}>{gridItems}</div>;
};

export default Grid;
