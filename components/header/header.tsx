import './header.scss';
import React from 'react';
import Link from 'next/link';
import Menu from '../menu/menu';
import { MenuItemI } from '../menu/menu-item/menu-item.interface';

type Props = {
  withLogo?: boolean,
  solid?: boolean
};

type State = { isMenuOpen: boolean };

const Logo = () => (
  <Link href="/">
    <a className="header-logo-content">
      <img className="header-logo-content-img" src={'/static/images/unihack.svg'}/>
      <h2 className="header-logo-content-name">UNIHACK</h2>
    </a>
  </Link>
);

const menuItems: MenuItemI[] = [
  {text: 'About', href: '/about'},
  {text: 'Sponsor', href: '/sponsorship'},
  {text: 'Blog', href: 'https://medium.com/unihack-blog'}
];

class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { isMenuOpen: false };
  }

  private toggleMenu = () => {
    this.setState({isMenuOpen: !this.state.isMenuOpen});
  }

  public render() {
    return (
      <div className={`header ${this.props.solid ? 'solid' : ''}`}>
        <div className="header-content">
          <div className="header-logo">
            { this.props.withLogo ? <Logo/> : '' }
          </div>
          <Menu items={menuItems} isOpen={this.state.isMenuOpen} onClick={this.toggleMenu}/>
        </div>
      </div>
    );
  }
}

export default Header;
