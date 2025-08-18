import { HeroButton } from '@/components/hero-button';
import styles from './style.module.css';

export const LaunchHero = () => {
  return (
    <div className={styles.home_header}>
      <h1>The Imagination Hackathon</h1>
      <div className={styles.home_header_text}>
        <p>UNIHACK 2026 returns on March 13 - 15, 2026</p>
        <HeroButton text="Looking to sponsor?" href="#sponsor-us" />
        <HeroButton text="Pre-register now" href="#" />
      </div>
    </div>
  );
};
