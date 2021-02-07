import styles from './hero.module.scss';
import ButtonLink from '@components/button-link/button-link';
import { H1, HL, HXL } from '@components/typography/typography';
import Stack from '@components/stack/stack';

const Hero = () => (
  <section className={styles.hero}>
    <Stack size="xlarge" className={styles['hero-content']}>
      <Stack size="large" className={styles['hero-content-title']}>
        <img
          className={styles['hero-graphic']}
          src={'/images/2021-hero.svg'}
          alt="UNIHACK 2021 graphic featuring interconnected laptops surrounding a 3D UNIHACK logo"
        />
        <Stack size="small" className={styles['hero-content-title']}>
          <HXL className={styles['hero-content-title-xl']}>
            <span className={styles.salmon}>Create. </span>
            <span className={styles.midori}>Experience. </span>
            <span className={styles.pacific}>Share. </span>
          </HXL>
          <HL>
            at UNIHACK <span className={styles.yellow}>2021</span>
          </HL>
        </Stack>
      </Stack>
      <H1 className={styles['hero-content-subtitle']}>
        <span>5-7 March</span>
        <span className={styles['mobile-only']}> · </span>
        <span>Online</span>
        <span className={styles['mobile-only']}> · </span>
        <span>Australia-wide</span>
      </H1>
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
    </Stack>
  </section>
);

export default Hero;
