import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import styles from './styles.module.css'
import { EventBrandingBackground, EventDefinition } from '@/types/event'
import { formatDates, getEventTypeString } from '@/app/events/utils'
import { ScrollFadeArrowDown } from '@/components/events-page/event-header/scroll-fade-arrow-down'

export const DefaultEventHeader = ({ eventName }: { eventName: string }) => {
    return (
                <header className={styles.default}>
          <ul className={styles.breadcrumbs}>
            <li>
              <Link href="/events" prefetch={false}>
                <FontAwesomeIcon icon={faArrowLeft} />
                Past Events
              </Link>
            </li>
          </ul>
          <h1>{eventName}</h1>
        </header>
    )
}

export const BrandedEventHeader = ({ event, background }: { event: EventDefinition, background: EventBrandingBackground }) => {
  return (
    <header className={styles.branded}>
      <div className={styles.overlay}>
        <Image
          alt={background.altText}
          fill={true}
          placeholder="blur"
          src={background.image}
          className={background.position ? styles[`img-${background.position}`] : ''}
        />
      </div>
      <div className={styles.content}>
        <span></span>
          <h1>{event.name}</h1>
        <div>
                    <ul className={styles.eventDetailsList}>
          <li>
            <span>Date</span> {formatDates(event.startDate, event.endDate)}
          </li>
          <li>
            <span>Location</span> {event.location}
          </li>
          <li>
            <span>Type</span> {getEventTypeString(event.type)}
          </li>
        </ul>
          <ScrollFadeArrowDown className={styles.arrowDown} />
      </div>
      </div>
    </header>

  )
}
