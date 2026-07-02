import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '../../button'
import styles from './style.module.css'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'

export const PastEventsBanner = () => {
  return (
    <section className={styles.stretch} id="past-events">
      <div className={styles.section}>
        <span>
          <FontAwesomeIcon icon={faTrophy} />
        </span>
        <div className={styles.content}>
          <p className={styles.discordText}>
            Looking for last year's winner?
          </p>
          <Button href="/events" text="View Archive" />
        </div>
      </div>
    </section>
  )
}
