import Head from 'next/head';

import Page from '../../layouts/page/page';
import Header from '../../components/header/header';
import SponsorTitle from '../../sections/sponsor-title/sponsor-title';
import SponsorHero from '../../sections/sponsor-hero/sponsor-hero';
import Addons from '../../sections/sponsor-addons/sponsor-addons';
import PreviousSponsors from '../../sections/previous-sponsors/previous-sponsors';
import SponsorPerks from '../../sections/sponsor-perks/sponsor-perks';
import SponsorPrompt from '../../sections/sponsor-prompt/sponsor-prompt';
import TiersTable from '../../sections/tiers-table/tiers-table';
import BackNav from '../../components/back-nav/back-nav';
import Stack from '@components/stack/stack';

export default () => (
  <div>
    <Head>
      <title>UNIHACK 2021 — Sponsorship</title>
    </Head>
    <Page>
      <Header withLogo solid />
      <Stack size="xsmall">
        <BackNav route="/">Home</BackNav>
        <SponsorTitle />
      </Stack>
      <SponsorHero />
      <TiersTable />
      <Addons />
      <SponsorPerks />
      <PreviousSponsors />
      <SponsorPrompt />
    </Page>
  </div>
);
