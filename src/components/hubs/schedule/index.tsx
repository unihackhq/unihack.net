'use client';
import styles from './style.module.css';

export const HubEventSchedule = () => {
  return (
    <section className={styles.stretch} id="schedule">
      <div className={styles.section}>
        <h2>Event Schedule</h2>
        <p className={styles.timezone_disclaimer}>
          All times are in Sydney/Melbourne/Canberra time.
        </p>
        <div className={styles.friday}>
          <h3>Friday March 13</h3>
          <p>Watch the opening ceremony and form teams.</p>
          <p>6:00PM - 8:00PM</p>
          <p>Location TBD</p>
        </div>
        <div className={styles.weekend}>
          <h3>Saturday March 14 - Sunday March 15</h3>
          <p>Come and build your projects at one of our hubs.</p>
          <p>Saturday 6:00PM - 8:00PM</p>
          <p>Sunday 6:00PM - 8:00PM</p>
          <p>Location TBD</p>
        </div>
      </div>
    </section>
  );
};
