'use client';

import React, {
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from 'react';
import styles from './styles.module.css';

interface Context {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

export const MobileNavContext = React.createContext<Context>({
  isOpen: false,
  openMenu: () => {},
  closeMenu: () => {},
});

export const MobileNavContextProvider: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const openMenu = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const state = useMemo(
    () => ({ isOpen, openMenu, closeMenu }),
    [isOpen, openMenu, closeMenu],
  );

  return (
    <MobileNavContext.Provider value={state}>
      {children}
    </MobileNavContext.Provider>
  );
};
