import Image from 'next/image'
import devsocLogo from '@/assets/logos/devsoc-logo.svg'
import witLogo from '@/assets/logos/wit-logo.png'
import { DiscordBanner } from '@/components/discord-banner'
import { Header } from '@/components/header'
import { HomeEventSponsorsSection } from '@/components/home/sponsor-us-section'
import { HubsHero } from '@/components/hubs/hero'
import { HubEventSchedule } from '@/components/hubs/schedule'
import { HubStepsSection } from '@/components/hubs/steps'
import { EventLogo } from '@/components/logo'
import styles from './styles.module.css'

export default function Home() {
  return (
    <div className={styles.home_hero}>
      <Header logo={<EventLogo />} />
      <HubsHero
        host={[
          {
            name: 'UNSW DevSoc',
            link: 'https://devsoc.app',
            logo: <Image alt="UNSW DevSoc Logo" src={devsocLogo} />,
          },
          {
            name: 'UNSW WIT',
            link: 'https://unswwit.com',
            logo: <Image alt="UNSW WIT Logo" src={witLogo} />,
          },
        ]}
        host={[
          {
            name: 'UNSW DevSoc',
            link: 'https://devsoc.app',
            logo: <Image alt="UNSW DevSoc Logo" src={devsocLogo} />,
          },
          {
            name: 'UNSW WIT',
            link: 'https://unswwit.com',
            logo: <Image alt="UNSW WIT Logo" src={witLogo} />,
          },
        ]}
        hubName="Sydney Hub"
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
          location: ['Room G26', 'UNSW Business School E12', 'UNSW Kensington'],
          signupLink: 'https://forms.gle/4SKyxnEMzx9ENdRQ9',
          locationMapLink: 'https://link.mazemap.com/wSsrC0jQ',
        }}
      />
      <DiscordBanner />
      <HomeEventSponsorsSection />
    </div>
  )
}
