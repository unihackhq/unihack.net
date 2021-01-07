import React from 'react';
import Head from 'next/head';
import styles from './terms.module.scss';

import Page from '@layouts/page/page';
import Header from '@components/header/header';
import { H1, H2 } from '@components/typography/typography';

export default () => (
  <div>
    <Head>
      <title>Terms of Service - UNIHACK</title>
    </Head>
    <Page featureBackground>
      <Header withLogo solid />
      <section className={styles.terms}>
        <div className={styles['terms-content']}>
          <H1>Terms of Service</H1>
          <p>
            <strong>UNIHACK INCORPORATED</strong> is an Australian-owned and
            non-for-profit company. All payments will be invoiced in Australian
            Dollars unless otherwise agreed upon in writing.
          </p>

          <H2 className={styles.highlighted}>
            UNIHACK competitor refund policy
          </H2>
          <p>
            Unfortunately we cannot offer refunds for any competitor tickets,
            however you are able transfer your ticket to another student willing
            to compete.
          </p>
          <p>
            Our{' '}
            <a href="https://facebook.com/groups/unihackers/">Facebook Group</a>{' '}
            is the recommended medium to find other students looking for
            tickets.
          </p>

          <H2 className={styles.highlighted}>
            UNIHACK company sponsorship refund policy
          </H2>
          <p>
            Since sponsorship goes directly into the running of hackathons and
            takes effect immediately we cannot offer refunds for sponsorship.
          </p>
          <p>
            We may however be able to offer compensation in credit towards
            another year of sponsorship.
          </p>
        </div>
      </section>
    </Page>
  </div>
);
