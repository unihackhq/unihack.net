import { Header } from '@/components/header';
import styles from './styles.module.css';
import { HomeEventSponsorsSection } from '@/components/home/sponsor-us-section';
import { DiscordBanner } from '@/components/discord-banner';
import { HubsHero } from '@/components/hubs/hero';
import Image from 'next/image';
import macLogo from '@/assets/logos/mac-logo.svg';
import { HubStepsSection } from '@/components/hubs/steps';
import { HubEventSchedule } from '@/components/hubs/schedule';
import { EventLogo } from '@/components/logo';

export default function Home() {
  return (
    <div className={styles.home_hero}>
      <Header logo={<EventLogo />} />
      <HubsHero
        hubName="Melbourne Hub"
        location="Monash University, Clayton"
        host={[
          {
            name: 'Monash Association of Coding',
            link: 'https:/monashcoding.com',
            logo: (
              <Image src={macLogo} alt="Monash Association of Coding Logo" />
            ),
          },
        ]}
      />
      <HubStepsSection
        signupLinks={[
          {
            href: 'https://events.humanitix.com/unihack-2026',
            text: 'Register for the Hub',
          },
        ]}
      />
      <HubEventSchedule
        friday={{
          time: '6:00PM - 8:00PM',
          location: [
            'LG02',
            'Technology and Design Building',
            '20 Exhibition Walk',
          ],
          locationMapLink:
            'https://www.monash.edu/__data/assets/pdf_file/0004/2658973/Clayton-campus-map.pdf',
        }}
        weekend={{
          time: ['Saturday 9:30AM - 5:30PM', 'Sunday 9:30AM - 6:00PM'],
          location: [
            'LG02',
            'Technology and Design Building',
            '20 Exhibition Walk',
          ],
          locationMapLink:
            'https://www.monash.edu/__data/assets/pdf_file/0004/2658973/Clayton-campus-map.pdf',
        }}
      />
      <DiscordBanner />
      <HomeEventSponsorsSection />
    </div>
  );
}
