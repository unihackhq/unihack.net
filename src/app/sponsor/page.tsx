import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import Image from 'next/image'
import atlassian from '@/assets/logos/atlassian-w.svg'
import aws from '@/assets/logos/aws-w.svg'
import elastic from '@/assets/logos/elastic-w.svg'
import eu from '@/assets/logos/eu-logo-horiz.svg'
import logitech from '@/assets/logos/logitech-w.svg'
import monash from '@/assets/logos/monash-w.svg'
import twilio from '@/assets/logos/twilio-w.svg'
import xero from '@/assets/logos/xero-w.svg'
import { Button } from '@/components/button'
import { SponsorGrid } from '@/components/sponsor-page/sponsor-grid'
import { SponsorWelcomeSection } from '@/components/sponsor-page/welcome-section'
import { SponsorReasonsWhy } from '../../components/sponsor-page/reasons-why'
import bg from './sponsor-unihack-bg.jpg'
import styles from './style.module.css'

const cx = classNames.bind(styles)

export default function AboutPage() {
  return (
    <>
      <header className={cx('header')}>
        <div className={styles.overlay}>
          <Image
            alt="Students looking at stickers"
            fill={true}
            placeholder="blur"
            src={bg}
          />
        </div>
        <div className={cx('content')}>
          <h1>Sponsor UNIHACK 2027</h1>
          <p>Help us support the next generation of tech talent.</p>
          <p className={styles.date}>
            <FontAwesomeIcon icon={faCalendar} />
            March 12-14, 2027
          </p>
        </div>
        <div className={cx('credit')}>
          <p>
            <strong>Image Credit:</strong> European Union/Melissa Hobbs
          </p>
        </div>
      </header>

      <SponsorWelcomeSection />

      <section className={cx('section', 'numbers')}>
        <h2>2026 in numbers...</h2>
        <div>
          <div className={styles.stat}>
            <p>
              <span>1010</span> students participating
            </p>
          </div>
          <div className={styles.stat}>
            <p>
              <span>183</span> projects submitted
            </p>
          </div>
          <div className={styles.stat}>
            <p>
              <span>23+</span> universities represented
            </p>
          </div>
          <div className={styles.stat}>
            <p>
              <span>26%</span> women or non-binary students
            </p>
          </div>
          <div className={styles.stat}>
            <p>
              <span>63%</span> in their final year of study
            </p>
          </div>
          <div className={styles.stat}>
            <p>
              <span>80%</span> participating for the first time
            </p>
          </div>
        </div>
      </section>

      <SponsorReasonsWhy />

      <section className={cx('section', 'past')}>
        <h2>Current and previous supporters include...</h2>
        <SponsorGrid
          className={styles.grid}
          gridItemClassName={styles.gridItem}
          id={styles.sponsorGrid}
          items={[
            {
              src: atlassian,
              alt: 'Atlassian',
            },
            {
              src: xero,
              alt: 'Xero',
            },
            {
              src: elastic,
              alt: 'Elastic',
            },
            {
              src: twilio,
              alt: 'Twilio',
            },
            {
              src: aws,
              alt: 'AWS',
            },
            {
              src: logitech,
              alt: 'Logitech',
            },
            {
              src: monash,
              alt: 'Monash University',
            },
            {
              src: eu,
              alt: 'European Union',
            },
          ]}
        />
      </section>
      <section className={cx('section', 'quote')}>
        <div>
          <blockquote>
            <p>
              "The skills they displayed at UNIHACK 2026 are exactly what the
              industry needs, and I am confident they will have a significant
              impact on our work environment in the years to come."
            </p>
          </blockquote>
          <p>
            <a href="https://www.elastic.co/blog/unihack-2026">
              Read how Elastic supported participants by providing mentorship
              and resources; and saw students push the boundaries of what their
              tech could do...
            </a>
          </p>
        </div>
      </section>
      <section className={cx('section', 'contact')}>
        <div>
          <p>
            Want to help support and nurture the next generation of tech talent?
          </p>
          <p>
            Download our prospectus, and shoot us an email at{' '}
            <strong>sponsorship@unihack.net</strong>.
          </p>
          <Button
            href="./files/unihack-2026-sponsorship-prospectus.pdf"
            text="Sponsorship Prospectus"
          />
          <Button href="mailto:sponsorship@unihack.net" text="Email us" />
        </div>
      </section>
    </>
  )
}
