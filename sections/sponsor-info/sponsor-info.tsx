import styles from './sponsor-info.module.scss';
import Pill from '../../components/pill/pill';

const SponsorInfo = () => (
  <section className={styles['sponsor-info']}>
    <div className={styles['sponsor-info-content']}>
      <h2>What is UNIHACK?</h2>
      <p className={`${styles.details} ${styles['no-margin']}`}>
        When: <strong>5-7 March, 2021</strong>
      </p>
      <p className={`${styles.details} ${styles['no-margin']}`}>
        Where: <strong>Online</strong>
      </p>
      <p className={styles.details}>
        UNIHACK 2021 is a 48-hour hackathon with the mission to provide a
        creative space for engineering, design and product students to build
        innovative projects that are ready to go to market. Come join us in the
        Imagination Revolution.
      </p>
      <div className={styles.pills}>
        <Pill color="grey">
          Hacking since 2014 with <strong>seven successful hackathons</strong>,
          UNIHACK is{' '}
          <strong className={styles.yellow}>
            Australia’s largest student hackathon
          </strong>
          .
        </Pill>
        <Pill color="blue">
          <span>40%</span>
          year-on-year participant growth
        </Pill>
        <Pill color="yellow">
          <span>35-50%</span>
          increase in sponsorship
        </Pill>
      </div>
    </div>
  </section>
);

export default SponsorInfo;
