'use client';
import { useContext } from 'react';
import styles from './styles.module.css';
import { MobileNavContext } from './context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const MobileNavButton = () => {
  const { isOpen, openMenu } = useContext(MobileNavContext);

  return (
    <button
      className={styles.openButton}
      type="button"
      onClick={openMenu}
      aria-label="Open mobile menu"
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
    >
      <FontAwesomeIcon icon={faBars} aria-label="Open mobile menu" />
    </button>
  );
};
