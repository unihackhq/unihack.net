export const GA_TRACKING_ID = 'UA-206861683-1';

declare global {
  interface Window {
    gtag: any;
    gaTrackingId: any;
  }
}

export enum AnalyticsCategory {
  SPONSORSHIP = 'SPONSORSHIP',
  EVENT = 'EVENT'
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value
}: {
  action: string;
  category: AnalyticsCategory;
  label: string;
  value?: string;
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value
  });
};
