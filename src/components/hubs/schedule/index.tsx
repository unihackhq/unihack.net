'use client';
import { Button } from '@/components/button';
import styles from './style.module.css';

interface HubEventScheduleProps {
  friday: {
    time: string;
    location: string[];
    locationMapLink?: string;
  };
  weekend: {
    time: string[];
    location: string[];
    locationMapLink?: string;
  };
}

export const HubEventSchedule = ({
  friday,
  weekend,
}: HubEventScheduleProps) => {
  return (
    <section className={styles.stretch} id="schedule">
      <div className={styles.section}>
        <h2>Opening Hours</h2>
        <p className={styles.timezone_disclaimer}>
          All times are in Sydney/Melbourne/Canberra time.
        </p>
        <div className={`${styles.friday} ${styles.slot}`}>
          <div className={styles.day}>
            <h3>
              Friday <span>March 13</span>
            </h3>
            <p>Watch the opening ceremony and form teams.</p>
          </div>
          <div className={styles.time}>
            <h4>Time</h4>
            <p>{friday.time}</p>
          </div>
          <div className={styles.location}>
            <h4>Location</h4>
            {friday.location.map((loc, index) => (
              <p key={index}>{loc}</p>
            ))}
            {friday.locationMapLink && (
              <Button href={friday.locationMapLink} text="View Map" />
            )}
          </div>
        </div>
        <div className={`${styles.weekend} ${styles.slot}`}>
          <div className={styles.day}>
            <h3>
              Saturday <span>March 14</span>
            </h3>
            <h3>
              Sunday <span>March 15</span>
            </h3>
            <p>Come and build your projects at one of our hubs.</p>
          </div>
          <div className={styles.time}>
            <h4>Time</h4>
            {weekend.time.map((time, index) => (
              <p key={index}>{time}</p>
            ))}
          </div>
          <div className={styles.location}>
            <h4>Location</h4>
            {weekend.location.map((loc, index) => (
              <p key={index}>{loc}</p>
            ))}
            {weekend.locationMapLink && (
              <Button href={weekend.locationMapLink} text="View Map" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
