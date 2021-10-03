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

  let pastEventDescription: PastEventDescription = {} as PastEventDescription;

  await Promise.all(
    events.map(async year => {
      let eventPath: string = path.join(
        process.cwd(),
        `content/events/${year}/`
      );

      let info = await fs.readFile(`${eventPath}/info.json`, 'utf8');
      pastEventDescription[year] = {
        ...JSON.parse(info),
        /**
         * NOTE: Check if .eventignore exists to redirect to devpost
         * This check only happens server-side so shouldn't affect performance?
         */
        devPost: !!(await fs
          .stat(`${eventPath}/.eventignore`)
          .catch(e => false))
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
