import { allEvents } from '@/content/events';
import { Prize } from '@/content/events/types';

export interface PrizePage {
  main: {
    first: Prize;
    second?: Prize;
    third?: Prize;
  };
  other: Prize[];
}

export const formatDates = (startDate: Date, endDate: Date) => {
  return `${startDate.toLocaleDateString(undefined, { day: 'numeric' })} - ${endDate.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}`;
};

export const validEventIds = allEvents.map((event) => event.id ?? event.year.toString());

export const allEventsByDescendingOrder = [...allEvents].sort((a, b) => b.year - a.year);

export const getEvent = (eventId: string) => allEvents.find((event) => event.id === eventId || event.year.toString() === eventId);

export const getEventTypeString = (eventType: 'IN_PERSON' | 'VIRTUAL' | 'HYBRID') => {
  switch (eventType) {
    case 'IN_PERSON':
      return 'In-Person';
    case 'VIRTUAL':
      return 'Virtual';
    case 'HYBRID':
      return 'Hybrid';
    default:
      return 'Unknown';
  }
};

export const arrangePrizes = (prizes: Prize[]) => {
  return prizes.reduce(() => {}, {
    
  })

};