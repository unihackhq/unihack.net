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
    <tr className={`schedule-item ${activeClass} ${futureClass}`}>
      <td className="schedule-item-indicator-line"/>
      <td className="schedule-item-indicator"/>
      <td className="schedule-item-time">{props.scheduleItem.startTime}</td>
      <td className="schedule-item-title">{props.scheduleItem.title}</td>
    </tr>
  );
};

export default ScheduleItem;
