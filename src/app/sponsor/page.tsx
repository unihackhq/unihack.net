import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBullhorn,
  faCalendar,
  faCube,
  faHandshake,
  faMapLocationDot,
  faPersonChalkboard,
  faThumbsUp,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/button';

export default function AboutPage() {
  return (
    <>
      <div className={styles.background}></div>
      <header className={styles.header}>
        <div>
          <h1>Sponsor UNIHACK 2027</h1>
          <p>Help us support the next generation of tech talent.</p>
          <div className={styles.floating}>
            <Button href="#" text="Read More" />
          </div>
        </div>
      </header>
      <section className={styles.event}>
        <div>
          <div className={styles.item}>
            <FontAwesomeIcon icon={faCalendar} />
            <p>
              <span>Date</span>March 12-14, 2027
            </p>
          </div>
          <div className={styles.item}>
            <FontAwesomeIcon icon={faMapLocationDot} />
            <p>
              <span>Location</span>Australia and New Zealand
            </p>
          </div>
        </div>
      </section>
      <section className={styles.why}>
        <h2>But why?</h2>
        <div>
          <div className={styles.reason}>
            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <h3>Access Top Talent</h3>
            </div>
            <p>
              Gain access and recruit from a pool of 1000+ high-quality,
              AI-ready student developers from Australia's leading universities.
            </p>
          </div>
          <div className={styles.reason}>
            <div>
              <FontAwesomeIcon icon={faHandshake} />
              <h3>Mentorship &amp; Impact</h3>
            </div>
            <p>
              Guide students through all sorts of challenges - techincal and
              non-technical - by mentoring students during the weekend.
            </p>
          </div>
          <div className={styles.reason}>
            <div>
              <FontAwesomeIcon icon={faCube} />
              <h3>Product Integration</h3>
            </div>
            <p>
              Introduce your platform or tools and see how the students
              integrate them into their prototypes.
            </p>
          </div>
          <div className={styles.reason}>
            <div>
              <FontAwesomeIcon icon={faPersonChalkboard} />
              <h3>Direct Interaction</h3>
            </div>
            <p>
              Demonstrate your company's expertise and share knowledge to
              students by running workshops or panels.
            </p>
          </div>
          <div className={styles.reason}>
            <div>
              <FontAwesomeIcon icon={faBullhorn} />
              <h3>Increase Brand Visibility</h3>
            </div>
            <p>
              Increase your brand's visibility to students through social media
              channels, events, networking nights, and on-site activations.
            </p>
          </div>
          <div className={styles.reason}>
            <div>
              <FontAwesomeIcon icon={faThumbsUp} />
              <h3>Support the Next Generation</h3>
            </div>
            <p>
              Associate your brand with identifying, uplifting, and nurturing
              the next generation of Australian and New Zealand tech talent.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.numbers}>
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
      <section className={styles.contact}>
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
  );
}
