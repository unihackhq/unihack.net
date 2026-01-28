import { Button } from '@/components/button';
import styles from './style.module.css';

export const HubsSection = () => {
  return (
    <section className={styles.section} id="hubs">
      <h2>How do I participate?</h2>
      <div className={styles.grid}>
        <div className={`${styles.gridItem} ${styles.remote}`}>
          <h4>Participate remotely...</h4>
          <p>
            Join from anywhere in Australia or New Zealand - from your
            university lab, your bedroom, or even your local cafe.
          </p>
          <p>
            Just make sure you and your team are registered and connected on our
            Discord.
          </p>
          <Button href="https://discord.gg/xXvZ3gbGBM" text="Join Discord" />
        </div>
        <div className={`${styles.gridItem} ${styles.hubs}`}>
          <h4>... or at one of our hubs</h4>
          <p>
            Meet and collaborate with other hackers in person at your
            university. Limited spots available at each hub.
          </p>
          <p>
            Participating from a hub is not mandatory - you can still join
            remotely!
          </p>
          <Button href="#" text="Locations TBA" />
        </div>
      </div>
    </section>
  );
};
