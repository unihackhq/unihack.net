import { Header } from "@/components/header";
import styles from "./home.module.css"
import { HeroButton } from "@/components/hero-button";
import { HomeWelcomeSection } from "@/components/home/weclome-section";
import { HomeSponsorUsSection } from "@/components/home/sponsor-us-section";

export default function Home() {
  return (
  <div className={styles.home_hero}>
    <Header />
    <div className={styles.home_header}>
      <h1>The Imagination Hackathon</h1>
      <div className={styles.home_header_text}>
        <p>UNIHACK 2026 returns on March 13 - 15, 2026</p>
        <HeroButton text="Looking to sponsor?" href="#" />
        <HeroButton text="Pre-register now" href="#" />
      </div>
    </div>
    <HomeWelcomeSection />
    <HomeSponsorUsSection />
    {/* <section className={`${styles.home_section} ${styles.home_section_faqs}`} id="faqs">
      <h2>Frequently Asked Questions</h2>
    </section> */}
  </div>
  );
}
