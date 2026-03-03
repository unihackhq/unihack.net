import React from 'react';
import Link from 'next/link';
import { Logo } from '../logo';
import styles from './header.module.css';

interface HeaderProps {
  isPage?: boolean;
  logo?: React.ReactNode;
  nav?: {
    name: string;
    link: string;
  }[];
}

export const HomeNav = [
  {
    name: 'Hubs',
    link: '#hubs',
  },
  {
    name: 'Schedule',
    link: '#schedule',
  },
  {
    name: 'Workshops',
    link: '#workshops',
  },
  {
    name: 'Prizes',
    link: '#prizes',
  },
  {
    name: 'Sponsors',
    link: '#sponsor-us',
  },
];

export const DefaultLogo = () => {
  return (
    <>
      <Logo />
      <span>UNIHACK</span>
    </>
  )
}

export const Header = ({ logo, isPage, nav }: HeaderProps) => {
  return (
    <header className={`${styles.container} ${isPage ? styles.mini : ''}`}>
      <nav>
        <Link href="/" aria-label="UNIHACK Home" className={styles.logo}>
          { logo || (<DefaultLogo />)} 
        </Link>
        {nav && (
          <ul className={styles.navLinks}>
            {nav.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};
