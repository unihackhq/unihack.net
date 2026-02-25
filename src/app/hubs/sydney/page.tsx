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
      <HubStepsSection
        signupLinks={[
          {
            href: 'https://forms.gle/4SKyxnEMzx9ENdRQ9',
            text: 'Register for Sat/Sun',
          },
          {
            href: 'https://join.atlassian.com/event-31237/talentcommunity/form?lang=en-US',
            text: 'Register for Fri',
          },
        ]}
      />
      <HubEventSchedule
        friday={{
          time: '5:00PM - 9:00PM',
          subtext: 'Come watch the Opening Ceremony at Atlassian HQ.',
          extraText: [
            'Spots are limited - only open to those that have registered to participate in UNIHACK.',
            'Registration is seperate to the main Hub registration for Saturday and Sunday.',
          ],
          signupLink:
            'https://join.atlassian.com/event-31237/talentcommunity/form?lang=en-US',
          location: ['Atlassian HQ', '363 George Street, Sydney'],
          locationMapLink:
            'https://www.anu.edu.au/maps/skaidrite-darius-building',
        }}
        weekend={{
          time: ['Saturday 9:00AM - 6:00PM', 'Sunday 9:00AM - 6:00PM'],
          location: [
            'Quadrangle G034',
            'Quadrangle Building E15',
            'UNSW Kensington',
          ],
          signupLink: 'https://forms.gle/4SKyxnEMzx9ENdRQ9',
          locationMapLink: 'https://link.mazemap.com/9Sk22I7i',
        }}
      />
      <DiscordBanner />
      <HomeEventSponsorsSection />
    </div>
  );
}
