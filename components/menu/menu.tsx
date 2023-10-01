import styles from './menu.module.scss';
import MenuItem from './menu-item/menu-item';
import { MenuItemI } from './menu-item/menu-item.interface';

type Props = {
  items: MenuItemI[];
  isOpen: boolean;
  onClick: () => void;
};

const BarsSvg = () => {
  /** Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  */
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
      <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
    </svg>
  );
};

const CloseSvg = () => {
  /** Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  */
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
      <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
    </svg>
  );
};

const Menu = (props: Props) => {
  const menuItems = props.items.map((item) => (
    <MenuItem key={item.text} href={item.href}>
      {item.text}
    </MenuItem>
  ));

  const navClass = props.isOpen ? styles['nav-show'] : null;

  return (
    <nav className={styles.menu}>
      <div className={styles['menu-container']}>
        <button
          className={`${styles['menu-btn']} ${navClass}`}
          onClick={props.onClick}
        >
          {props.isOpen ? <CloseSvg /> : <BarsSvg />}
        </button>
      </div>
      <ul className={`${styles.nav} ${navClass}`}>{menuItems}</ul>
    </nav>
  );
};

export default Menu;
