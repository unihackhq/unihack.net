import styles from './event-schedule.module.scss';
import React from 'react';
// import moment from 'moment';
import Schedule from '@components/schedule/schedule';
import { ScheduleItemI } from '@components/schedule/schedule-item/schedule-item.interface';
import { Text } from '@components/typography/typography';
import { Day, EventScheduleData } from './event-schedule-data.model';

type PropTypes = {
  data: EventScheduleData;
};

type State = {
  allDays: Day[];
  day: Day;
  events: ScheduleItemI[];
};

class EventSchedule extends React.Component<PropTypes, State> {
  constructor(props: PropTypes) {
    super(props);
    const day = Object.keys(props.data)[0] as Day;
    this.state = {
      allDays: Object.keys(props.data) as Day[],
      day,
      events: props.data[day],
    };
  }

  // public componentDidMount() {
  //   const validDays = this.state.allDays;
  //   let day = moment().format('dddd').toLowerCase() as Day;

  //   day = validDays.includes(day) ? day : this.state.day;
  //   this.setState({
  //     day,
  //     events: this.props.data[day],
  //   });
  // }

  private setDay = (day: Day) => () => {
    this.setState({
      day,
      events: this.props.data[day],
    });
  };

  private isActive(day: Day): boolean {
    return this.state.day === day ? true : false;
  }

  private buttonText(day: Day) {
    switch (day) {
      case 'friday':
        return 'FRI';
      case 'saturday':
        return 'SAT';
      case 'sunday':
        return 'SUN';
    }
  }

  private getSelectorButtons(day: Day) {
    return (
      <button
        key={day}
        className={`${styles['day-selector']} ${
          this.isActive(day) ? styles.active : ''
        }`}
        onClick={this.setDay(day)}
      >
        {this.buttonText(day)}
      </button>
    );
  }

  public render() {
    return (
      <section className={styles['event-page-schedule']}>
        <div className={styles['day-selectors']}>
          {this.state.allDays.map((day) => this.getSelectorButtons(day))}
        </div>
        <Schedule data={this.state.events} />
        <Text> The winners will be announced on March 24.</Text>
      </section>
    );
  }
}

export default EventSchedule;
