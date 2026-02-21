import { Header } from '@/components/header';
import styles from './styles.module.css';
import { HomeEventSponsorsSection } from '@/components/home/sponsor-us-section';
import { DiscordBanner } from '@/components/discord-banner';
import { HubsHero } from '@/components/hubs/hero';
import Image from 'next/image';
import devsocLogo from '@/assets/logos/devsoc-logo.svg';
import witLogo from '@/assets/logos/wit-logo.png';
import { HubStepsSection } from '@/components/hubs/steps';

export default function Home() {
  return (
    <div className={styles.home_hero}>
      <Header />
      <HubsHero
        hubName="Sydney Hub"
        location="UNSW Kensington"
        host={[
          {
            name: 'UNSW DevSoc',
            link: 'https://devsoc.app',
            logo: <Image src={devsocLogo} alt="UNSW DevSoc Logo" />,
          },
          {
            name: 'UNSW WIT',
            link: 'https://unswwit.com',
            logo: <Image src={witLogo} alt="UNSW WIT Logo" />,
          },
        ]}
      />
      <HubStepsSection />
      <DiscordBanner />
      <HomeEventSponsorsSection />
    </div>
  );
}
