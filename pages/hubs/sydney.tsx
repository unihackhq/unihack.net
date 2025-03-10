import React from 'react';
import Head from 'next/head';
import Page from '@layouts/page/page';

import styles from './index.module.scss';
import ButtonLink from '@components/button/button-link';
import classNames from 'classnames/bind';
import { JoinDiscord } from '@sections/homepage/discord';
import EventChecklist from '@sections/event-info/event-checklist';

const cx = classNames.bind(styles);

const ClubTag = () => {
  return (
    <div className={styles.club}>
      <div className={styles['club-logo']}>
        <img src="/images/csesoc-logo.svg" />
      </div>
      <div className={styles['club-content']}>
        <h2>About UNSW CSESoc</h2>
        <p>
          We are one of the biggest and most active societies at UNSW, catering
          to over 3500 CSE students spanning across degrees in Computer Science,
          Software Engineering, Bioinformatics and Computer Engineering.
        </p>
        <ButtonLink
          theme="transparent"
          type="primary"
          href="https://www.csesoc.unsw.edu.au/"
        >
          Visit site
        </ButtonLink>
      </div>
    </div>
  );
};

const Register = () => {
  return (
    <section>
      <div className={styles.register}>
        <h2>What to do...</h2>
        <div className={styles.row}>
          <div className={styles.section}>
            <h3>Register Yourself</h3>
            <p>
              Sign up by registering yourself on the Team Management App. Make
              sure you're eligible!
            </p>
            <ButtonLink
              theme="light"
              type="primary"
              href="https://manage.unihack.net/signup"
            >
              Register Now
            </ButtonLink>
          </div>
          <div className={styles.section}>
            <h3>Create Your Team</h3>
            <p>
              Create your team, or get your friends to add you to their team.
              Teams must be 4-6 people.
            </p>
            <ButtonLink
              theme="light"
              type="primary"
              href="https://manage.unihack.net"
            >
              Manage My Team
            </ButtonLink>
          </div>
          <div className={styles.section}>
            <h3>Let us know!</h3>
            <p>
              Let us know if you're attending the UNIHACK Sydney Hub on Saturday and/or Sunday, and keep an
              eye on the Discord for any updates!
            </p>
            <ButtonLink
              theme="light"
              type="primary"
              href="https://docs.google.com/forms/d/e/1FAIpQLSe6T8sc7vup_N48bDDjWtJF_8X8XDuVKd47LcbHwgDKppqCeg/viewform"
            >
              RSVP Here
            </ButtonLink>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section>
      <div className={styles.location}>
        <h2>Location &amp; Opening Hours</h2>
        <div className={styles.row}>
          <div className={styles.address}>
            <h3>Address</h3>
            <p>
              M17, June Griffith Building
              <br />
              UNSW Kensington Campus
              <br />
              High Street, Kensington NSW
            </p>
            <ButtonLink
              theme="light"
              type="primary"
              href="https://link.mazemap.com/SVPyn5yW"
            >
              Directions
            </ButtonLink>
          </div>
          <div className={styles.time}>
            <h3>March 15</h3>
            <p>9:00AM - 6:00PM</p>
            <h3>March 16</h3>
            <p>9:00AM - 6:00PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default () => (
  <div>
    <Head>
      <title>UNIHACK 2025 - Sydney Hub at UNSW - March 14-16 2024</title>
      <meta
        property="og:title"
        content="UNIHACK 2025 - Sydney Hub at UNSW - March 14-16 2025"
        key="title"
      />
    </Head>
    <Page headerless>
      <div className={cx('intro', 'sydney')}>
        <div className={styles.container}>
          <a href="/">UNIHACK 2024</a>
          <h1 id="top">
            Sydney Hub <span>at UNSW Kensington</span>
          </h1>
          <p>with UNSW CSESoc</p>
          <p>March 14 - 16, 2025</p>
        </div>
      </div>
      <div className={styles.container}>
        <Register />
        <JoinDiscord />
        <Location />
        <EventChecklist />
        <ClubTag />
      </div>
    </Page>
  </div>
);
