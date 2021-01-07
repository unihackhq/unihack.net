import React from 'react';
import styles from './event-description.module.scss';
import { H2, H4 } from '@components/typography/typography';

const EventDescription = () => (
  <section className={styles['event-description']}>
    <div className={styles['event-description-content']}>
      <H2>What is UNIHACK?</H2>
      <p>
        We are Australia’s largest student hackathon. We bring together a
        diverse range of students to collaborate and bring innovative ideas to
        life - fostering the next generation of developers, thinkers, and
        entrepreneurs.
      </p>
      <p>
        In a team of 4-6, build your idea (an app, website, device or anything
        really!), pitch it, and win prizes. We will provide you with the
        mentors, workshops, and plenty of food and drinks to keep you going!
      </p>
      <div className={styles.values}>
        <div className={styles.value}>
          <img src="/images/lightbulb.png" alt="A drawing of a lightbulb." />
          <H4>Imagination</H4>
          <p>
            We believe students are the ones who imagine the future without
            limitations.
          </p>
          <b>#creativity</b>
        </div>
        <div className={styles.value}>
          <img src="/images/handshake.png" alt="A drawing of a handshake." />
          <H4>Collaboration</H4>
          <p>
            We create a supportive community that promotes diversity and
            inclusion.
          </p>
          <b>#community</b>
        </div>
        <div className={styles.value}>
          <img src="/images/laptop.png" alt="A drawing of a laptop." />
          <H4>Build</H4>
          <p>
            We embrace technology to build amazing ideas through software and
            hardware.
          </p>
          <b>#technology</b>
        </div>
      </div>
    </div>
  </section>
);

export default EventDescription;
