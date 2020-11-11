import Link from 'next/link';
import styles from './footer.module.scss';

const Footer = () => (
  <section className={styles.footer}>
    <div className={styles['footer-content']}>
      <div className={`${styles['footer-content-col']} ${styles.first}`}>
        <div className={styles.links}>
          <Link href="/privacy">
            <a>Privacy Policy</a>
          </Link>
          <Link href="/terms">
            <a>Terms of Service</a>
          </Link>
          <a href="mailto:team@unihack.net?subject=General Enquiry">
            Contact Us
          </a>
        </div>
      </div>
      <div className={`${styles['footer-content-col']} ${styles.second}`}>
        <p>Proudly made in Melbourne 🇦🇺</p>
        <p>© 2020 UNIHACK Incorporated</p>
      </div>
    </div>
  </section>
);

export default Footer;
