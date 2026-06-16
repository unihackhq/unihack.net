import classNames from 'classnames/bind'
import Image from 'next/image'
import atlassian from '@/assets/logos/atlassian-w.svg'
import elastic from '@/assets/logos/elastic-w.svg'
import euLogo from '@/assets/logos/eu-logo-horiz.svg'
import logitech from '@/assets/logos/logitech-w.svg'
import monash from '@/assets/logos/monash-w.svg'
import quantium from '@/assets/logos/quantium-w.svg'
import rushfaster from '@/assets/logos/rushfaster-w.png'
import twilio from '@/assets/logos/twilio-w.svg'

import { Button } from '@/components/button'
import { SponsorGrid } from '@/components/sponsor-page/sponsor-grid'
import styles from './style.module.css'

const cx = classNames.bind(styles)

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
        prefix={<p>Past sponsors include</p>}
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
  )
}

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
            <Image alt="European Union" src={euLogo} />
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
            <Image alt="Atlassian" src={atlassian} />
          </a>
          <a className={styles.sponsorGridItem} href="https://www.elastic.co/">
            <Image alt="Elastic" src={elastic} />
          </a>
          <a
            className={styles.sponsorGridItem}
            href="https://quantium.com/graduate-academy/"
          >
            <Image alt="Quantium" src={quantium} />
          </a>
          <a
            className={styles.sponsorGridItem}
            href="https://www.monash.edu/it"
          >
            <Image alt="Monash University" src={monash} />
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
            <Image alt="Twilio" src={twilio} />
          </a>
          <a
            className={styles.sponsorGridItem}
            href="https://rushfaster.com.au/pages/student"
          >
            <Image alt="Rushfaster" src={rushfaster} />
          </a>
        </div>
      </div>
      <div className={styles.centerText}>
        <p>
          Want to help support and nurture the next generation of tech talent?
          Shoot us an email at <strong>sponsorship@unihack.net</strong>.
        </p>
        <Button
          href="./files/unihack-2027-sponsorship-prospectus.pdf"
          text="Sponsorship Prospectus"
        />
        <Button href="mailto:sponsorship@unihack.net" text="Email us" />
      </div>
    </section>
  )
}
