'use client'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { MobileNavContext } from './context'
import styles from './styles.module.css'

export const MobileNavButton = () => {
  const { isOpen, openMenu } = useContext(MobileNavContext)

  return (
    <button
      aria-controls="mobile-navigation"
      aria-expanded={isOpen}
      aria-label="Open mobile menu"
      className={styles.openButton}
      onClick={openMenu}
      type="button"
    >
      <FontAwesomeIcon aria-label="Open mobile menu" icon={faBars} />
    </button>
  )
}
