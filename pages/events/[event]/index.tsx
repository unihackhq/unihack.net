import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Sponsor from '@components/sponsor/sponsor';
import Stack from '@components/stack/stack';
import Page from '@layouts/page/page';
import Judges from '@sections/event-info/judges/judges';
import Prizes from '@sections/event-info/prizes/prizes';
import Sponsors from '@sections/event-info/sponsors/sponsors';
import Winners from '@sections/event-info/winners/winners';
import { getEventsList, getFilesFromEvent } from '../utils/directory';
import { EventContent } from '../types';
import EventHero from '@sections/event-info/event-hero/event-hero';
import Divider from '@components/divider/divider';

const Event = (props: EventContent) => {
  const router = useRouter();
  const event = router.query.event;

  return (
    <div>
      <Head>
        <title>UNIHACK {event}</title>
      </Head>
      <Page>
        <Stack size="xxlarge">
          <EventHero
            stats={props.stats}
            event={event as string}
            info={props.info}
          />
          <Winners data={props.winners} devpostUrl={props.info.devpostUrl} />
          <Divider />
          <Prizes data={props.prizes.prizes} />
          <Judges data={props.judges.judges} />
          <Sponsors data={props.sponsors} />
        </Stack>
        <Sponsor standalone />
      </Page>
    </div>
  );
};

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
  const events = await getEventsList();

  // Get the paths we want to pre-render based on event directories
  const paths = events.map((event: string) => {
    return { params: { event } };
  });

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This also gets called at build time
export const getStaticProps: GetStaticProps<EventContent, Params> = async ({
  params,
}) => {
  if (!params) throw new Error('Event page generation failed');

  const content = await getFilesFromEvent(params.event);

  if (content.info.redirectToDevpost) {
    // These events don't have any page. Redirect 302 to devpostURL
    return {
      notFound: true,
    };
  }

  return {
    props: { ...content },
  };
};

type Params = {
  event: string;
};

export default Event;
