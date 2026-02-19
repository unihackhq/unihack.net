import { Header } from '@/components/header';
import styles from './home.module.css';
import { HomeWelcomeSection } from '@/components/home/welcome-section';
import { HomeEventSponsorsSection } from '@/components/home/sponsor-us-section';
import { LaunchHero } from '@/components/home/launch-hero';
import { EventSchedule } from '@/components/schedule';
import { HubsSection } from '@/components/home/hubs-section';
import { DiscordBanner } from '@/components/discord-banner';

export default function Home() {
  return (
    <div className={styles.home_hero}>
      <Header />
      <LaunchHero />
      <HomeWelcomeSection />
      <HubsSection />
      <DiscordBanner />
      <EventSchedule />
      <HomeEventSponsorsSection />
    </div>
  );
}
