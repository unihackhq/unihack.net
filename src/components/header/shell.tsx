'use client';

import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';
import styles from './core.module.css';

type ScrollDirection = 'up' | 'down';

export const NavShell: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [direction, setDirection] = useState<ScrollDirection>('up');
  const [scrolled, setScrolled] = useState<boolean>(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    let tick = false;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY <= 0 ? 0 : window.scrollY;
      if (scrollY > prevScrollY.current) {
        setDirection('down');
      } else if (scrollY < prevScrollY.current) {
        setDirection('up');
      }
      setScrolled(scrollY == 0 ? false : true);
      prevScrollY.current = scrollY;
      tick = false;
    };

    const handleScroll = () => {
      if (!tick) {
        requestAnimationFrame(updateScrollDirection);
        tick = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={styles.navShell}
      data-dir={direction}
      data-scrolled={scrolled}
    >
      {children}
    </div>
  );
};
