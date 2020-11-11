import styles from './sponsor-hero.module.scss';

const SponsorHero = () => (
  <section
    className={styles['sponsor-hero']}
    style={{ backgroundImage: 'url(/images/sponsor-hero.jpg)' }}
  >
    <div className={styles['sponsor-hero-content']}>
      <div className={styles['hero-quote']}>
        <p className={styles.quote}>
          <strong className={styles.highlight}>
            <span className={styles.offset}>
              Blown away by the great ideas at #UNIHACK2015! Makes judging very
              difficult
            </span>
          </strong>
        </p>
        <p className={styles['quote-from']}>
          - Hadi Michel (Software Engineer at Deloitte)
        </p>
      </div>
    </div>
  </section>
);

export default SponsorHero;
