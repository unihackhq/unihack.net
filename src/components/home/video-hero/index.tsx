'use client';
import { HeroButton } from '@/components/hero-button';
import styles from './style.module.css';
import { TwitchPlayer } from 'react-twitch-embed';

export const VideoHero = () => {
  return (
    <div className={styles.home_header}>
      <h1>
        Starts on <span>March 13</span>
      </h1>
      <TwitchPlayer
        channel="unihack"
        width="100%"
        height="auto"
        className={styles.twitch_player}
      />
      <div className={styles.home_header_text}>
        <HeroButton
          text="Register now"
          href="https://manage.unihack.net/auth/signup"
        />
        <HeroButton
          text="Manage your registration"
          href="https://manage.unihack.net/"
        />
        <HeroButton text="Looking to sponsor?" href="#sponsor-us" />
      </div>
    </div>
  );
};
