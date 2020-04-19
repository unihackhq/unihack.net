import './event-schedule.scss';
import React from 'react';
import moment from 'moment';
import Schedule from '../../../components/schedule/schedule';
import scheduleData from '../../../content/2019/schedule.json';
import { ScheduleItemI } from '../../../components/schedule/schedule-item/schedule-item.interface';

type Day = 'saturday' | 'sunday';
type Props = {};
type State = {
  day: Day;
  events: ScheduleItemI[];
};

class EventSchedule extends React.Component<Props, State> {
  private defaultDay: Day = 'saturday';

  constructor(props: Props) {
    super(props);

    const day = this.defaultDay;
    this.state = {
      day,
      events: scheduleData[day]
    };
  }

  public componentDidMount() {
    const validDays = Object.keys(scheduleData);
    let day = moment()
      .format('dddd')
      .toLowerCase() as Day;

    day = validDays.includes(day) ? day : this.defaultDay;
    this.setState({
      day,
      events: scheduleData[day]
    });
  }

  private setDay = (day: Day) => () => {
    this.setState({
      day,
      events: scheduleData[day]
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
        className={`day-selector ${this.isActive(day) ? 'active' : ''}`}
        onClick={this.setDay(day)}
      >
        <h3>{this.titleCase(day)}</h3>
      </button>
    );
  }

  public render() {
    return (
      <section className="event-page-schedule">
        <div className="event-page-schedule-content">
          <h2 className="section-title">Schedule</h2>
          <p className="subtitle">What, when, and where...</p>
          <div className="schedule-main">
            <div className="schedule-controller">
              <div className="day-selectors">
                {this.getSelectorButtons('saturday')}
                {this.getSelectorButtons('sunday')}
              </div>
              <Schedule data={this.state.events} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default EventSchedule;
