import React from 'react';
import styles from './sponsor-get-involved.module.scss';
import { H2XL, Text } from '@components/typography/typography';
import { Player } from '@lottiefiles/react-lottie-player';
import TechTalentLottie from '@content/lottie/tech-talent.json';
import MarketingLottie from '@content/lottie/marketing.json';
import ToolsLottie from '@content/lottie/tools.json';
import ButtonLink from '@components/button/button-link';
import { SPONSORSHIP_FILE } from '@lib/constants';

interface LottiePlayerTypes {
  src: object;
  id: string;
  loop?: boolean;
}

const LottiePlayer: React.FC<LottiePlayerTypes> = ({
  src,
  id,
  loop = true,
}) => {
  return (
    <Player
      id={id}
      className={styles['sponsor-get-involved-lottie']}
      src={src}
      autoplay={true}
      keepLastFrame={true}
      loop={loop}
    />
  );
};

const SponsorGetInvolved: React.FC = () => (
  <section className={styles['sponsor-get-involved']}>
    <div className={styles['sponsor-get-involved-content']}>
      <H2XL>Why Sponsor?</H2XL>
      <div className={styles['sponsor-get-involved-grid']}>
        <div className={styles['sponsor-get-involved-grid-item']}>
          <LottiePlayer
            id="sponsor-get-involved-tech-talent"
            src={TechTalentLottie}
          />
          <Text>
            Meet, shape, and recruit the next generation of tech talent
          </Text>
        </div>

        <div className={styles['sponsor-get-involved-grid-item']}>
          <LottiePlayer id="sponsor-get-involved-tools" src={ToolsLottie} />
          <Text>Promote your products/tools &amp; receive live feedback</Text>
        </div>

        <div className={styles['sponsor-get-involved-grid-item']}>
          <LottiePlayer
            id="sponsor-get-involved-marketing"
            src={MarketingLottie}
            loop={false}
          />
          <Text>Increase brand awareness and support innovation</Text>
        </div>
      </div>
      <div className={styles.actions}>
        <ButtonLink
          type="secondary"
          theme="transparent"
          href={SPONSORSHIP_FILE}
        >
          Download Prospectus
        </ButtonLink>
      </div>
    </div>
  </section>
);

export default SponsorGetInvolved;
