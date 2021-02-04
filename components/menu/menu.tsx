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
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2H18"
              stroke="#1F252A"
              strokeWidth="3"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
            <path
              d="M2 8H18"
              stroke="#1F252A"
              strokeWidth="3"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
            <path
              d="M2 14H18"
              stroke="#1F252A"
              strokeWidth="3"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <ul className={`${styles.nav} ${navClass}`}>{menuItems}</ul>
    </div>
  );
};

export default Menu;
