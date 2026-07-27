import type { Metadata } from 'next'
import styles from './styles.module.css'
import { allEventsByDescendingOrder, formatDates } from './utils'
import { Button } from '@/components/button'

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
          <div className={styles.card} key={index}>
            <div className={styles.content}>
              <h2>{event.name}</h2>
            </div>
            <div className={styles.links}>
              {event.location && <p>{event.location}</p>}
              <p className={styles.date}>
                {formatDates(event.startDate, event.endDate)}
              </p>
              <Button
                text="View Winners"
                href={`/events/${event.id ?? event.year}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
