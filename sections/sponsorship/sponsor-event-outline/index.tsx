import React from 'react';
import styles from './sponsor-event-outline.module.scss';
import { H2XL } from '@components/typography/typography';

const SponsorEventOutline: React.FC = () => (
  <section className={styles['sponsor-event-outline']}>
    <div className={styles['sponsor-event-outline-content']}>
      <H2XL>What is UNIHACK?</H2XL>
      <p>
        UNIHACK is where the next generation of tech makers and disrupters build
        and showcase their innovative projects over a 48-hour period.
      </p>
      <div className={styles['sponsor-event-outline-grid']}>
        <div>
          <p>
            <strong>There is no prescribed theme for UNIHACK.</strong> Students
            are not restricted on what they want to create; and all projects are
            eligible for the Main Prize.
          </p>
          <p>
            However, certain category and sponsor prizes may have challenges or
            themes attached to them.
          </p>
        </div>
        <div>
          <p>
            <strong>Our event is a hybrid event.</strong> Students can
            participate remotely from any location in Australia and New Zealand;
            or through our Event Hubs in some universities.
          </p>
          <p>
            These Event Hubs are locations where students can meet and come
            together to work on their prototypes.
          </p>
        </div>
        <div>
          <p>
            <strong>Our event is open to all students</strong> studying at an
            accredited university/TAFE in Australia or New Zealand. We encourage
            students from non-IT backgrounds to participate.
          </p>
        </div>
      </div>
      <div className={styles['sponsor-event-outline-numbers']}>
        <h3>2024 by the numbers...</h3>
        <ul>
          <li>
            <span>477</span> students participating
          </li>
          <li>
            <span>70</span> projects submitted
          </li>
          <li>
            <span>40%</span> final year or honours students
          </li>
          <li>
            <span>18+</span> universities participating
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default SponsorEventOutline;
