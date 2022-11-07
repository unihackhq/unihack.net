import { Event } from '@components/event/';
import styles from './past-events.module.scss';
import { EventInfo } from '@sections/event-info/event-hero/event-hero';
import { FC } from 'react';

export type Props = {
  list: { [event: string]: EventInfo };
};

const stringSort = (a: string, b: string): number => (b > a ? 1 : -1);

export const PastEvent: FC<Props> = ({ list }) => {
  return (
    <div className={styles['past-events']}>
      {Object.keys(list)
        .sort(stringSort)
        .map((event, i) => {
          const info = list[event];
          const eventLink = info.redirectToDevpost
            ? info.devpostUrl
            : `/events/${event}`;

          return (
            <Event
              key={i}
              link={eventLink}
              image={info.coverImage}
              title={info.title}
              date={info.date}
              location={info.location}
            />
          );
        })}
    </div>
  );
};
