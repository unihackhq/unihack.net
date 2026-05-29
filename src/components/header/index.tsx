import React from 'react';
import Link from 'next/link';
import { Logo } from '../logo';
import styles from './style.module.css';

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
    name: 'Sponsor',
    link: '/sponsor',
  },
  {
    name: 'FAQs',
    link: '/faqs',
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

export const Header = ({ logo }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/" aria-label="UNIHACK Home" className={styles.logo}>
          { logo || (<DefaultLogo />)} 
        </Link>
        <div>
          <ul className={styles.navLinks}>
            {HomeNav.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
