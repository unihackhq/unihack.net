import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '../../button'
import styles from './styles.module.css'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'

export const PastEventsBanner = () => {
  return (
    <section className={styles.section}>
      <div className={styles.item}>
        <span>
          <FontAwesomeIcon icon={faTrophy} />
        </span>
        <div className={styles.content}>
          <p>Looking for last year's winner?</p>
          <Button href="/events" text="Visit The Past" />
        </div>
      </div>
    </section>
  )
}
