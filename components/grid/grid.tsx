import classNames from 'classnames/bind';
import styles from './grid.module.scss';
import { GridItemI } from './grid-item.interface';

const cx = classNames.bind(styles);

type Props = {
  items: GridItemI[];
  basePath: string;
  small?: boolean;
};

const Grid = (props: Props) => {
  const gridItems = props.items.map((item: GridItemI) => (
    <div key={item.name}>
      <img src={`${props.basePath}${item.imagePath}`} alt={item.name} />
    </div>
  ));

  const styles = ['grid'];
  if (props.small) styles.push('grid-small');

  return <div className={cx(...styles)}>{gridItems}</div>;
};

export default Grid;
