import Head from 'next/head';
import Page from '@layouts/page/page';
import SponsorHero from '@sections/sponsorship/sponsor-hero';
import PreviousSponsors from '@sections/sponsorship/previous-sponsors';
import SponsorPrompt from '@sections/sponsorship/sponsor-prompt';
import SponsorGetInvolved from '@sections/sponsorship/sponsor-get-involved';
import Stack from '@components/stack/stack';
import styles from './sponsorship.module.scss';
import SponsorEventOutline from '@sections/sponsorship/sponsor-event-outline';

export default () => (
  <>
    <Head>
      <title>Sponsor UNIHACK 2025</title>
      <meta property="og:title" content="Sponsor UNIHACK 2025" key="title" />
    </Head>
    <Page>
      <SponsorHero />
      <Stack size="xxlarge" className={styles.body}>
        <SponsorGetInvolved />
        <SponsorEventOutline />
        <PreviousSponsors />
      </Stack>
      <SponsorPrompt />
    </Page>
  </>
);
