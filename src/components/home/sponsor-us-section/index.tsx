import styles from './style.module.css';
import Image from 'next/image';
import logitech from './logos/logitech-w.svg';
import datastax from './logos/datastax-w.svg';
import atlassian from './logos/atlassian-w.svg';
import twilio from './logos/twilio-w.svg';
import { Button } from '@/components/button';

export const HomeSponsorUsSection = () => {
  return (
    <section className={styles.section} id="sponsor-us">
      <h2>Sponsor us</h2>
      <div className={styles.centerText}>
        <p>
          Our sponsors make it possible for us to bring together hundreds of
          emerging developers, designers, thinkers and builders.
        </p>
      </div>
      <div className={styles.sponsorGridWrapper}>
        <p>Past sponsors include</p>
        <div className={styles.sponsorGrid}>
          <div className={styles.sponsorGridItem}>
            <Image src={logitech} alt="Logitech" />
          </div>
          <div className={styles.sponsorGridItem}>
            <Image src={atlassian} alt="Atlassian" />
          </div>
          <div className={styles.sponsorGridItem}>
            <Image src={datastax} alt="Datastax" />
          </div>
          <div className={styles.sponsorGridItem}>
            <Image src={twilio} alt="Twilio" />
          </div>
        </div>
      </div>
      <div className={styles.centerText}>
        <p>
          Want to help support and nurture the next generation of tech talent?
          Shoot us an email at <strong>sponsorship@unihack.net</strong>.
        </p>
        <Button href="./files/unihack-2026-sponsorship-prospectus.pdf" text="Sponsorship Prospectus" />
        <Button href="mailto:sponsorship@unihack.net" text="Email us" />
      </div>
    </section>
  );
};
