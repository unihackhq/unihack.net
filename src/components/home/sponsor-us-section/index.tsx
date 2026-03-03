import Image from 'next/image';
import classNames from 'classnames/bind';
import logitech from '@/assets/logos/logitech-w.svg';
import datastax from '@/assets/logos/datastax-w.svg';
import atlassian from '@/assets/logos/atlassian-w.svg';
import twilio from '@/assets/logos/twilio-w.svg';
import elastic from '@/assets/logos/elastic-w.svg';
import quantium from '@/assets/logos/quantium-w.svg';
import monash from '@/assets/logos/monash-w.svg';
import euLogo from '@/assets/logos/eu-logo-horiz.svg';

import { Button } from '@/components/button';

import styles from './style.module.css';

const cx = classNames.bind(styles);

export const HomeSponsorUsSection = () => {
  return (
    <section className={styles.section} id="sponsor-us">
      <h2>Sponsor Us</h2>
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
        <Button
          href="./files/unihack-2026-sponsorship-prospectus.pdf"
          text="Sponsorship Prospectus"
        />
        <Button href="mailto:sponsorship@unihack.net" text="Email us" />
      </div>
    </section>
  );
};

export const HomeEventSponsorsSection = () => {
  return (
    <section className={styles.section} id="sponsor-us">
      <h2>Our Sponsors</h2>
      <div className={styles.centerText}>
        <p>
          Our sponsors make it possible for us to bring together hundreds of
          emerging developers, designers, thinkers and builders.
        </p>
      </div>
      <div className={cx('sponsorGridWrapper', 'tierDiamond')}>
        <h3>Diamond Sponsor</h3>
        <div className={styles.sponsorGrid}>
          <a className={styles.sponsorGridItem}>
            <Image src={euLogo} alt="European Union" />
          </a>
        </div>
      </div>
      <div className={cx('sponsorGridWrapper', 'tierGold')}>
        <h3>Gold Sponsors</h3>
        <div className={styles.sponsorGrid}>
          <a className={styles.sponsorGridItem}>
            <Image src={atlassian} alt="Atlassian" />
          </a>
          <a className={styles.sponsorGridItem}>
            <Image src={elastic} alt="Elastic" />
          </a>
          <a className={styles.sponsorGridItem}>
            <Image src={quantium} alt="Quantium" />
          </a>
          <a className={styles.sponsorGridItem}>
            <Image src={monash} alt="Monash University" />
          </a>
        </div>
      </div>
      <div className={cx('sponsorGridWrapper', 'tierBronze')}>
        <h3>Bronze Sponsors</h3>
        <div className={styles.sponsorGrid}>
          <a className={styles.sponsorGridItem}>
            <Image src={twilio} alt="Twilio" />
          </a>
        </div>
      </div>
      <div className={styles.centerText}>
        <p>
          Want to help support and nurture the next generation of tech talent?
          Shoot us an email at <strong>sponsorship@unihack.net</strong>.
        </p>
        <Button
          href="./files/unihack-2026-sponsorship-prospectus.pdf"
          text="Sponsorship Prospectus"
        />
        <Button href="mailto:sponsorship@unihack.net" text="Email us" />
      </div>
    </section>
  );
};
