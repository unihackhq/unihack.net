import React from 'react';
import styles from './privacy.module.scss';
import ButtonLink from '@components/button-link/button-link';
import { H2 } from '@components/typography/typography';

const Privacy = () => (
  <section className={styles.privacy}>
    <div className={styles['privacy-content']}>
      <H2 className={styles.highlighted}>Your Privacy</H2>
      <p>
        We are committed to respecting your privacy and safeguarding any
        personal information you provide us with, and aim to only collect
        information essential to the running of our hackathons.
      </p>
      <ButtonLink href="/privacy" type="secondary">
        View our Privacy Policy
      </ButtonLink>
    </div>
  </section>
);

export default Privacy;
