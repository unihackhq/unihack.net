import styles from './schedule-item.module.scss';
import { ScheduleItemI } from './schedule-item.interface';
import { Text } from '@components/typography/typography';

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
      <div className={styles['schedule-item-indicator-dot']} />
      <Text bold className={styles['schedule-item-time']}>
        {props.scheduleItem.startTime}
      </Text>
      <Text className={styles['schedule-item-title']}>
        {props.scheduleItem.title}
      </Text>
    </div>
  );
};

export default ScheduleItem;
