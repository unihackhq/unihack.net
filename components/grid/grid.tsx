import './grid.scss';
import { GridItemI } from './grid-item.interface';

type Props = {
  items: GridItemI[],
  basePath: string
};

const Grid = (props: Props) => {
  const gridItems = props.items.map((item: GridItemI) =>
    <img src={`${props.basePath}${item.imagePath}`} alt={item.name} key={item.name}/>
  );

  return (
    <div className="grid">
      {gridItems}
    </div>
  );

};

export default Grid;
