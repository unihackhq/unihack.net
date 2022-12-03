import Head from 'next/head';
import Page from '@layouts/page/page';
import SponsorHero from '@sections/sponsorship/sponsor-hero';
import Addons from '@sections/sponsorship/sponsor-addons';
import PreviousSponsors from '@sections/sponsorship/previous-sponsors';
import SponsorPerks from '@sections/sponsorship/sponsor-perks';
import SponsorPrompt from '@sections/sponsorship/sponsor-prompt';
import SponsorGetInvolved from '@sections/sponsorship/sponsor-get-involved';
import TiersTable from '@sections/sponsorship/tiers-table';
import Stack from '@components/stack/stack';
import styles from './sponsorship.module.scss';

export default () => (
  <>
    <Head>
      <title>Sponsor UNIHACK 2023</title>
      <meta property="og:title" content="Sponsor UNIHACK 2023" key="title" />
    </Head>
    <Page>
      <Stack size="xxlarge">
        <SponsorHero />
        <PreviousSponsors />
        <SponsorGetInvolved />
        <Stack size="large" className={styles.tiers}>
          <TiersTable />
          <Addons />
        </Stack>
        <SponsorPerks />
        <SponsorPrompt />
      </Stack>
    </Page>
  </>
);
