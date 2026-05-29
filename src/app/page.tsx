import { HomeSponsorUsSection } from '@/components/home/sponsor-us-section';
import styles from './home.module.css';

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.contentBox}>
          <h2>The Imagination Hackathon returns on <span>March 12-14, 2027</span></h2>
          </div>
        </div>
      </section>
      <HomeSponsorUsSection />
    </>
  );
}
