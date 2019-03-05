import './grid.scss';
import { GridItemI } from './grid-item.interface';

type Props = {
  items: GridItemI[],
  basePath: string
};

const Grid = (props: Props) => {
  const gridItems = props.items.map((item: GridItemI) => (
    <span key={item.name}>
      <img src={`${props.basePath}${item.imagePath}`} alt={item.name}/>
    </span>
  ));

  return (
    <div className="grid">
      {gridItems}
    </div>
  );

};

export default Grid;
