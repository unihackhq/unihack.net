import path from "path";
import { promises as fs } from 'fs';
import { EventInfo } from "@sections/event-info/event-hero/event-hero";

import { JudgeGroup } from '@sections/event-info/judges/judge-group.model';
import { PrizeData } from '@sections/event-info/prizes/prize-data.model';
import { SponsorData } from '@sections/event-info/sponsors/sponsor-data.model';
import { EventScheduleData } from '@sections/event-info/event-schedule/event-schedule-data.model';
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

export const getEventsList = async () => {
    const eventsDirectory = path.join(process.cwd(), 'content/events');

    /**
     * We are filtering out all hidden files from the list of folders.
     * These often are have a dot before them.
     */
    const events = (await fs.readdir(eventsDirectory))
        .filter(item => !/(^|\/)\.[^/.]/g.test(item));
  
    return events
}

export const getFilesFromEvent = async (event: string) => {
    const directory = path.join(
        process.cwd(),
        `content/events/${event}`
    );

    const filenames = await fs.readdir(directory);

    const promises = filenames.map(async (filename) => {
        const filePath = path.join(directory, filename);
        const fileContents = await fs.readFile(filePath, 'utf8');
        
        /**
         * Return an array where, when remapped as an object:
         * [0] is the key
         * [1] is the value
         */
        return [path.parse(filename).name, JSON.parse(fileContents)]
    });

    const content = Object.fromEntries(await Promise.all(promises)) as EventContent;

    return content
}

export const getPastEventInfo = async () => {
    const directories = await getEventsList()

    const promises = directories.map(async event => {
        const file = `${path.join(process.cwd(), `content/events/${event}/`)}/info.json`
        const info = JSON.parse(await fs.readFile(file, 'utf8'))
        return [event, info] as [string, EventInfo]
    })

    const events = (await Promise.all(promises)).filter((value) => {
        return !value[1].hidden ?? true
    })

    return Object.fromEntries(events)
}