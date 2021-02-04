import React from 'react';
import Head from 'next/head';
import styles from './terms.module.scss';

import Page from '@layouts/page/page';
import Header from '@components/header/header';
import { H2, HL, Text } from '@components/typography/typography';
import Stack from '@components/stack/stack';

export default () => (
  <div>
    <Head>
      <title>Terms of Service - UNIHACK</title>
    </Head>
    <Page>
      <Header />
      <section className={styles.terms}>
        <div className={styles['terms-content']}>
          <Stack size="medium">
            <HL>Terms of Service</HL>
            <Text>
              <strong>UNIHACK INCORPORATED</strong> is an Australian-owned and
              non-for-profit company. All payments will be invoiced in
              Australian Dollars unless otherwise agreed upon in writing.
            </Text>

            <H2 className={styles.highlighted}>
              UNIHACK competitor refund policy
            </H2>
            <Text>
              Unfortunately we cannot offer refunds for any competitor tickets,
              however you are able transfer your ticket to another student
              willing to compete.
            </Text>
            <Text>
              Our{' '}
              <a href="https://facebook.com/groups/unihackers/">
                Facebook Group
              </a>{' '}
              is the recommended medium to find other students looking for
              tickets.
            </Text>

            <H2 className={styles.highlighted}>
              UNIHACK company sponsorship refund policy
            </H2>
            <Text>
              Since sponsorship goes directly into the running of hackathons and
              takes effect immediately we cannot offer refunds for sponsorship.
            </Text>
            <Text>
              We may however be able to offer compensation in credit towards
              another year of sponsorship.
            </Text>
          </Stack>
        </div>
      </section>
    </Page>
  </div>
);
