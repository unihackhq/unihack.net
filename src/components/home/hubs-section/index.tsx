import { Button } from '@/components/button';
import styles from './style.module.css';

export const HubsSection = () => {
  return (
    <section className={styles.section} id="hubs">
      <h3>How do I participate?</h3>
      <div className={styles.centerText}>
        <p>
          <strong>
            You can participate remotely, or you can participate from one of our
            physical hubs below.
          </strong>
        </p>
        <p>
          Participating from a hub gives you the opportunity to meet other
          hackers in person, get help from local mentors, and free swag. There
          are limited spots available at each hub, so be sure to register early!
        </p>
        <p>
          Participating from a hub is not mandatory - you can still join
          remotely!
        </p>
      </div>

      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <h4>Coming soon...</h4>
        </div>
        <div className={styles.gridItem}>
          <h4>Coming soon...</h4>
        </div>
        <div className={styles.gridItem}>
          <h4>Coming soon...</h4>
        </div>
      </div>

      <div className={styles.discordBanner}>
        <p>
          Got questions? Looking for a team? Connect with other participants on
          our Discord.
        </p>
        <Button href="https://discord.gg/xXvZ3gbGBM" text="Join Discord" />
      </div>
    </section>
  );
};
