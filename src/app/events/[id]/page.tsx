import { Metadata } from 'next'
import styles from './styles.module.css'
import { formatDates, getEvent, getEventTypeString, arrangePrizes } from '../utils'
import { notFound } from 'next/navigation'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { PrizeComponent } from '@/components/events-page/prize';
import { PrizeNoteComponent } from '@/components/events-page/prizes-note';


export async function generateMetadata(
  { params }: PageProps<'/events/[id]'>,
): Promise<Metadata> {
  const { id } = await params;
  const event = getEvent(id);

  if (!event) {
    return {
      title: 'Not Found'
    }
  };
 
  return {
    title: { absolute: `${event.name} - The Imagination Hackathon` },
  }
}

export default async function PastEventPage(props: PageProps<'/events/[id]'>) {
  const { id } = await props.params;
  const event = getEvent(id);

  if (!event) {
    notFound();
  }

  const { main, other } = arrangePrizes(event.prizes);
    
  return (
    <>
    <section className={styles.eventInfo}>
      <ul className={styles.breadcrumbs}>
        <li>
          <Link href="/events" prefetch={false}>
            <FontAwesomeIcon icon={faArrowLeft} />
            Past Events
          </Link>
        </li>
      </ul>
      <h2>{event.name}</h2>
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
    </section>
    {event.prizes && (<section className={styles.eventWinners}>
      <h3>Winners</h3>
      {event.prizesNote && <PrizeNoteComponent note={event.prizesNote} />}
      <div className={styles.mainGrid}>
        {main.first && <PrizeComponent prize={main.first} key={main.first.name} />}
        {main.second && <PrizeComponent prize={main.second} key={main.second.name} />}
        {main.third && <PrizeComponent prize={main.third} key={main.third.name} />}
      </div>
      <div className={styles.prizeGrid}>
      {other.map((prize) => (
        <PrizeComponent prize={prize} key={prize.name} />
      ))}
      </div>
    </section>)}
    </>
  )
}
