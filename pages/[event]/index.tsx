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
import { JudgeGroup } from '@sections/event-info/judges/judge-group.model';
import Prizes from '@sections/event-info/prizes/prizes';
import Sponsors from '@sections/event-info/sponsors/sponsors';
import { PrizeData } from '@sections/event-info/prizes/prize-data.model';
import { SponsorData } from '@sections/event-info/sponsors/sponsor-data.model';
import { EventScheduleData } from '@sections/event-info/event-schedule/event-schedule-data.model';

const Event = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>UNIHACK {router.query.event}</title>
      </Head>
      <Page>
        <Header />
        <Stack size="xxlarge">
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
  const events = await fs.readdir(eventsDirectory);

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

  const content = filenames.map(async filename => {
    const filePath = path.join(eventContentDirectory, filename);
    const fileContents = await fs.readFile(filePath, 'utf8');

    // Return an object where the property name is the filename minus the ".json" extension
    return {
      [path.parse(filename).name]: JSON.parse(fileContents)
    };
  });

  const contentArray = await Promise.all(content);
  const transformedContent = contentArray.reduce(
    (obj, item) => ((obj[Object.keys(item)[0]] = Object.values(item)[0]), obj),
    {}
  ) as Content;

  return {
    props: {
      ...transformedContent
    }
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
};

export default Event;
