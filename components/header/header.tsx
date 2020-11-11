import styles from './header.module.scss';
import React from 'react';
import Link from 'next/link';
import Menu from '../menu/menu';
import { MenuItemI } from '../menu/menu-item/menu-item.interface';

type Props = {
  withLogo?: boolean;
  solid?: boolean;
};

type State = { isMenuOpen: boolean };

const Logo = () => (
  <Link href="/">
    <a className={styles['header-logo-content']}>
      <img
        className={styles['header-logo-content-img']}
        src={'/images/unihack.svg'}
      />
      <h2 className={styles['header-logo-content-name']}>UNIHACK</h2>
    </a>
  </Link>
);

const menuItems: MenuItemI[] = [
  { text: 'Sponsor', href: '/sponsorship' },
  { text: 'About', href: '/about' }
];

class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { isMenuOpen: false };
  }

  private toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  public render() {
    return (
      <div
        className={`${styles.header} ${this.props.solid ? styles.solid : null}`}
      >
        <div className={styles['header-content']}>
          <div className={styles['header-logo']}>
            {this.props.withLogo ? <Logo /> : ''}
          </div>
          <Menu
            items={menuItems}
            isOpen={this.state.isMenuOpen}
            onClick={this.toggleMenu}
          />
        </div>
      </div>
    );
  }
}

export default Header;
