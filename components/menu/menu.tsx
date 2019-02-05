import './menu.scss';
import MenuItem from './menu-item/menu-item';
import { MenuItemI } from './menu-item/menu-item.interface';

type Props = {
  items: MenuItemI[],
  isOpen: boolean,
  onClick: () => void
};

const Menu = (props: Props) => {
  const menuItems = props.items.map((item) =>
    <MenuItem key={item.text} href={item.href}>{item.text}</MenuItem>
  );

  const navClass = props.isOpen ? 'nav-show' : '';

  return (
    <div className="menu">
      <div className="menu-container">
        <button className="menu-btn" onClick={props.onClick}>
          <img src="/static/images/menu-icon.svg"/>
        </button>
      </div>
      <ul className={`nav ${navClass}`}>
        {menuItems}
      </ul>
    </div>
    // <button className={'btn ' + props.type}>{props.children}</button>
  );
};

export default Menu;
