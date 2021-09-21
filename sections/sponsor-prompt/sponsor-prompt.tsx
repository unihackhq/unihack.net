import React from 'react';
import styles from './sponsor-prompt.module.scss';
import ButtonLink from '@components/button/button-link';
import { H2, Text } from '@components/typography/typography';
import Stack from '@components/stack/stack';
import { event, AnalyticsCategory } from '../../lib/gtag';

const SponsorPrompt = () => (
  <section className={styles['sponsor-prompt']} id="sponsor-prompt">
    <div className={styles['sponsor-prompt-container']}>
      <span className={styles['sponsor-prompt-image']}></span>
      <Stack size="medium" className={styles['sponsor-prompt-content']}>
        <Stack size="small">
          <H2>Contact us to become a sponsor today!</H2>
          <Text>
            Working with UNIHACK as a sponsor provides companies a unique
            opportunity to connect with some of the most talented university
            students.
          </Text>
          <Text>
            Interested in sponsoring UNIHACK 2022? Email us at{' '}
            <a
              href="mailto:sponsorship@unihack.net"
              onClick={() =>
                event({
                  action: 'prompt_email_clicked',
                  category: AnalyticsCategory.SPONSORSHIP,
                  label: 'Clicked on Prompt Email',
                })
              }
            >
              sponsorship@unihack.net
            </a>
            !
          </Text>
        </Stack>
        <div className={styles.actions}>
          <ButtonLink
            className={styles['sponsor-prompt-link']}
            type="primary"
            theme="dark"
            href="mailto:sponsorship@unihack.net?subject=General Sponsorship Enquiry"
            onClick={() => {
              event({
                action: 'prompt_button_clicked',
                category: AnalyticsCategory.SPONSORSHIP,
                label: 'Clicked on Prompt Button',
              });
            }}
          >
            Enquire Now
          </ButtonLink>
        </div>
      </Stack>
    </div>
  </section>
);

export default SponsorPrompt;
