'use client';
import { HeroButton } from '@/components/hero-button';
import styles from './style.module.css';
import { TwitchPlayer } from 'react-twitch-embed';

export const VideoHero = () => {
  return (
    <div className={styles.home_header}>
      <h1>
        Congratulations to the winners! <span>See you in 2027!</span>
      </h1>
      <div className={styles.home_header_text}>
        <HeroButton
          text="Want to help plan 2027? Join the team!"
          href="https://unihack.net/join/"
        />
      </div>
      <TwitchPlayer
        channel="unihack"
        width="100%"
        height="auto"
        className={styles.twitch_player}
      />
    </div>
  );
};
