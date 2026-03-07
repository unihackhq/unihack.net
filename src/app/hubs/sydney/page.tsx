import { Header } from '@/components/header';
import styles from './styles.module.css';
import { HomeEventSponsorsSection } from '@/components/home/sponsor-us-section';
import { DiscordBanner } from '@/components/discord-banner';
import { HubsHero } from '@/components/hubs/hero';
import Image from 'next/image';
import devsocLogo from '@/assets/logos/devsoc-logo.svg';
import witLogo from '@/assets/logos/wit-logo.png';
import { HubStepsSection } from '@/components/hubs/steps';
import { HubEventSchedule } from '@/components/hubs/schedule';
import { EventLogo } from '@/components/logo';

export default function Home() {
  return (
    <div className={styles.home_hero}>
      <Header logo={<EventLogo />} />
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
      <HubStepsSection
        signupLinks={[
          {
            href: 'https://forms.gle/4SKyxnEMzx9ENdRQ9',
            text: 'Register for Sat/Sun',
          },
        ]}
      />
      <HubEventSchedule
        friday={{
          time: '5:00PM - 9:00PM',
          subtext:
            'The Atlassian-hosted Sydney Opening Ceremony is now closed for registrations.',
          extraText: [
            'You can still watch the Opening Ceremony online.',
            'Saturday and Sunday hub registration is still open separately.',
          ],
          location: ['Atlassian HQ', '363 George Street, Sydney'],
          locationMapLink:
            'https://www.anu.edu.au/maps/skaidrite-darius-building',
        }}
        weekend={{
          time: ['Saturday 9:00AM - 6:00PM', 'Sunday 9:00AM - 6:00PM'],
          location: [
            'Room G26',
            'UNSW Business School E12',
            'UNSW Kensington',
          ],
          signupLink: 'https://forms.gle/4SKyxnEMzx9ENdRQ9',
          locationMapLink: 'https://link.mazemap.com/wSsrC0jQ',
        }}
      />
      <DiscordBanner />
      <HomeEventSponsorsSection />
    </div>
  );
}
