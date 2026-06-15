import { LaunchHero } from '@/components/home/launch-hero'
import { HomeSponsorUsSection } from '@/components/home/sponsor-us-section'
import { HomeWelcomeSection } from '@/components/home/welcome-section'

export default function Home() {
  return (
    <>
      <LaunchHero />
      <HomeWelcomeSection />
      <HomeSponsorUsSection />
    </>
  )
}
