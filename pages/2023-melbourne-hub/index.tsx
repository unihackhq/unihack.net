import React from 'react';
import Head from 'next/head';
import Page from '@layouts/page/page';
import Sponsors from '@sections/event-info/sponsors/sponsors';

import SponsorData from '@content/events/2023/sponsors.json';

import styles from './index.module.scss';
import ButtonLink from '@components/button/button-link';
import Stack from '@components/stack/stack';

const WiredMonashTag = () => {
  return (
    <div className={styles.wired}>
      <div className={styles['wired-logo']}>
        <img src="/images/wired-logo-white.png" />
      </div>
      <div className={styles['wired-content']}>
        <h1>About WIRED</h1>
        <p>
          WIRED Monash is the official Faculty of Information Technology student
          society at Monash University. Our club is a registered academic club
          with Monash Clubs and Societies.
        </p>
        <ButtonLink
          theme="transparent"
          type="primary"
          href="https://wired.org.au"
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
        <h1>How To Register</h1>
        <div className={styles.row}>
          <div className={styles.section}>
            <h2>Register Yourself</h2>
            <p>Sign up by registering yourself on the Team Management App</p>
            <ButtonLink
              theme="light"
              type="primary"
              href="https://manage.unihack.net/signup"
            >
              Register Now
            </ButtonLink>
          </div>
          <div className={styles.section}>
            <h2>Create Your Team</h2>
            <p>
              Create your team, or get your friends to add you to their team.
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
            <h2>Let us know...</h2>
            <p>
              Once your team is created, let us know if you are interested by
              filling out the <strong>Pre-event: Melbourne Hub</strong>{' '}
              checkpoint.
            </p>
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
        <h1>Location &amp; Opening Hours</h1>
        <div className={styles.row}>
          <div className={styles.address}>
            <h2>Address</h2>
            <p>
              Learning and Teaching Building
              <br />
              19 Ancora Imparo Way,
              <br />
              Monash University Clayton
              <br />
            </p>
            <ButtonLink
              theme="light"
              type="primary"
              href="https://maps.monash.edu/#v=1&zlevel=1&center=145.13261,-37.913861&zoom=15.79&campusid=159&sharepoitype=poi&sharepoi=1000019030"
            >
              Directions
            </ButtonLink>
          </div>
          <div className={styles.time}>
            <h2>March 3</h2>
            <p>G31 Lecture Theatre</p>
            <p>6PM - 9PM</p>
          </div>
          <div className={styles.time}>
            <h2>March 4 - March 5</h2>
            <p>G54 Lecture Theatre</p>
            <p>10AM - 9PM</p>
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
        UNIHACK 2023 - Melbourne Hub at Monash University Clayton - March 3-5,
        2023
      </title>
      <meta
        property="og:title"
        content="UNIHACK 2023 Melbourne Hub at Monash University - March 3-5, 2023"
        key="title"
      />
    </Head>
    <Page>
      <div className={styles.intro}>
        <div className={styles.container}>
          <h1 id="top">
            Melbourne Hub <span>at Monash University Clayton</span>
          </h1>
          <p className={styles.withWired}>
            with <span>WIRED Monash</span>
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <Stack size="xxlarge">
          <Register />
          <Location />
          <Sponsors data={SponsorData} title="UNIHACK Sponsors" />
          <WiredMonashTag />
        </Stack>
      </div>
    </Page>
  </div>
);
