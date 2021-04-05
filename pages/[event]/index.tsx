import React from 'react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { promises as fs } from 'fs';
import path from 'path';

import Header from '@components/header/header';
import Sponsor from '@components/sponsor/sponsor';
import Stack from '@components/stack/stack';
import Page from '@layouts/page/page';
import Judges from '@sections/event-info/judges/judges';
import Prizes from '@sections/event-info/prizes/prizes';
import Sponsors from '@sections/event-info/sponsors/sponsors';
import Winners from '@sections/event-info/winners/winners';
import { JudgeGroup } from '@sections/event-info/judges/judge-group.model';
import { PrizeData } from '@sections/event-info/prizes/prize-data.model';
import { SponsorData } from '@sections/event-info/sponsors/sponsor-data.model';
import { EventScheduleData } from '@sections/event-info/event-schedule/event-schedule-data.model';
import EventHero, {
  EventInfo,
} from '@sections/event-info/event-hero/event-hero';
import Divider from '@components/divider/divider';
import { StatType } from '@components/stats-banner/stat/stat';
import { WinnerModel } from '@components/winner/winner.model';

const Event = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const event = router.query.event;

  return (
    <div>
      <Head>
        <title>UNIHACK {event}</title>
      </Head>
      <Page>
        <Header />
        <Stack size="xxlarge">
          <EventHero
            stats={props.stats}
            event={event as string}
            info={props.info}
          />
          <Divider />
          <Winners data={props.winners} devpostUrl={props.info.devpostUrl} />
          <Divider />
          <Prizes data={props.prizes.prizes} />
          <Judges data={props.judges.judges} />
          <Sponsors data={props.sponsors} />
        </Stack>
        <Sponsor />
      </Page>
    </div>
  );
};

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
  const eventsDirectory = path.join(process.cwd(), 'content/events');
  let events = await fs.readdir(eventsDirectory);

  // Filter out hidden files
  events = events.filter((item) => !/(^|\/)\.[^\/\.]/g.test(item));

  // Get the paths we want to pre-render based on event directories
  const paths = events.map((event: string) => {
    return { params: { event } };
  });

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This also gets called at build time
export const getStaticProps: GetStaticProps<Content> = async ({ params }) => {
  const eventContentDirectory = path.join(
    process.cwd(),
    `content/events/${params!.event}`
  );

  const filenames = await fs.readdir(eventContentDirectory);

  const content = filenames.map(async (filename) => {
    const filePath = path.join(eventContentDirectory, filename);
    const fileContents = await fs.readFile(filePath, 'utf8');

    // Return an object where the property name is the filename minus the ".json" extension
    return {
      [path.parse(filename).name]: JSON.parse(fileContents),
    };
  });

  const contentArray = await Promise.all(content);
  const transformedContent = contentArray.reduce(
    (obj, item) => ((obj[Object.keys(item)[0]] = Object.values(item)[0]), obj),
    {}
  ) as Content;

  return {
    props: {
      ...transformedContent,
    },
  };
};

type Content = {
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

export default Event;
