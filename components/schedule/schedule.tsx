import React from 'react';
import moment from 'moment';
import './schedule.scss';
import ScheduleItem from './schedule-item/schedule-item';
import { ScheduleItemI } from './schedule-item/schedule-item.interface';

type Props = {
  data: ScheduleItemI[];
};

type State = {
  time: moment.Moment;
  currentItem?: ScheduleItemI;
};

class Schedule extends React.Component<Props, State> {
  private interval!: NodeJS.Timeout;
  private activeItem!: ScheduleItemI;

  constructor(props: Props) {
    super(props);
    this.state = { time: moment() };
  }

  private shouldUpdate() {
    const now = moment();
    const activeItem = this.activeItem;

    if (activeItem) {
      const endTime = this.convertTime(activeItem.endTime);
      if (now > endTime) {
        this.setState({ time: now });
      }
    } else {
      this.setState({ time: now });
    }
  }

  // Create an interval to check if the schedule should update
  public componentDidMount() {
    this.interval = setInterval(() => this.shouldUpdate(), 60000);
  }

  public componentWillUnmount() {
    clearInterval(this.interval);
  }

  private convertTime(time: string) {
    return moment(time, 'YYYY-MM-DD HH:mm Z');
  }

  private buildScheduleItems(state: State) {
    return this.props.data.map(scheduleEvent => {
      const startTime = this.convertTime(scheduleEvent.startTime);

      if (startTime.isValid()) {
        const scheduleItem: ScheduleItemI = {
          ...scheduleEvent,
          startTime: startTime.format('h:mm a')
        };

        const endTime = this.convertTime(scheduleEvent.endTime);
        const now = state.time;

        let isActiveEvent = false,
          isFutureEvent = false;

        if (now < endTime) {
          if (now >= startTime) {
            isActiveEvent = true;
            this.activeItem = scheduleItem;
          } else {
            isFutureEvent = true;
          }
        }

        return (
          <ScheduleItem
            key={scheduleItem.startTime + scheduleItem.title}
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
      <div className="schedule">{this.buildScheduleItems(this.state)}</div>
    );
  }
}

export default Schedule;
