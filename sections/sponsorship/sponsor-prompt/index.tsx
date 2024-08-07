import React from 'react';
import styles from './sponsor-prompt.module.scss';
import ButtonLink from '@components/button/button-link';
import { H2XL, Text } from '@components/typography/typography';
import Stack from '@components/stack/stack';
import { event, AnalyticsCategory } from '@lib/gtag';
import { SPONSORSHIP_EMAIL, SPONSORSHIP_FILE } from '@lib/constants';
import Image from 'next/image';
import sponsorCallout from '../../../public/images/sponsor-callout.jpg';

const SponsorPrompt = () => (
  <section className={styles['sponsor-prompt']} id="sponsor-prompt">
    <div className={styles['sponsor-prompt-container']}>
      <span className={styles['sponsor-prompt-image']}>
        <Image
          src={sponsorCallout}
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </span>
      <Stack size="medium" className={styles['sponsor-prompt-content']}>
        <Stack size="small">
          <H2XL>Become a sponsor today!</H2XL>
          <Text>
            Working with UNIHACK as a sponsor provides companies a unique
            opportunity to connect with some of the most talented university
            students.
          </Text>
          <Text>
            Interested in sponsoring UNIHACK? Email us at{' '}
            <a
              href={SPONSORSHIP_EMAIL}
              onClick={() =>
                event({
                  action: 'sponsorship.sponsor_prompt.email_link.click',
                  category: AnalyticsCategory.SPONSORSHIP,
                  label: 'Sponsorship - Sponsor Prompt - Click on Email Link',
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
            type="secondary"
            theme="transparent"
            href={SPONSORSHIP_FILE}
            onClick={() => {
              event({
                action: 'sponsorship.sponsor_prompt.button.click',
                category: AnalyticsCategory.SPONSORSHIP,
                label: 'Sponsorship - Sponsor Prompt - Download Prospectus',
              });
            }}
          >
            Download Prospectus
          </ButtonLink>
          <ButtonLink
            className={styles['sponsor-prompt-link']}
            type="secondary"
            theme="transparent"
            href={SPONSORSHIP_EMAIL}
            onClick={() => {
              event({
                action: 'sponsorship.sponsor_prompt.button.click',
                category: AnalyticsCategory.SPONSORSHIP,
                label: 'Sponsorship - Sponsor Prompt - Click on Button',
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
