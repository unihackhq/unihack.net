import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './styles.module.css'

interface Props {
  href: string
  text: string
}

export const HeroButton: React.FC<Props> = ({ href, text }) => {
  return (
    <a className={styles.button} href={href}>
      {text}
      <FontAwesomeIcon icon={faArrowRight} />
    </a>
  )
}
