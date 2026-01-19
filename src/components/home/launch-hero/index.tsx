import { HeroButton } from '@/components/hero-button';
import styles from './style.module.css';

export const LaunchHero = () => {
  return (
    <div className={styles.home_header}>
      <h1>We are back on <span>March 13-15, 2026</span></h1>
      <div className={styles.home_header_text}>
        <HeroButton text="Register now" href="https://manage.unihack.net/auth/signup" />
        <HeroButton text="Manage your registration" href="https://manage.unihack.net/" />
        <HeroButton text="Looking to sponsor?" href="#sponsor-us" />
      </div>
    </div>
  );
};
