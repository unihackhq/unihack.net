import Head from 'next/head';

import Page from '../../layouts/page/page';
import Header from '../../components/header/header';
import Title from '../../sections/sponsor-hero/sponsor-title';
import SponsorInfo from '../../sections/sponsor-info/sponsor-info';
import Addons from '../../sections/sponsor-addons/sponsor-addons';
import PreviousSponsors from '../../sections/previous-sponsors/previous-sponsors';
import SponsorPerks from '../../sections/sponsor-perks/sponsor-perks';
import SponsorPrompt from '../../sections/sponsor-prompt/sponsor-prompt';
import TiersTable from '../../sections/tiers-table/tiers-table';
import BackNav from '../../components/back-nav/';

export default () => (
  <div>
    <Head>
      <title>UNIHACK 2021 — Sponsorship</title>
    </Head>
    <Page>
      <Header withLogo solid />
      <BackNav route="" />
      <Title />
      <SponsorInfo />
      <TiersTable />
      <Addons />
      <SponsorPerks />
      <PreviousSponsors />
      <SponsorPrompt />
    </Page>
  </div>
);
