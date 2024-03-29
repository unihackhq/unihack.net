import styles from './event-hero.module.scss';
import Stack from '@components/stack/stack';
import React from 'react';
import { PageNavigation } from '@components/page-navigation/page-navigation';
import { IconLabel } from '@components/icon-label/icon-label';
import { StatsBanner } from '@components/stats-banner/stats-banner';
import { StatType } from '@components/stats-banner/stat/stat';

export type EventInfo = {
  date: string;
  location: string;
  devpostUrl: string;
  redirectToDevpost: boolean;
  title: string;
  coverImage: string;
  eventImage?: string;
  tags: string[];
  hidden?: boolean;
};

type Props = {
  event: string;
  eventImage: string;
  stats: StatType[];
  info: EventInfo;
};

const EventHero = ({ stats, event, eventImage, info }: Props) => (
  <section className={styles.hero}>
    <Stack size="xxlarge">
      <div className={styles['hero-header']}>
        <Stack size="medium" className={styles['hero-header-info']}>
          <PageNavigation
            backLinkTitle="Events"
            backLinkHref="/events"
            ignoreMargin
          >
            <div>
              UNIHACK
              <div>
                <span className={styles.salmon}>{event[0]}</span>
                <span className={styles.midori}>{event[1]}</span>
                <span className={styles.pacific}>{event[2]}</span>
                <span className={styles.yellow}>{event[3]}</span>
              </div>
            </div>
          </PageNavigation>
          <IconLabel icon="Calendar">{info.date}</IconLabel>
          <IconLabel icon="Location">{info.location}</IconLabel>
        </Stack>
        <div className={styles['hero-header-graphic']}>
          <img src={`/images/${eventImage}`} alt={`UNIHACK ${event} graphic`} />
        </div>
      </div>
      <StatsBanner stats={stats} />
    </Stack>
  </section>
);

export default EventHero;
