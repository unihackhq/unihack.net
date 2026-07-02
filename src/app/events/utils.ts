import { allEvents } from '@/content/events';
import { isMainPrize, Prize } from '@/content/events/types';

const dateTimeFormat = new Intl.DateTimeFormat("en", { year: 'numeric', month: 'long', day: 'numeric' });

export interface PagePrizes {
  main: {
    first: Prize | null;
    second?: Prize;
    third?: Prize;
  };
  other: Prize[];
}

export const formatDates = (startDate: Date, endDate: Date) => {
  return dateTimeFormat.formatRange(startDate, endDate);
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

export const arrangePrizes = (prizes: Prize[]): PagePrizes => {
  return prizes.reduce<PagePrizes>((acc, prize) => {
    if (isMainPrize(prize)) {
      switch(prize.place) {
        case 'FIRST':
          acc.main.first = prize;
          break;
        case 'SECOND':
          acc.main.second = prize;
          break;
        case 'THIRD':
          acc.main.third = prize;
          break;
        default:
          acc.other.push(prize);
      }
    } else {
      acc.other.push(prize);
    }
    return acc;
  }, {
    main: { first: null },
    other: []
  });

};