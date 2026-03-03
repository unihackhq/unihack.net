import { Header, HomeNav } from '@/components/header';
import styles from './home.module.css';
import { HomeWelcomeSection } from '@/components/home/welcome-section';
import { HomeEventSponsorsSection } from '@/components/home/sponsor-us-section';
import { LaunchHero } from '@/components/home/launch-hero';
import { EventSchedule } from '@/components/schedule';
import { HubsSection } from '@/components/home/hubs-section';
import { DiscordBanner } from '@/components/discord-banner';
import { WorkshopsSection } from '@/components/home/workshops-section';
import { PrizesSection } from '@/components/home/prizes-section';
import { EventLogo } from '@/components/logo';

export default function Home() {
  return (
    <div className={styles.home_hero}>
      <Header nav={HomeNav} logo={<EventLogo />} />
      <LaunchHero />
      <HomeWelcomeSection />
      <HubsSection />
      <DiscordBanner />
      <EventSchedule />
      <WorkshopsSection />
      <PrizesSection />
      <HomeEventSponsorsSection />
    </div>
  );
}
