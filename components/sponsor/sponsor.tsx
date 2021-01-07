import React from 'react';
import styles from './sponsor.module.scss';
import ButtonLink from '../button-link/button-link';
import { H3, Text } from '@components/typography/typography';

const Sponsor = () => (
  <section className={styles.sponsor}>
    <div className={styles['sponsor-content']}>
      <H3>Sponsor</H3>
      <Text>When you sponsor UNIHACK, you can:</Text>
      <ul>
        <li>
          Put your company at the forefront during Grad Application period.
        </li>
        <li>
          Scale your reach with Australia’s{' '}
          <span>largest tech student hackathon.</span>
        </li>
        <li>
          Get access to
          <span> 180+ bright and self-starting students </span>
          who will be working to solve real-world problems.
        </li>
        <li>
          Witness students' technical and business prowess and channel them into
          your recruitment pipeline.
        </li>
      </ul>
      <div className={styles.actions}>
        <ButtonLink
          type="primary"
          href="mailto:sponsorship@melbourne.unihack.net?subject=General Sponsorship Enquiry"
        >
          Enquire now
        </ButtonLink>
        <ButtonLink type="primary" href="/sponsorship">
          More info
        </ButtonLink>
      </div>
    </div>
  </section>
);

export default Sponsor;
