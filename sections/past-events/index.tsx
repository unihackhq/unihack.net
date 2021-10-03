import { Event } from '@components/event/';
import styles from './past-events.module.scss';
import { EventInfo } from '@sections/event-info/event-hero/event-hero';

export type PastEventDescription = {
  [event: string]: EventPost;
};

export interface EventPost extends EventInfo {
  devPost: boolean;
}

const stringSort = (a: string, b: string): number => (b > a ? 1 : -1);

export const PastEvent = (data: PastEventDescription) => {
  return (
    <div className={styles['past-events']}>
      {Object.keys(data)
        .sort(stringSort)
        .map((eventPath, i) => (
          <Event key={i} eventDetail={data[eventPath]} eventPath={eventPath} />
        ))}
    </div>
  );
};
