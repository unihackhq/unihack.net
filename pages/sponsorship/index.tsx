import Head from 'next/head';
import './sponsorship.scss';

import Page from '../../layouts/page/page';
import Header from '../../components/header/header';
import SponsorHero from '../../sections/sponsor-hero/sponsor-hero';
import SponsorInfo from '../../sections/sponsor-info/sponsor-info';
import Addons from '../../sections/addons/addons';
import PreviousSponsors from '../../sections/previous-sponsors/previous-sponsors';
import SponsorPerks from '../../sections/sponsor-perks/sponsor-perks';
import SponsorPrompt from '../../sections/sponsor-prompt/sponsor-prompt';
import Table from '../../components/table/table';

export default () => (
  <div>
    <Head>
      <title>UNIHACK 2019 — Sponsorship</title>
    </Head>
    <Page featureBackground>
      <Header withLogo solid/>
      <SponsorHero/>
      <SponsorInfo/>
      <Table/>
      <Addons/>
      <PreviousSponsors/>
      <SponsorPerks/>
      <SponsorPrompt/>
    </Page>
  </div>
);
