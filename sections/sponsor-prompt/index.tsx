import React from 'react';
import styles from './sponsor-prompt.module.scss';
import ButtonLink from '@components/button/button-link';
import { H2XL, Text } from '@components/typography/typography';
import Stack from '@components/stack/stack';

const SponsorPrompt = () => (
  <section className={styles['sponsor-prompt']} id="sponsor-prompt">
    <div className={styles['sponsor-prompt-container']}>
      <span className={styles['sponsor-prompt-image']}></span>
      <Stack size="medium" className={styles['sponsor-prompt-content']}>
        <Stack size="small">
          <H2XL>Become a sponsor today!</H2XL>
          <Text>
            Working with UNIHACK as a sponsor provides companies a unique
            opportunity to connect with some of the University's most talented
            students. Interested in sponsoring UNIHACK 2022? Email us at{' '}
            <a href="mailto:sponsorship@unihack.net">sponsorship@unihack.net</a>
            !
          </Text>
        </Stack>
        <div className={styles.actions}>
          <ButtonLink
            className={styles['sponsor-prompt-link']}
            type="primary"
            theme="dark"
            href="mailto:sponsorship@unihack.net?subject=General Sponsorship Enquiry"
          >
            Enquire Now
          </ButtonLink>
        </div>
      </Stack>
    </div>
  </section>
);

export default SponsorPrompt;
