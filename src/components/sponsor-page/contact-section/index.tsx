import { Button } from '@/components/button'
import styles from './style.module.css'

export const SponsorContactSection = () => {
  return (
    <section className={styles.contact}>
      <div>
        <p>Want to help support and nurture the next generation of tech talent?</p>
        <p>
          Download our prospectus, and shoot us an email at{' '}
          <strong>sponsorship@unihack.net</strong>.
        </p>
        <Button
          href="./files/unihack-2027-sponsorship-prospectus.pdf"
          text="Sponsorship Prospectus"
        />
        <Button href="mailto:sponsorship@unihack.net" text="Email us" />
      </div>
    </section>
  )
}
