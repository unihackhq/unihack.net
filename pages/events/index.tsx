import Head from 'next/head';
import Page from '@layouts/page/page';
import Stack from '@components/stack/stack';
import { PageNavigation } from '@components/page-navigation/page-navigation';
import styles from './events.module.scss';
import { PastEvent, PastEventDescription } from '@sections/past-events';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import Filter, { tags } from '@sections/event-filter';
import { FC, useMemo, useState } from 'react';
import { EventInfo } from '@sections/event-info/event-hero/event-hero';

export const PreviousEvent: FC<InferGetStaticPropsType<typeof getStaticProps>> =
  ({ pastEventDescription }) => {
    const DisplayTags: { [tag in tags]: string } = {
      all: 'All',
      melbourne: 'Melbourne',
      sydney: 'Sydney',
    };

    const [tag, setTag] = useState<tags>('all');

    const handleChangeTag = (tag: tags) => {
      setTag(tag);
    };

    const filteredEvents = useMemo(() => {
      if (tag === 'all') return pastEventDescription;
      return Object.keys(pastEventDescription).reduce((obj, event) => {
        if (pastEventDescription[event].tags.includes(tag)) {
          obj[event] = pastEventDescription[event];
        }
        return obj;
      }, {} as any);
    }, [tag]);

    return (
      <div>
        <Head>
          <title>Previous events</title>
        </Head>

        <Page>
          <PageNavigation
            backLinkTitle="Home"
            backLinkHref="/"
            underlineColor="yellow"
          >
            Previous Events.
          </PageNavigation>
          <Stack size="large" className={styles.content}>
            <Filter
              options={Object.keys(DisplayTags) as tags[]}
              handleClick={handleChangeTag}
              currentTag={tag}
            />
            <PastEvent {...filteredEvents} />
          </Stack>
        </Page>
      </div>
    );
  };

export default PreviousEvent;

export const getStaticProps: GetStaticProps<Content> = async () => {
  const eventsDirectory = path.join(process.cwd(), 'content/events');
  let events = await fs.readdir(eventsDirectory);

  // Filter out hidden files
  events = events.filter((item) => !/(^|\/)\.[^\/\.]/g.test(item));

  let pastEventDescription: PastEventDescription = {} as PastEventDescription;

  await Promise.all(
    events.map(async (event) => {
      const eventPath: string = path.join(
        process.cwd(),
        `content/events/${event}/`
      );
      const info = JSON.parse(
        await fs.readFile(`${eventPath}/info.json`, 'utf8')
      ) as EventInfo;
      if (!info?.hidden) pastEventDescription[event] = info;
      return info;
    })
  );

  return {
    props: { pastEventDescription },
  };
};

type Content = {
  pastEventDescription: PastEventDescription;
};
