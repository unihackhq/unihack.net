import { JudgeGroup } from '@sections/event-info/judges/judge-group.model';
import { PrizeData } from '@sections/event-info/prizes/prize-data.model';
import { SponsorData } from '@sections/event-info/sponsors/sponsor-data.model';
import { EventScheduleData } from '@sections/event-info/event-schedule/event-schedule-data.model';
import { EventInfo } from '@sections/event-info/event-hero/event-hero';
import { StatType } from '@components/stats-banner/stat/stat';
import { WinnerModel } from '@components/winner/winner.model';

export type EventContent = {
    judges: {
      judges: JudgeGroup[];
    };
    prizes: {
      prizes: PrizeData;
    };
    schedule: EventScheduleData;
    sponsors: SponsorData;
    stats: StatType[];
    info: EventInfo;
    winners: WinnerModel[];
  };
  
export type PastEvents = {
    [event: string]: EventInfo
}