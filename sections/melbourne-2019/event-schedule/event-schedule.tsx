import './event-schedule.scss';
import React from 'react';
import Schedule from '../../../components/schedule/schedule';
import scheduleData from '../../../static/content/2019/schedule.json';
import { ScheduleItemI } from '../../../components/schedule/schedule-item/schedule-item.interface';

type Day = 'saturday' | 'sunday';
type Props = {};
type State = {
  day: Day,
  events: ScheduleItemI[]
};

class EventSchedule extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      day: 'saturday',
      events: scheduleData.saturday
    };
  }

  private setDay = (day: Day) => () => {
    this.setState({
      day,
      events: scheduleData[day]
    });
  }

  private isActive(day: Day): boolean {
    return this.state.day === day ? true : false;
  }

  private titleCase(word: string) {
    return word[0].toUpperCase() + word.slice(1);
  }

  private getSelectorButtons(day: Day) {
    return (
      <button className={`day-selector ${this.isActive(day) ? 'active' : ''}`} onClick={this.setDay(day)}>
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
              <Schedule data={this.state.events}/>
            </div>
            <div className="schedule-map">
              <img src="/static/images/2019/venue-map.png"/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default EventSchedule;
