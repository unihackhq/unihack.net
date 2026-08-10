import type { Metadata } from 'next'
import styles from './styles.module.css'
import { allEventsByDescendingOrder, formatDates } from './utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const metadata: Metadata = {
  title: 'Past Events',
}

export default async function PastEventsPage() {
  return (
    <div className={styles.container}>
      <header>
        <h1>Past Events</h1>
        <p className={styles.description}>
          Looking for our past events? You've come to the right place.
        </p>
      </header>
      <div className={styles.grid}>
        {allEventsByDescendingOrder.map((event, index) => (
          <a className={styles.card} key={index} href={`/events/${event.id ?? event.year}`}>
            <div className={styles.content}>
              <h2>{event.name}</h2>
              {event.location && <p>{event.location}</p>}
              <p className={styles.date}>
                {formatDates(event.startDate, event.endDate)}
              </p>
            </div>
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        ))}
      </div>
    </div>
  )
}
