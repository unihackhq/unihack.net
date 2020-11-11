import styles from './menu.module.scss';
import MenuItem from './menu-item/menu-item';
import { MenuItemI } from './menu-item/menu-item.interface';

type Props = {
  items: MenuItemI[];
  isOpen: boolean;
  onClick: () => void;
};

const Menu = (props: Props) => {
  const menuItems = props.items.map(item => (
    <MenuItem key={item.text} href={item.href}>
      {item.text}
    </MenuItem>
  ));

  const navClass = props.isOpen ? styles['nav-show'] : null;

  return (
    <div className={styles.menu}>
      <div className={styles['menu-container']}>
        <button className={styles['menu-btn']} onClick={props.onClick}>
          <img src="/images/menu-icon.svg" />
        </button>
      </div>
      <ul className={`${styles.nav} ${navClass}`}>{menuItems}</ul>
    </div>
  );
};

export default Menu;
