import { SponsorContactSection } from '@/components/sponsor-page/contact-section'
import { SponsorHeroSection } from '@/components/sponsor-page/hero-section'
import { SponsorNumbersSection } from '@/components/sponsor-page/numbers-section'
import { SponsorPastSupportersSection } from '@/components/sponsor-page/past-supporters-section'
import { SponsorWelcomeSection } from '@/components/sponsor-page/welcome-section'
import { SponsorReasonsWhy } from '../../components/sponsor-page/reasons-why'
import type { Metadata } from 'next'
import { BlockQuote } from '@/components/quote'
import elastic from '@/assets/logos/elastic-w.svg'
import styles from './styles.module.css'

export const metadata: Metadata = {
  title: 'Sponsor UNIHACK 2027',
}

export default function SponsorUsPage() {
  return (
    <>
      <SponsorHeroSection />
      <div className={styles.content}>
        <SponsorWelcomeSection />

        <BlockQuote
          image={elastic}
          imageAlt="Elastic"
          quote="The skills they displayed at UNIHACK 2026 are exactly what the industry needs, and I am confident they will have a significant impact on our work environment in the years to come."
          link={{
            href: 'https://www.elastic.co/blog/unihack-2026',
            text: 'Read how Elastic supported participants by providing mentorship and resources; and witnessed how students pushed the boundaries of what their tech could do...',
          }}
        />

        <SponsorNumbersSection />

        <SponsorReasonsWhy />

        <SponsorPastSupportersSection />
      </div>
      <SponsorContactSection />
    </>
  )
}
