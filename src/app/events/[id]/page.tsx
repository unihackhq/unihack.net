import type { Metadata } from 'next'
import styles from './styles.module.css'
import { getAdjacentEvents, getEvent } from '../utils'
import { notFound } from 'next/navigation'
import { EventWinners } from '@/components/events-page/event-winners'
import { DefaultEventHeader, BrandedEventHeader } from '@/components/events-page/event-header'
import { EventFooter } from '@/components/events-page/event-footer'
import classNames from 'classnames/bind'
import type { EventBrandingBackground, EventDefinition } from '@/types/event'
import { EventVideo } from '@/components/events-page/event-video'
import { EventNavigation } from '@/components/events-page/event-navigation'

const cx = classNames.bind(styles);

type EventWithCustomBackground = EventDefinition & {
  branding: {
    background: EventBrandingBackground
  }
}


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

const hasCustomBackground = (
  event: EventDefinition,
): event is EventWithCustomBackground => !!event.branding?.background

export default async function PastEventPage(props: PageProps<'/events/[id]'>) {
  const { id } = await props.params
  const event = getEvent(id)

  if (!event) {
    notFound()
  }

  const brandedBackground = hasCustomBackground(event)
    ? event.branding.background
    : null
  const { previousEvent, nextEvent } = getAdjacentEvents(id)


  return (
    <>
      {brandedBackground 
        ? (<BrandedEventHeader event={event} background={brandedBackground} />) 
        : (<div className={cx('container')}><DefaultEventHeader eventName={event.name} /></div>)
      }
      <main className={cx('eventContent')}>
        <div>
          {/* <EventDetails event={event} /> */}
           {event.video && (
            <EventVideo
              videoUrl={event.video.url}
              videoTitle={event.video.title}
            />
           )}
          {event.prizes && (
            <EventWinners prizes={event.prizes} prizesNote={event.prizesNote} />
          )}
          <EventFooter event={event} />
          <EventNavigation previousEvent={previousEvent} nextEvent={nextEvent} />
        </div>
      </main>
      </>
  )
}
