import atlassian from '@/assets/logos/atlassian-w.svg'
import aws from '@/assets/logos/aws-w.svg'
import elastic from '@/assets/logos/elastic-w.svg'
import eu from '@/assets/logos/eu-logo-horiz.svg'
import logitech from '@/assets/logos/logitech-w.svg'
import monash from '@/assets/logos/monash-w.svg'
import twilio from '@/assets/logos/twilio-w.svg'
import xero from '@/assets/logos/xero-w.svg'
import { SponsorGrid } from '@/components/sponsor-page/sponsor-grid'
import styles from './style.module.css'

const sponsorItems = [
  {
    src: atlassian,
    alt: 'Atlassian',
  },
  {
    src: xero,
    alt: 'Xero',
  },
  {
    src: elastic,
    alt: 'Elastic',
  },
  {
    src: twilio,
    alt: 'Twilio',
  },
  {
    src: aws,
    alt: 'AWS',
  },
  {
    src: logitech,
    alt: 'Logitech',
  },
  {
    src: monash,
    alt: 'Monash University',
  },
  {
    src: eu,
    alt: 'European Union',
  },
] satisfies React.ComponentProps<typeof SponsorGrid>['items']

export const SponsorPastSupportersSection = () => {
  return (
    <section className={styles.section}>
      <h2>Current and previous supporters include...</h2>
      <SponsorGrid
        className={styles.grid}
        gridItemClassName={styles.gridItem}
        items={sponsorItems}
      />
    </section>
  )
}
