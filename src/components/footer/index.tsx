import Link from 'next/link'
import { Logo } from '../logo'
import styles from './style.module.css'

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <section className={styles.grid}>
        <div className={styles.acknowledgement}>
          <div className={styles.logo}>
            <Logo />
            <span>UNIHACK</span>
          </div>
          <p>
            UNIHACK acknowledges the Traditional Custodians of Country
            throughout Australia and their connections to land, sea and
            community. We pay our respects to their elders past, present and
            emerging.
          </p>
        </div>
        <div className={styles.links}>
          <div>
            <h6>Navigation</h6>
            <ul>
              <li>
                <Link href="/about" prefetch={false}>
                  About UNIHACK
                </Link>
              </li>
              <li>
                <Link href="/privacy" prefetch={false}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6>Event Info</h6>
            <ul>
              <li>
                <Link href="/faqs" prefetch={false}>
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/rules" prefetch={false}>
                  Event Rules
                </Link>
              </li>
              <li>
                <Link href="/conduct" prefetch={false}>
                  Code of Conduct
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6>Follow Us</h6>
            <ul>
              <li>
                <Link href="https://tiktok.com/@unihackhq" prefetch={false}>
                  TikTok
                </Link>
              </li>
              <li>
                <Link href="http://instagram.com/unihack" prefetch={false}>
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/7950294"
                  prefetch={false}
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://x.com/UNIHACKHQ/" prefetch={false}>
                  Twitter/X
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/UNIHACKHQ/"
                  prefetch={false}
                >
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.copyright}>
        <p>&copy; UNIHACK Incorporated. All Rights Reserved.</p>
      </section>
    </div>
  </footer>
)
