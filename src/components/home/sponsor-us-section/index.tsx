import Image from 'next/image';
import classNames from 'classnames/bind';
import logitech from '@/assets/logos/logitech-w.svg';
import atlassian from '@/assets/logos/atlassian-w.svg';
import twilio from '@/assets/logos/twilio-w.svg';
import elastic from '@/assets/logos/elastic-w.svg';
import quantium from '@/assets/logos/quantium-w.svg';
import monash from '@/assets/logos/monash-w.svg';
import euLogo from '@/assets/logos/eu-logo-horiz.svg';
import rushfaster from '@/assets/logos/rushfaster-w.png';

import { Button } from '@/components/button';

import styles from './style.module.css';
import { SponsorGrid } from '@/components/sponsor-page/sponsor-grid';

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
      <SponsorGrid
        prefix={<p>Past sponsors include</p>}
        items={[
          {
            src: logitech,
            alt: 'Logitech',
          },
          {
            src: atlassian,
            alt: 'Atlassian',
          },
          {
            src: elastic,
            alt: 'Elastic',
          },
          {
            src: twilio,
            alt: 'Twilio',
          },
        ]}
      />
      <div className={styles.centerText}>
        <p>
          Want to help support and nurture the next generation of tech talent?
          Shoot us an email at <strong>sponsorship@unihack.net</strong>.
        </p>
        <Button href="/sponsor" text="Sponsorship Prospectus" />
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
          <a
            className={styles.sponsorGridItem}
            href="https://www.eeas.europa.eu/delegations/australia_en"
          >
            <Image src={euLogo} alt="European Union" />
          </a>
        </div>
      </div>
      <div className={cx('sponsorGridWrapper', 'tierGold')}>
        <h3>Gold Sponsors</h3>
        <div className={styles.sponsorGrid}>
          <a
            className={styles.sponsorGridItem}
            href="https://www.atlassian.com/company/careers/earlycareers"
          >
            <Image src={atlassian} alt="Atlassian" />
          </a>
          <a className={styles.sponsorGridItem} href="https://www.elastic.co/">
            <Image src={elastic} alt="Elastic" />
          </a>
          <a
            className={styles.sponsorGridItem}
            href="https://quantium.com/graduate-academy/"
          >
            <Image src={quantium} alt="Quantium" />
          </a>
          <a
            className={styles.sponsorGridItem}
            href="https://www.monash.edu/it"
          >
            <Image src={monash} alt="Monash University" />
          </a>
        </div>
      </div>
      <div className={cx('sponsorGridWrapper', 'tierBronze')}>
        <h3>Bronze Sponsors</h3>
        <div className={styles.sponsorGrid}>
          <a
            className={styles.sponsorGridItem}
            href="https://www.twilio.com/en-us"
          >
            <Image src={twilio} alt="Twilio" />
          </a>
          <a
            className={styles.sponsorGridItem}
            href="https://rushfaster.com.au/pages/student"
          >
            <Image src={rushfaster} alt="Rushfaster" />
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
