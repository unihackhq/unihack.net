'use client';
import { TZDate } from '@date-fns/tz';
import styles from './style.module.css';
import { EventScheduleItem } from './types';
import { schedule } from './schedule';

interface EventScheduleState {
  friday: EventScheduleItem[];
  saturday: EventScheduleItem[];
  sunday: EventScheduleItem[];
}

export const EventItem = ({ item }: { item: EventScheduleItem }) => {
  return (
    <li className={styles.event_item}>
      <time className={styles.event_time}>
        {new TZDate(item.datetime, 'Australia/Sydney').toLocaleTimeString(
          'en-AU',
          {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Australia/Sydney',
          },
        )}
      </time>
      <h4 className={styles.event_title}>{item.title}</h4>
      {item.description && (
        <p className={styles.event_description}>{item.description}</p>
      )}
    </li>
  );
};

export const EventDay = ({
  day,
  date,
  events,
}: {
  day: string;
  date: string;
  events: EventScheduleItem[];
}) => {
  return (
    <div className={`${styles.event_border} ${styles[day.toLowerCase()]}`}>
      <h3>
        {day} <span>{date}</span>
      </h3>
      <ul>
        {events.map((item, index) => (
          <EventItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export const EventSchedule = () => {
  const dateState: EventScheduleState = schedule.reduce<EventScheduleState>(
    (acc, item) => {
      const date = new TZDate(item.datetime, 'Australia/Sydney');
      const day = date.getDay();

      if (day === 5) {
        acc.friday.push(item);
      } else if (day === 6) {
        acc.saturday.push(item);
      } else if (day === 0) {
        acc.sunday.push(item);
      }

      return acc;
    },
    { friday: [], saturday: [], sunday: [] },
  );

  return (
    <section className={styles.stretch} id="schedule">
      <div className={styles.section}>
        <h2>Event Schedule</h2>
        <p className={styles.timezone_disclaimer}>
          All times are in Sydney/Melbourne/Canberra time.
        </p>
        <div className={styles.schedule_grid}>
          <EventDay day="Friday" date="March 13" events={dateState.friday} />
          <EventDay
            day="Saturday"
            date="March 14"
            events={dateState.saturday}
          />
          <EventDay day="Sunday" date="March 15" events={dateState.sunday} />
        </div>
        <div className={styles.judging_break}>
          <div className={styles.judging_content}>
            <div className={styles.winners_text}>
              <h3>
                March 16 - 20 <span>Judging Week</span>
              </h3>
              <p>
                Our panel of expert judges will review all submitted projects
                during this week to find our winners.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.winners_announcement}>
          <div className={styles.event_border}>
            <h3>
              Monday <span>March 23</span>
            </h3>
            <div className={styles.winners_text}>
              <h4>The Winners Announcement</h4>
              <p>
                Who takes home the UNIHACK 2026 crown? Find out all the winners
                at 6:00PM AEDT, live on Twitch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
