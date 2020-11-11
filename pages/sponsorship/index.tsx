import Head from 'next/head';

import Page from '../../layouts/page/page';
import Header from '../../components/header/header';
import Alert from '../../components/alert/alert';
import SponsorHero from '../../sections/sponsor-hero/sponsor-hero';
import SponsorInfo from '../../sections/sponsor-info/sponsor-info';
import Addons from '../../sections/addons/addons';
import PreviousSponsors from '../../sections/previous-sponsors/previous-sponsors';
import SponsorPerks from '../../sections/sponsor-perks/sponsor-perks';
import SponsorPrompt from '../../sections/sponsor-prompt/sponsor-prompt';
import TiersTable from '../../sections/tiers-table/tiers-table';

export default () => (
  <div>
    <Head>
      <title>UNIHACK 2020 — Sponsorship</title>
    </Head>
    <Page>
      <Alert
        link="https://www.notion.so/unihack/UNIHACK-2020-and-COVID-19-405d863cb8904b22837ecc85e577d9c9"
        message="UNIHACK 2020 has been postponed due to COVID-19. Click to read more."
      />
      <Header withLogo solid />
      <SponsorHero />
      <SponsorInfo />
      <TiersTable />
      <Addons />
      <PreviousSponsors />
      <SponsorPerks />
      <SponsorPrompt />
    </Page>
  </div>
);
