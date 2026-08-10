"use client"

import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'

export const ScrollFadeArrowDown = ({ className }: { className: string }) => {
  const [arrowOpacity, setArrowOpacity] = useState(1)

  useEffect(() => {
    const updateArrowOpacity = () => {
      const fadeDistance = Math.max(window.innerHeight * 0.2, 120)
      const nextOpacity = Math.max(0, 1 - window.scrollY / fadeDistance)

      setArrowOpacity(nextOpacity)
    }

    updateArrowOpacity()
    window.addEventListener('scroll', updateArrowOpacity, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateArrowOpacity)
    }
  }, [])

  return (
    <FontAwesomeIcon
      icon={faChevronCircleDown}
      style={{ opacity: arrowOpacity }}
      className={className}
    />
  )
}
