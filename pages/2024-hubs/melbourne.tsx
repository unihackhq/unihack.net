import React from 'react';
import Head from 'next/head';
import Page from '@layouts/page/page';
import Sponsors from '@sections/event-info/sponsors/sponsors';

import SponsorData from '@content/events/2024/sponsors.json';

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
        <img src="/images/mac-logo.svg" />
      </div>
      <div className={styles['club-content']}>
        <h2>About Monash Association of Coding</h2>
        <p>
          We're a coding club that focuses on fostering a programming culture at
          Monash University.
        </p>
        <ButtonLink
          theme="transparent"
          type="primary"
          href="https://www.facebook.com/monashcoding/"
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
            <h3>Let us know...</h3>
            <p>
              Once your team is created, book your spot at the Melbourne Hub so
              we know you and your team are coming!
            </p>
            <ButtonLink
              theme="light"
              type="primary"
              href="https://monash.club/unihack-hub"
            >
              Register for the Hub
            </ButtonLink>
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
          <div>
            <h3>March 1</h3>
            <p className={styles.time}>6PM - 8PM</p>
            <p className={styles.concat}>C1 Theatre</p>
            <p>25 Exhibition Walk</p>
            <ButtonLink
              theme="light"
              type="primary"
              href="https://maps.monash.edu/#v=1&zlevel=1&center=145.133902,-37.91113&zoom=17.14&campusid=159&sharepoitype=poi&sharepoi=1154834"
            >
              Directions
            </ButtonLink>
          </div>
          <div>
            <h3>March 2 - March 3</h3>
            <p className={styles.time}>10AM - 8PM</p>
            <p className={styles.concat}>G54 Lecture Theatre</p>
            <p className={styles.concat}>Learning and Teaching Building</p>
            <p>19 Ancora Imparo Way</p>
            <ButtonLink
              theme="light"
              type="primary"
              href="https://maps.monash.edu/#v=1&zlevel=1&center=145.132532,-37.91414&zoom=20.32&campusid=159&sharepoitype=poi&sharepoi=1034805"
            >
              Directions
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default () => (
  <div>
    <Head>
      <title>
        UNIHACK 2024 - Melbourne Hub at Monash University Clayton - March 1-3
        2024
      </title>
      <meta
        property="og:title"
        content="UNIHACK 2024 - Melbourne Hub at Monash University Clayton - March 1-3 2024"
        key="title"
      />
    </Head>
    <Page headerless>
      <div className={cx('intro', 'melbourne')}>
        <div className={styles.container}>
          <a href="/">UNIHACK 2024</a>
          <h1 id="top">
            Melbourne Hub <span>at Monash University Clayton</span>
          </h1>
          <p>with Monash Association of Coding</p>
        </div>
      </div>
      <div className={styles.container}>
        <Register />
        <JoinDiscord />
        <Location />
        <EventChecklist />
        <Sponsors data={SponsorData} title="UNIHACK Sponsors" />
        <ClubTag />
      </div>
    </Page>
  </div>
);
