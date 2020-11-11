import styles from './schedule-item.module.scss';
import { ScheduleItemI } from './schedule-item.interface';

type Props = {
  scheduleItem: ScheduleItemI;
  isActive?: boolean;
  isFuture?: boolean;
};

const ScheduleItem = (props: Props) => {
  const activeClass = props.isActive ? styles.active : '';
  const futureClass = props.isFuture ? styles.future : '';

  return (
    <div className={`${styles['schedule-item']} ${activeClass} ${futureClass}`}>
      <div className={styles['schedule-item-indicator']}>
        <div
          className={`${styles['schedule-item-indicator-line']} ${styles.head}`}
        />
        <div className={styles['schedule-item-indicator-dot']} />
        <div
          className={`${styles['schedule-item-indicator-line']} ${styles.tail}`}
        />
      </div>
      <div className={styles['schedule-item-time']}>
        {props.scheduleItem.startTime}
      </div>
      <div className={styles['schedule-item-title']}>
        {props.scheduleItem.title}
      </div>
    </div>
  );
};

export default ScheduleItem;
