import { Event } from '@components/event/';
import styles from './past-events.module.scss';
import { EventInfo } from '@sections/event-info/event-hero/event-hero';

export type PastEventDescription = {
  [year: string]: EventInfo;
};

// TODO: Sort by date
export const PastEvent = (data: PastEventDescription) => {
  return (
    <div className={styles['past-events']}>
      {Object.keys(data).map(year => (
        <Event {...data[year]} />
      ))}
    </div>
  );
};
