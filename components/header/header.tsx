import React, { useState } from 'react';
import Link from 'next/link';
import styles from './header.module.scss';
import Menu from '../menu/menu';
import { Logo } from '../logo';
import { MenuItemI } from '../menu/menu-item/menu-item.interface';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems: MenuItemI[] = [
    { text: 'Past Events', href: '/events' },
    { text: 'Sponsor', href: '/sponsorship' },
    { text: 'FAQs', href: '/faq' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles['header-content']}>
        <div className={styles['header-logo']}>
          <Link href="/">
            <a
              className={styles['header-logo-content']}
              aria-label="UNIHACK Home"
            >
              <Logo showWordmark />
            </a>
          </Link>
        </div>
        <Menu items={menuItems} isOpen={isMenuOpen} onClick={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;
