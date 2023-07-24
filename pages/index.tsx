import React from 'react';
import Head from 'next/head';
import styles from './index.module.scss';
import Page from '@layouts/page/page';
import Link from 'next/link';
import { Logo } from '@components/logo';
import ButtonLink from '@components/button/button-link';

const Index = () => (
  <Page headerless>
    <Head>
      <title>UNIHACK 2024 - Coming Soon - March 1-3, 2024</title>
      <meta
        property="og:title"
        content={`UNIHACK 2024 - Coming Soon - March 1-3, 2024`}
        key="title"
      />
    </Head>
    <div className={styles.homepage}>
      <div className={styles.logo}>
        <Logo baseColor="black" topColor="black" />
      </div>
      <h1>
        UNIHACK returns on <span>March 1-3, 2024</span>
      </h1>
      <p>
        We're currently making some changes to our website in preparation for
        UNIHACK 2024. But in the meantime, you can pre-register your interest.
      </p>
      <p className={styles['preregister']}>
        <ButtonLink
          type="primary"
          theme="light"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdKoXcLr1mg6QIH7s0kcaWrV6MQhMn9N-AXuWcDUDz3RV6Ltw/viewform?usp=pp_url"
        >
          Pre-register now
        </ButtonLink>
      </p>
      <p className={styles['past-events']}>
        Looking for our <Link href="/events">past events</Link>?
      </p>
      <div className={styles.sponsorship}>
        <h2>Looking to sponsor/partner?</h2>
        <p>
          We are still in the process of finalising our sponsorship packages.
          But if you want to get in touch, you can reach us at{' '}
          <strong>sponsorship@unihack.net</strong>
        </p>
      </div>
    </div>
  </Page>
);

export default Index;
