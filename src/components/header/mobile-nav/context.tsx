'use client'

import React, {
  type PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from 'react'

interface Context {
  isOpen: boolean
  openMenu: () => void
  closeMenu: () => void
}

export const MobileNavContext = React.createContext<Context>({
  isOpen: false,
  openMenu: () => {},
  closeMenu: () => {},
})

export const MobileNavContextProvider: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const openMenu = useCallback(() => {
    setOpen(true)
  }, [])

  const closeMenu = useCallback(() => {
    setOpen(false)
  }, [])

  const state = useMemo(
    () => ({ isOpen, openMenu, closeMenu }),
    [isOpen, openMenu, closeMenu],
  )

  return (
    <MobileNavContext.Provider value={state}>
      {children}
    </MobileNavContext.Provider>
  )
}
