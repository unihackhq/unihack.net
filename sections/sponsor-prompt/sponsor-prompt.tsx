import React from 'react';
import styles from './sponsor-prompt.module.scss';
import ButtonLink from '@components/button-link/button-link';
import { H2, H3, Text } from '@components/typography/typography';

const SponsorPrompt = () => (
  <section className={styles['sponsor-prompt']} id="sponsor-prompt">
    <div className={styles['sponsor-prompt-content']}>
      <H2>Interested?</H2>
      <H3>Contact us for more information</H3>
      <Text>
        We're happy to discuss customisations according to your needs. Send us
        an email at{' '}
        <a href="mailto:sponsorship@melbourne.unihack.net">
          sponsorship@melbourne.unihack.net
        </a>{' '}
        and we’ll follow-up within 24 hours.
      </Text>
      {/* <p>
        For more information on the available tiers and addons, please download
        our prospectus below.
      </p> */}
      <div className={styles.actions}>
        <ButtonLink
          type="primary"
          href="mailto:sponsorship@melbourne.unihack.net?subject=General Sponsorship Enquiry"
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
    </div>
  </section>
);

export default SponsorPrompt;
