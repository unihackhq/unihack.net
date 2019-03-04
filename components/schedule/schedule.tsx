import React from 'react';
import * as moment from 'moment';
import './schedule.scss';
import ScheduleItem from './schedule-item/schedule-item';
import { ScheduleItemI } from './schedule-item/schedule-item.interface';

type Props = {
  data: ScheduleItemI[]
};

class Schedule extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  private buildScheduleItems() {
    return this.props.data.map((scheduleEvent) => {
      const startTime = moment(scheduleEvent.startTime, 'YYYY-MM-DD HH:mm');

      if (startTime.isValid()) {
        const scheduleItem: ScheduleItemI = {
          ...scheduleEvent,
          startTime: startTime.format('h:mm a')
        };

        const endTime = moment(scheduleEvent.endTime, 'YYYY-MM-DD HH:mm');
        const now = moment();

        let isActiveEvent = false, isFutureEvent = false;

        if (now < endTime) {
          if (now >= startTime) {
            isActiveEvent = true;
          } else {
            isFutureEvent = true;
          }
        }

        return (
          <ScheduleItem
            key={scheduleItem.startTime}
            scheduleItem={scheduleItem}
            isActive={isActiveEvent}
            isFuture={isFutureEvent}
          />
        );
      }

    });
  }

  public render() {
    return (
      <table className="schedule">
        <tbody>
          {this.buildScheduleItems()}
        </tbody>
      </table>
    );
  }
}

export default Schedule;
