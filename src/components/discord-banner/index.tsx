import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../button';
import styles from './style.module.css';

import { faDiscord } from '@fortawesome/free-brands-svg-icons';

export const DiscordBanner = () => {
  return (
    <section className={styles.stretch} id="discord">
      <div className={styles.section}>
        <span>
          <FontAwesomeIcon icon={faDiscord} />
        </span>
        <div className={styles.content}>
          <p className={styles.discordText}>
            Got questions? Looking for a team? Need a mentor?{' '}
            <span>Get connected on our Discord.</span>
          </p>
          <p>
            Discord will be used as our primary platform for communication and
            connection throughout the event. This is where you will find
            announcements, ask questions, engage with our mentors during the
            weekend, and raffles during the night.
          </p>
          <Button href="https://discord.gg/xXvZ3gbGBM" text="Join Discord" />
        </div>
      </div>
    </section>
  );
};
