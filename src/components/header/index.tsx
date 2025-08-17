import Link from 'next/link';
import { Logo } from '../logo';
import styles from './header.module.css';

interface HeaderProps {
  isPage: boolean;
}

export const Header = ({ isPage = false }: HeaderProps) => {
  return (
    <header className={`${styles.container} ${isPage ? styles.mini : ''}`}>
      <nav>
        <Link href="/" aria-label="UNIHACK Home" className={styles.logo}>
          <Logo />
          <span>{isPage ? 'UNIHACK' : '2026'}</span>
        </Link>
      </nav>
    </header>
  );
};
