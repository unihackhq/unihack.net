import styles from './sponsor-about.module.scss';
import { H2, Text } from '@components/typography/typography';

const SponsorAbout = () => {
  return (
    <section className={styles['sponsor-about']}>
      <div className={styles['sponsor-about-container']}>
        <div className={styles['sponsor-about-content']}>
          <H2>About UNIHACK</H2>
          <Text>
            UNIHACK is Australia's premier student hackathon — our mission: to
            provide a platform for the upcoming generation of tech disrupters to
            showcase innovative and market-ready projects, built over a 48-hour
            period.
          </Text>
          <Text>
            We work with companies of all sizes that support tech education to
            ensure that Australia's largest student hackathon continues to
            growth sustainably as we continue to support student talent through
            our passion, commitment and of course the help of our invaluable
            mentors. Come join us in the imagination revolution whether it is to
            meet and recruit amazing talent or to undertake brand promotions and
            product feedback.
          </Text>
          <Text>
            At Australia's premier student hackathon, UNIHACK provides our
            sponsors the opportunity to see the upcoming generation of tech
            disrupters showcase innovative and market-ready projects, built over
            a 48-hour period. This platform is the perfect opportunity to meet
            and recruit amazing talent, undertake brand promotion and or receive
            live product feedback.
          </Text>
        </div>
      </div>
    </section>
  );
};

export default SponsorAbout;
