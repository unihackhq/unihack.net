import React from 'react';
import styles from './sponsors.module.scss';
import {
  SPONSOR_TIER_ORDER,
  SponsorData,
  SponsorTier,
} from './sponsor-data.model';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const defaultTitles: Record<SponsorTier, string> = {
  bronze: 'Bronze Sponsors',
  diamond: 'Diamond Sponsor',
  platinum: 'Platinum Sponsor',
  gold: 'Gold Sponsors',
  silver: 'Silver Sponsors',
  other: 'Partners',
};

type PropTypes = {
  data: SponsorData;
  title?: string;
  className?: string;
  isHomepage?: boolean;
};

export const Sponsors = ({ data: { sponsors, titles, base } }: PropTypes) => {
  return (
    <section className={cx('event-page-sponsors')}>
      <h2>Sponsors</h2>
      {SPONSOR_TIER_ORDER.map((tier) => {
        const sponsorData = sponsors[tier];
        if (sponsorData === undefined || sponsorData.length === 0) {
          return null;
        }
        const isSolo = sponsorData.length === 1;
        return (
          <div className={cx('sponsor-row', tier, { isSolo })} key={tier}>
            <h3>{titles?.[tier] ?? defaultTitles[tier]}</h3>
            <ul className={cx('sponsor-row-logos')}>
              {sponsorData.map((sponsor) => {
                return (
                  <li className={cx('company-logo')}>
                    <img
                      key={sponsor.name}
                      src={base + sponsor.imagePath}
                      alt={sponsor.name}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default Sponsors;
