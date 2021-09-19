import Head from 'next/head';

import Page from '@layouts/page/page';
import Header from '@components/header/header';
import SponsorHero from '@sections/sponsor-hero/sponsor-hero';
import Addons from '@sections/sponsor-addons/sponsor-addons';
import PreviousSponsors from '@sections/previous-sponsors/previous-sponsors';
import SponsorPerks from '@sections/sponsor-perks/sponsor-perks';
import SponsorPrompt from '@sections/sponsor-prompt';
import TiersTable from '@sections/tiers-table/tiers-table';
import Stack from '@components/stack/stack';
import styles from './sponsorship.module.scss';

export default () => (
  <div>
    <Head>
      <title>UNIHACK 2021 — Sponsorship</title>
    </Head>
    <Page>
      <Header />
      <Stack className={styles.content} size="xxlarge">
        <SponsorHero />
        <PreviousSponsors />
        <Stack size="large" className={styles.tiers}>
          <TiersTable />
          <Addons />
        </Stack>
        <SponsorPerks />
        <SponsorPrompt />
      </Stack>
    </Page>
  </div>
);
