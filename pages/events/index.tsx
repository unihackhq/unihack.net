import Head from 'next/head';
import Page from '@layouts/page/page';
import Stack from '@components/stack/stack';
import { PageNavigation } from '@components/page-navigation/page-navigation';
import styles from './events.module.scss';
import { PastEvent } from '@sections/past-events';
import { GetStaticProps } from 'next';
import Filter, { Tags } from '@sections/event-filter';
import { FC, useEffect, useState } from 'react';
import { getPastEventInfo } from '@lib/directory';

import { JudgeGroup } from '@sections/event-info/judges/judge-group.model';
import { PrizeData } from '@sections/event-info/prizes/prize-data.model';
import { SponsorData } from '@sections/event-info/sponsors/sponsor-data.model';
import { EventScheduleData } from '@sections/event-info/event-schedule/event-schedule-data.model';
import { EventInfo } from '@sections/event-info/event-hero/event-hero';
import { StatType } from '@components/stats-banner/stat/stat';
import { WinnerModel } from '@components/winner/winner.model';

export type EventContent = {
  judges: {
    judges: JudgeGroup[];
  };
  prizes: {
    prizes: PrizeData;
  };
  schedule: EventScheduleData;
  sponsors: SponsorData;
  stats: StatType[];
  info: EventInfo;
  winners: WinnerModel[];
};

export type PastEvents = {
  [event: string]: EventInfo;
};

const DisplayTags: { [tag in Tags]: string } = {
  all: 'All',
  melbourne: 'Melbourne',
  sydney: 'Sydney',
};

export const PreviousEvent: FC<Props> = ({ events }) => {
  const [tag, setTag] = useState<Tags>('all');
  const [eventsListings, setEventsListings] = useState<PastEvents>(events);

  useEffect(() => {
    console.log(events);
    if (tag === 'all') {
      setEventsListings(events);
    } else {
      const filtered = Object.entries(events).filter(([, event]) => {
        return event.tags.includes(tag);
      });
      setEventsListings(Object.fromEntries(filtered));
    }
  }, [tag]);

  return (
    <div>
      <Head>
        <title>Previous events</title>
      </Head>

      <Page>
        <PageNavigation underlineColor="yellow">
          Previous Events.
        </PageNavigation>
        <Stack size="large" className={styles.content}>
          <Filter
            options={Object.keys(DisplayTags) as Tags[]}
            handleClick={(tag: Tags) => setTag(tag)}
            currentTag={tag}
          />
          <PastEvent list={eventsListings} />
        </Stack>
      </Page>
    </div>
  );
};

export default PreviousEvent;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const events = await getPastEventInfo();
  return {
    props: { events },
  };
};

type Props = {
  events: PastEvents;
};
