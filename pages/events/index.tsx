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

export default (props: InferGetStaticPropsType<typeof getStaticProps>) => (
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
      <Stack size="xxlarge" className={styles.content}>
        <PastEvent {...props.pastEventDescription} />
      </Stack>
    </Page>
  </div>
);

export const getStaticProps: GetStaticProps<Content> = async () => {
  const eventsDirectory = path.join(process.cwd(), 'content/events');
  let events = await fs.readdir(eventsDirectory);

  // Filter out hidden files
  events = events.filter(item => !/(^|\/)\.[^\/\.]/g.test(item));

  let pastEventDescription: Array<PastEventDescription> = await Promise.all(
    events.map(async year => {
      let eventInfoPath: string = path.join(
        process.cwd(),
        `content/events/${year}/info.json`
      );
      return {
        [year]: JSON.parse(await fs.readFile(eventInfoPath, 'utf8'))
      };
    })
  );

  return {
    props: { pastEventDescription } as Content
  };
};

type Content = {
  pastEventDescription: PastEventDescription[];
};
