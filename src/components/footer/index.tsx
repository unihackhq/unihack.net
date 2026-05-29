import Link from 'next/link';
import { Logo } from '../logo';
import styles from './style.module.css';

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <section className={styles.grid}>
      <div className={styles.acknowledgement}>
        <div className={styles.logo}><Logo /><span>UNIHACK</span></div>
        <p>
          UNIHACK acknowledges the Traditional Custodians of Country throughout
          Australia and their connections to land, sea and community. We pay our
          respects to their elders past, present and emerging.
        </p>
      </div>
      <div className={styles.links}>
        <div>
          <h6>Navigation</h6>
          <ul>
            <li><Link prefetch={false} href="/about">About UNIHACK</Link></li>
            <li><Link prefetch={false} href="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h6>Event Info</h6>
          <ul>
            <li><Link prefetch={false} href="/faqs">FAQs</Link></li>
            <li><Link prefetch={false} href="/rules">Event Rules</Link></li>
            <li><Link prefetch={false} href="/conduct">Code of Conduct</Link></li>
          </ul>
        </div>
        <div>
          <h6>Follow Us</h6>
          <ul>
            <li><Link prefetch={false} href="https://tiktok.com/@unihackhq">TikTok</Link></li>
            <li><Link prefetch={false} href="http://instagram.com/unihack">Instagram</Link></li>
            <li><Link prefetch={false} href="https://www.linkedin.com/company/7950294">LinkedIn</Link></li>
            <li><Link prefetch={false} href="https://x.com/UNIHACKHQ/">Twitter/X</Link></li>
            <li><Link prefetch={false} href="https://www.facebook.com/UNIHACKHQ/">Facebook</Link></li>
          </ul>
        </div>
      </div>
    </section>
    <section className={styles.copyright}>
      <p>&copy; UNIHACK Incorporated. All Rights Reserved.</p>
    </section>
    </div>
  </footer>
);
