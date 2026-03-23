import { HeroButton } from '@/components/hero-button';
import styles from './style.module.css';

export const LaunchHero = () => {
  return (
    <div className={styles.home_header}>
      <h1>
        <span>Congratulations to the winners!</span> See you in 2027!
      </h1>
      <div className={styles.home_header_text}>
        <HeroButton
          text="Want to help plan 2027? Join the team!"
          href="https://unihack.net/join/"
        />
      </div>
    </div>
  );
};
