import Image from 'next/image'
import cssaLogo from '@/assets/logos/cssa-logo.svg'
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
            name: 'ANU CSSA',
            link: 'https://cssa.club',
            logo: <Image alt="ANU CSSA Logo" src={cssaLogo} />,
          },
        ]}
        hubName="Canberra Hub"
        location="ANU"
      />
      <HubStepsSection
        signupLinks={[
          {
            href: 'https://campus.hellorubric.com/?eid=54544',
            text: 'Register for the Hub',
          },
        ]}
      />
      <HubEventSchedule
        friday={{
          time: '6:00PM - 8:00PM',
          location: [
            'N115/N116',
            'Skaidrite Darius Building 108',
            '108 North Road, Canberra',
          ],
          locationMapLink:
            'https://www.anu.edu.au/maps/skaidrite-darius-building',
        }}
        weekend={{
          time: ['Saturday 9:30AM - 5:30PM', 'Sunday 9:30AM - 6:00PM'],
          location: [
            'Innovation Space, Level 2',
            'Birch Building 35',
            '35 Science Road, Canberra',
          ],
          locationMapLink: 'https://www.anu.edu.au/maps/birch-building',
        }}
      />
      <DiscordBanner />
      <HomeEventSponsorsSection />
    </div>
  )
}
