'use client'

import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLockBodyScroll } from '@uidotdev/usehooks'
import Link from 'next/link'
import { useContext } from 'react'
import { Logo } from '@/components/logo'
import { MobileNavContext } from './context'
import styles from './styles.module.css'

interface NavItem {
  name: string
  link: string
}

interface Props {
  items: NavItem[]
}

const MobileNavInnerMenu = ({ items }: Props) => {
  const { closeMenu } = useContext(MobileNavContext)
  useLockBodyScroll()

  const onClick = () => {
    closeMenu()
  }

  return (
    <div
      className={styles.mobileNavOverlay}
      id="mobile-navigation"
      role="dialog"
    >
      <div className={styles.mobileNavHeader}>
        <Link href="/" onClick={onClick} prefetch={false}>
          <Logo />
        </Link>
        <button
          aria-label="Close mobile menu"
          className={styles.closeButton}
          onClick={closeMenu}
          type="button"
        >
          <FontAwesomeIcon aria-label="Close mobile menu" icon={faClose} />
        </button>
      </div>
      <h6 className="sr-only">Navigation</h6>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.link} onClick={onClick} prefetch={false}>
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export const MobileNavMenu = ({ items }: Props) => {
  const { isOpen } = useContext(MobileNavContext)
  return isOpen ? <MobileNavInnerMenu items={items} /> : null
}
