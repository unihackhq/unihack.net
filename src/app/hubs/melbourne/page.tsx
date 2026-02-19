import { Header } from '@/components/header';
import styles from './styles.module.css';
import { HomeEventSponsorsSection } from '@/components/home/sponsor-us-section';
import { DiscordBanner } from '@/components/discord-banner';
import { HubsHero } from '@/components/hubs/hero';
import Image from 'next/image';
import macLogo from '@/assets/logos/mac-logo.svg';

export default function Home() {
  return (
    <div className={styles.home_hero}>
      <Header />
      <HubsHero
        hubName="Melbourne Hub"
        location="Monash University, Clayton"
        host={[
          {
            name: 'Monash Association of Coding',
            link: '#',
            logo: (
              <Image src={macLogo} alt="Monash Association of Coding Logo" />
            ),
          },
        ]}
      />
      <DiscordBanner />
      <HomeEventSponsorsSection />
    </div>
  );
}
