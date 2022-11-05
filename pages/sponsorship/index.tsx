import Head from 'next/head';
import Page from '@layouts/page/page';
import SponsorHero from './sections/sponsor-hero';
import Addons from './sections/sponsor-addons';
import PreviousSponsors from './sections/previous-sponsors';
import SponsorPerks from './sections/sponsor-perks';
import SponsorPrompt from './sections/sponsor-prompt';
import SponsorGetInvolved from './sections/sponsor-get-involved';
import TiersTable from './sections/tiers-table';
import Stack from '@components/stack/stack';
import styles from './sponsorship.module.scss';

export default () => (
  <>
    <Head>
      <title>UNIHACK 2022 — Sponsorship</title>
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
