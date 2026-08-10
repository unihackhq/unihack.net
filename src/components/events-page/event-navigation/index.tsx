import Link from 'next/link'
import styles from './styles.module.css'
import type { EventDefinition } from '@/types/event'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const getEventPath = (event: EventDefinition) =>
  `/events/${event.id ?? event.year.toString()}`

export const EventNavigation = ({
  previousEvent,
  nextEvent,
}: {
  previousEvent: EventDefinition | null
  nextEvent: EventDefinition | null
}) => {
  if (!previousEvent && !nextEvent) {
    return null
  }

  return (
    <nav className={styles.eventPager} aria-label="Event navigation">
      {previousEvent ? (
        <Link
          href={getEventPath(previousEvent)}
          prefetch={false}
          className={styles.eventPagerLink}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
          <div>
            <span className={styles.eventPagerLabel}>Next event</span>
            <strong>{previousEvent.name}</strong>
          </div>
        </Link>
      ) : (
        <span className={styles.eventPagerSpacer} aria-hidden="true" />
      )}

    <Link
        href="/events"
        prefetch={false}
        className={`${styles.eventPagerLink} ${styles.alignCenter}`}
    >
          <div>
            <strong>All Events</strong>
          </div>
</Link>

      {nextEvent ? (
        <Link
          href={getEventPath(nextEvent)}
          prefetch={false}
          className={`${styles.eventPagerLink} ${styles.alignRight}`}
        >
        <FontAwesomeIcon icon={faChevronRight} />
          <div><span className={styles.eventPagerLabel}>Previous event</span>
          <strong>{nextEvent.name}</strong>
          </div>
        </Link>
      ) : (
        <span className={styles.eventPagerSpacer} aria-hidden="true" />
      )}
    </nav>
  )
}