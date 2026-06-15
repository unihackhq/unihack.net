import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type React from 'react'
import { mergeClassNames } from '@/utils/classnames'
import styles from './style.module.css'

interface ButtonProps {
  href: string
  text: string
  className?: any
}

export const Button: React.FC<ButtonProps> = ({ href, text, className }) => {
  return (
    <a className={mergeClassNames(styles.button, className)} href={href}>
      {text}
      <FontAwesomeIcon icon={faArrowRight} />
    </a>
  )
}
