'use client'
import { TwitchPlayer } from 'react-twitch-embed'
import { HeroButton } from '@/components/hero-button'
import styles from './style.module.css'

export const VideoHero = () => {
  return (
    <div className={styles.home_header}>
      <h1>
        Congratulations to the winners! <span>See you in 2027!</span>
      </h1>
      <div className={styles.home_header_text}>
        <HeroButton
          href="https://medium.com/unihack-blog/a68e8b120dc3"
          text="The Winners"
        />
        <HeroButton
          href="https://unihack2026.devpost.com/project-gallery/"
          text="View all projects"
        />
        <HeroButton href="https://unihack.net/join/" text="Join the team!" />
      </div>
      <TwitchPlayer
        channel="unihack"
        className={styles.twitch_player}
        height="auto"
        width="100%"
      />
    </div>
  )
}
