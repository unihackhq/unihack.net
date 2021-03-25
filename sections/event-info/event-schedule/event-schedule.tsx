import styles from './event-schedule.module.scss';
import React from 'react';
import moment from 'moment';
import Schedule from '@components/schedule/schedule';
import { ScheduleItemI } from '@components/schedule/schedule-item/schedule-item.interface';
import { H3, HL, Text } from '@components/typography/typography';
import Stack from '@components/stack/stack';
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
      events: props.data[day]
    };
  }

  public componentDidMount() {
    const validDays = this.state.allDays;
    let day = moment()
      .format('dddd')
      .toLowerCase() as Day;

    day = validDays.includes(day) ? day : this.state.day;
    this.setState({
      day,
      events: this.props.data[day]
    });
  }

  private setDay = (day: Day) => () => {
    this.setState({
      day,
      events: this.props.data[day]
    });
  };

  private isActive(day: Day): boolean {
    return this.state.day === day ? true : false;
  }

  private titleCase(word: string) {
    return word[0].toUpperCase() + word.slice(1);
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
        <H3>{this.titleCase(day)}</H3>
      </button>
    );
  }

  public render() {
    return (
      <section className={styles['event-page-schedule']}>
        <div className={styles['event-page-schedule-content']}>
          <Stack size="xlarge">
            <Stack size="small">
              <HL className={styles['section-title']}>Schedule</HL>
              <Text className={styles.subtitle}>
                What's on now and what’s coming up later.
              </Text>
            </Stack>
            <div className={styles['schedule-main']}>
              <Stack size="small" className={styles['schedule-controller']}>
                <div className={styles['day-selectors']}>
                  {this.state.allDays.map(day => this.getSelectorButtons(day))}
                </div>
                <Schedule data={this.state.events} />
              </Stack>
            </div>
            <Text bold className={styles.subtitle}>
              Please note winners will be announced here live Sunday 14 March.
            </Text>
          </Stack>
        </div>
      </section>
    );
  }
}

export default EventSchedule;
