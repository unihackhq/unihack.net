import { HomeSponsorUsSection } from '@/components/home/sponsor-us-section';
import { LaunchHero } from '@/components/home/launch-hero';
import { HomeWelcomeSection } from '@/components/home/welcome-section';

export default function Home() {
  return (
    <>
      <LaunchHero />
      <HomeWelcomeSection />
      <HomeSponsorUsSection />
    </>
  );
}
