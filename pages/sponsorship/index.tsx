import Head from 'next/head';
import './sponsorship.scss';

import Page from '../../layouts/page/page';
import Header from '../../components/header/header';
import SponsorshipHero from '../../sections/sponsorship-hero/sponsorship-hero';
import SponsorInfo from '../../sections/sponsor-info/sponsor-info';
import TiersTable from '../../sections/tiers-table/tiers-table';

export default () => (
  <div>
    <Head>
      <title>UNIHACK 2019 — Sponsorship</title>
    </Head>
    <Page>
      <Header withLogo solid/>
      <SponsorshipHero/>
      <SponsorInfo/>
      <TiersTable/>
    </Page>
  </div>
);
