import classNames from 'classnames/bind';
import styles from './grid.module.scss';
import { GridItemI } from './grid-item.interface';

const cx = classNames.bind(styles);

type Props = {
  items: GridItemI[];
  basePath: string;
  style?: string;
};

const Grid = ({ style, basePath, items }: Props) => {
  const gridItems = items.map((item: GridItemI) => (
    <div key={item.name}>
      <img src={`${basePath}${item.imagePath}`} alt={item.name} />
    </div>
  ));

  return <div className={cx('grid', style)}>{gridItems}</div>;
};

export default Grid;
