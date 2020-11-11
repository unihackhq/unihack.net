import styles from './sponsors.module.scss';
import Grid from '../../../components/grid/grid';
import sponsorData from '../../../content/2019/sponsors.json';

const Sponsors = () => {
  const venueSponsorPath =
    sponsorData.base + sponsorData.sponsors.venue.imagePath;
  const platinumSponsorPath =
    sponsorData.base + sponsorData.sponsors.platinum.imagePath;

  return (
    <section className={styles['event-page-sponsors']}>
      <div className={styles['event-page-sponsors-content']}>
        <h2 className={styles['section-title']}>Sponsors</h2>
        <p className={styles.subtitle}>
          Without whom this event would not happen...
        </p>
        <div className={styles['primary-companies']}>
          <div className={styles['company-section']}>
            <h2
              className={`${styles['tier-title']} ${styles.highlighted} ${styles.platinum}`}
            >
              Platinum
            </h2>
            <img
              className={styles['company-logo']}
              src={platinumSponsorPath}
              alt={sponsorData.sponsors.platinum.name}
            />
          </div>
          <div className={styles['company-section']}>
            <h2
              className={`${styles['tier-title']} ${styles.highlighted} ${styles.venue}`}
            >
              Venue Sponsor
            </h2>
            <img
              className={styles['company-logo']}
              src={venueSponsorPath}
              alt={sponsorData.sponsors.venue.name}
            />
          </div>
        </div>

        <h2 className={`${styles['tier-title']} ${styles.highlighted}`}>
          Gold
        </h2>
        <Grid items={sponsorData.sponsors.gold} basePath={sponsorData.base} />

        <h2
          className={`${styles['tier-title']} ${styles.highlighted} ${styles['academic-gold']}`}
        >
          Academic Gold
        </h2>
        <Grid
          items={sponsorData.sponsors.academicGold}
          basePath={sponsorData.base}
        />

        <h2
          className={`${styles['tier-title']} ${styles.highlighted} ${styles.silver}`}
        >
          Silver
        </h2>
        <Grid items={sponsorData.sponsors.silver} basePath={sponsorData.base} />

        <h2
          className={`${styles['tier-title']} ${styles.highlighted} ${styles.other}`}
        >
          Other sponsors
        </h2>
        <Grid items={sponsorData.sponsors.other} basePath={sponsorData.base} />
      </div>
    </section>
  );
};

export default Sponsors;
