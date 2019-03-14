import './schedule-item.scss';
import { ScheduleItemI } from './schedule-item.interface';

type Props = {
  scheduleItem: ScheduleItemI;
  isActive?: boolean;
  isFuture?: boolean;
};

const ScheduleItem = (props: Props) => {
  const activeClass = props.isActive ? 'active' : '';
  const futureClass = props.isFuture ? 'future' : '';

  return (
    <div className={`schedule-item ${activeClass} ${futureClass}`}>
      <div className="schedule-item-indicator">
        <div className="schedule-item-indicator-line head"/>
        <div className="schedule-item-indicator-dot"/>
        <div className="schedule-item-indicator-line tail"/>
      </div>
      <div className="schedule-item-time">{props.scheduleItem.startTime}</div>
      <div className="schedule-item-title">{props.scheduleItem.title}</div>
    </div>
  );
};

export default ScheduleItem;
