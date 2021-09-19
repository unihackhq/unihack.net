import React from 'react';
import styles from './sponsor-prompt.module.scss';
import ButtonLink from '@components/button/button-link';
import { H2, Text } from '@components/typography/typography';
import Stack from '@components/stack/stack';
import { event, AnalyticsCategory } from '../../lib/gtag';

const SponsorPrompt = () => (
  <section className={styles['sponsor-prompt']} id="sponsor-prompt">
    <div className={styles['sponsor-prompt-container']}>
      <Stack size="medium" className={styles['sponsor-prompt-content']}>
        <Stack size="small">
          <H2>Contact us to become a sponsor today!</H2>
          <Text>
            We're happy to discuss customisations according to your needs. Send
            us an email at{' '}
            <a
              href="mailto:sponsorship@unihack.net"
              onClick={() =>
                event({
                  action: 'prompt_email_clicked',
                  category: AnalyticsCategory.SPONSORSHIP,
                  label: 'Clicked on Prompt Email'
                })
              }
            >
              sponsorship@unihack.net
            </a>{' '}
            and we’ll follow-up within 24 hours.
          </Text>
          {/* <p>
        For more information on the available tiers and addons, please download
        our prospectus below.
      </p> */}
        </Stack>
        <div className={styles.actions}>
          <ButtonLink
            type="primary"
            theme="dark"
            href="mailto:sponsorship@unihack.net?subject=General Sponsorship Enquiry"
            onClick={() => {
              event({
                action: 'prompt_button_clicked',
                category: AnalyticsCategory.SPONSORSHIP,
                label: 'Clicked on Prompt Button'
              });
            }}
          >
            Enquire now
          </ButtonLink>
          {/* <ButtonLink
          type="primary"
          href="https://drive.google.com/file/d/1j6YP-lWaBPJ8S1XWWrL6N78USNloTNNw/view"
          target="_blank"
        >
          Download prospectus
        </ButtonLink> */}
        </div>
      </Stack>
    </div>
  </section>
);

export default SponsorPrompt;
