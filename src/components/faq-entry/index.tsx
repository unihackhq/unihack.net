'use client'

import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

import styles from './style.module.css'

interface Props {
  id: string
  title: string
  content: React.ReactNode
  isAlreadyExpanded?: boolean
}

export const FaqEntry: React.FC<Props> = ({
  id,
  title,
  content,
  isAlreadyExpanded,
}) => {
  const [expanded, setExpand] = useState(isAlreadyExpanded)
  const onClick = () => setExpand((prev) => !prev)

  return (
    <div className={styles.entry} data-exapnded={expanded}>
      <button
        aria-controls={id}
        aria-expanded={expanded}
        onClick={onClick}
        type="button"
      >
        {title}
        <FontAwesomeIcon
          aria-hidden="true"
          aria-label={expanded ? 'Close' : 'Expand'}
          className={styles.icon}
          focusable="false"
          icon={expanded ? faMinus : faPlus}
        />
      </button>
      <div className={styles.answer} hidden={!expanded} id={id}>
        {content}
      </div>
    </div>
  )
}
