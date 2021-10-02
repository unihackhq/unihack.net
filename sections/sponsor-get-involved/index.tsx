import React from 'react';
import styles from './sponsor-get-involved.module.scss';
import { H2XL, Text } from '@components/typography/typography';
import { Player } from '@lottiefiles/react-lottie-player';
import TechTalentLottie from '@content/lottie/tech-talent.json';
import MarketingLottie from '@content/lottie/marketing.json';
import ToolsLottie from '@content/lottie/tools.json';

interface LottiePlayerTypes {
  src: object;
  id: string;
}

const LottiePlayer: React.FC<LottiePlayerTypes> = ({ src, id }) => {
  return (
    <Player
      id={id}
      className={styles['sponsor-get-involved-lottie']}
      src={src}
      autoplay={true}
      loop={true}
    />
  );
};

const SponsorGetInvolved: React.FC = () => (
  <section className={styles['sponsor-get-involved']}>
    <div className={styles['sponsor-get-involved-content']}>
      <H2XL>Get involved to...</H2XL>
      <div className={styles['sponsor-get-involved-grid']}>
        <div className={styles['sponsor-get-involved-grid-item']}>
          <LottiePlayer
            id="sponsor-get-involved-tech-talent"
            src={TechTalentLottie}
          />
          <Text>Meet, shape, and recruit emerging tech talent</Text>
        </div>
        <div className={styles['sponsor-get-involved-grid-item']}>
          <LottiePlayer
            id="sponsor-get-involved-marketing"
            src={MarketingLottie}
          />
          <Text>Increase brand awareness</Text>
        </div>
        <div className={styles['sponsor-get-involved-grid-item']}>
          <LottiePlayer id="sponsor-get-involved-tools" src={ToolsLottie} />
          <Text>Promote your tools & receive live feedback</Text>
        </div>
      </div>
    </div>
  </section>
);

export default SponsorGetInvolved;
