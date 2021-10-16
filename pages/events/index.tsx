import Head from 'next/head';
import Page from '@layouts/page/page';
import Header from '@components/header/header';
import Stack from '@components/stack/stack';
import { PageNavigation } from '@components/page-navigation/page-navigation';
import styles from './events.module.scss';
import { PastEvent, PastEventDescription } from '@sections/past-events';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import Filter, { tags } from '@sections/event-filter';
import { FC, useMemo, useState } from 'react';

export const PreviousEvent: FC<InferGetStaticPropsType<
  typeof getStaticProps
>> = ({ pastEventDescription }) => {
  const DisplayTags: { [tag in tags]: string } = {
    all: 'All',
    melbourne: 'Melbourne',
    sydney: 'Sydney'
  };

  const [tag, setTag] = useState<tags>('all');

  const handleChangeTag = (tag: tags) => {
    setTag(tag);
  };

  const filteredEvents = useMemo(() => {
    if (tag === 'all') return pastEventDescription;
    return Object.keys(pastEventDescription).reduce((obj, event) => {
      console.log(tag, pastEventDescription[event].tags);
      if (pastEventDescription[event].tags.includes(tag)) {
        console.log('yee');
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
        <Header />
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
  events = events.filter(item => !/(^|\/)\.[^\/\.]/g.test(item));

  let pastEventDescription: PastEventDescription = {} as PastEventDescription;

  await Promise.all(
    events.map(async event => {
      let eventPath: string = path.join(
        process.cwd(),
        `content/events/${event}/`
      );

      let info = await fs.readFile(`${eventPath}/info.json`, 'utf8');
      pastEventDescription[event] = {
        ...JSON.parse(info),
        /**
         * NOTE: Check if .eventignore exists to redirect to devpost
         * This check only happens server-side so shouldn't affect performance?
         */
        devPost: !!(await fs
          .stat(`${eventPath}/.eventignore`)
          .catch(_ => false))
      };
      return info;
    })
  );
  return {
    props: { pastEventDescription }
  };
};

type Content = {
  pastEventDescription: PastEventDescription;
};
