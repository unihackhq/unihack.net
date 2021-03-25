import { ScheduleItemI } from '@components/schedule/schedule-item/schedule-item.interface';

export type Day = 'friday' | 'saturday' | 'sunday';

export type EventScheduleData = {
  [day in Day]: ScheduleItemI[];
};