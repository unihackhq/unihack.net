import type { EventDefinition } from '@/types/event'
import { Button } from '@/components/button'
import { EventVideo } from '@/components/events-page/event-video'
import { formatDates, getEventTypeString } from '@/app/events/utils'
import styles from './styles.module.css'

interface Props {
  event: EventDefinition
}

export const EventDetails = ({ event }: Props) => {
  return (
    <div className={styles.eventLayout}>
      <aside>
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
        <div>
          <Button
            href={event.url}
            text={event.year === 2014 ? 'Event Page' : 'View Devpost'}
          />
        </div>
      </aside>
      <div>
        <ul className={styles.videoList}>
          {event.video && (
            <EventVideo
              videoUrl={event.video.url}
              videoTitle={event.video.title}
            />
          )}
        </ul>
      </div>
    </div>
  )
}
