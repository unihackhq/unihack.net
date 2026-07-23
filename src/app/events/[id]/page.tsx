import type { Metadata } from 'next'
import styles from './styles.module.css'
import ReactPlayer from 'react-player'
import {
  formatDates,
  getEvent,
  getEventTypeString,
  arrangePrizes,
} from '../utils'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faVideo } from '@fortawesome/free-solid-svg-icons'
import { PrizeComponent } from '@/components/events-page/prize'
import { PrizeNoteComponent } from '@/components/events-page/prizes-note'
import type { Prize, PrizeNote } from '@/content/events/types'
import { Button } from '@/components/button'

export async function generateMetadata({
  params,
}: PageProps<'/events/[id]'>): Promise<Metadata> {
  const { id } = await params
  const event = getEvent(id)

  if (!event) {
    return {
      title: 'Not Found',
    }
  }

  return {
    title: { absolute: `${event.name} - The Imagination Hackathon` },
  }
}

const EventWinners = ({
  prizes,
  prizesNote,
}: {
  prizes: Prize[]
  prizesNote?: PrizeNote
}) => {
  const { main, other } = arrangePrizes(prizes)
  return (
    <section className={styles.eventWinners}>
      <h2>Winners</h2>
      {prizesNote && <PrizeNoteComponent note={prizesNote} />}
      <div className={styles.mainGrid}>
        {main.first && (
          <PrizeComponent prize={main.first} key={main.first.name} />
        )}
        {main.second && (
          <PrizeComponent prize={main.second} key={main.second.name} />
        )}
        {main.third && (
          <PrizeComponent prize={main.third} key={main.third.name} />
        )}
      </div>
      <div className={styles.prizeGrid}>
        {other.map((prize) => (
          <PrizeComponent prize={prize} key={prize.name} />
        ))}
      </div>
    </section>
  )
}

const EventVideo = ({
  videoUrl,
  videoTitle,
}: {
  videoUrl: string
  videoTitle: string
}) => (
  <li className={styles.eventVideo}>
    <span>
      <FontAwesomeIcon icon={faVideo} /> {videoTitle}
    </span>
    <div>
      <ReactPlayer src={videoUrl} width="100%" height="100%" autoPlay light />
    </div>
  </li>
)

export default async function PastEventPage(props: PageProps<'/events/[id]'>) {
  const { id } = await props.params
  const event = getEvent(id)

  if (!event) {
    notFound()
  }

  return (
    <>
      <div className={styles.container}>
        <header className={styles.eventInfo}>
          <ul className={styles.breadcrumbs}>
            <li>
              <Link href="/events" prefetch={false}>
                <FontAwesomeIcon icon={faArrowLeft} />
                Past Events
              </Link>
            </li>
          </ul>
          <h1>{event.name}</h1>
        </header>
        <div className={styles.eventLayout}>
          <aside>
            <ul className={styles.eventDetails}>
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
            <ul>
              {event.video && (
              <EventVideo
                videoUrl={event.video.url}
                videoTitle={event.video.title}
              />
            )}
            </ul>
          </div>
        </div>
      </div>
      <main className={styles.eventContent}>
        <div>
          {event.prizes && (
            <EventWinners prizes={event.prizes} prizesNote={event.prizesNote} />
          )}
        </div>
      </main>
    </>
  )
}
