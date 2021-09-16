import React from 'react';
import styles from './sponsor.module.scss';
import ButtonLink from '../button/button-link';
import { H3, Text } from '@components/typography/typography';
import Stack from '@components/stack/stack';

const Sponsor = () => (
  <section className={styles.sponsor}>
    <div className={styles['sponsor-content']}>
      <Stack size="medium">
        <Stack size="small">
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
              Witness students' technical and business prowess and channel them
              into your recruitment pipeline.
            </li>
          </ul>
        </Stack>

        <div className={styles.actions}>
          <ButtonLink
            theme="dark"
            type="primary"
            href="mailto:sponsorship@unihack.net?subject=General Sponsorship Enquiry"
          >
            Enquire now
          </ButtonLink>
          <ButtonLink type="secondary" theme="dark" href="/sponsorship">
            More about sponsorship
          </ButtonLink>
        </div>
      </Stack>
    </div>
  </section>
);

export default Sponsor;
