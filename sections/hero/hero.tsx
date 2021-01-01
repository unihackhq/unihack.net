import styles from './hero.module.scss';
import Header from '../../components/header/header';
import ButtonLink from '../../components/button-link/button-link';

const Hero = () => (
  <section className={styles.hero}>
    <Header />
    <div className={styles['hero-content']}>
      <div className={styles['hero-content-title']}>
        <img
          className={styles['hero-content-logo']}
          src={'/images/unihack.svg'}
        />
        <h1 className={styles.title}>
          <span>UNIHACK</span> 2020
        </h1>
        <h2>
          <span>5-7 March · Online · Australia-wide</span>
        </h2>
      </div>
      <div className={styles.actions}>
        <ButtonLink
          type="secondary"
          href="https://www.eventbrite.com.au/e/unihack-melbourne-2021-tickets-134461017523"
        >
          Get tickets
        </ButtonLink>
        <ButtonLink
          type="secondary"
          href="https://www.facebook.com/events/243709813780048/"
        >
          View Facebook event
        </ButtonLink>
      </div>
      <a
        className={styles['mlh-trust-badge']}
        id="mlh-trust-badge"
        href="https://mlh.io/seasons/apac-2020/events?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=black"
        target="_blank"
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-apac-black.svg"
          alt="Major League Hacking 2020 Hackathon Season"
          style={{ width: '100%' }}
        />
      </a>
    </div>
  </section>
);

export default Hero;
