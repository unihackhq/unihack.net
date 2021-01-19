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
          <span>UNIHACK</span> 2021
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
    </div>
  </section>
);

export default Hero;
