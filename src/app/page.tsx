import { Header } from '@/components/header';
import styles from './home.module.css';
import { HomeWelcomeSection } from '@/components/home/welcome-section';
import { HomeSponsorUsSection } from '@/components/home/sponsor-us-section';
import { LaunchHero } from '@/components/home/launch-hero';

export default function Home() {
  return (
    <div className={styles.home_hero}>
      <Header />
      <LaunchHero />
      <HomeWelcomeSection />
      <HomeSponsorUsSection />
      {/* <section className={`${styles.home_section} ${styles.home_section_faqs}`} id="faqs">
      <h2>Frequently Asked Questions</h2>
    </section> */}
    </div>
  );
}
