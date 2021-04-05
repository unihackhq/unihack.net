import Link from 'next/link';
import styles from './footer.module.scss';
import { Text } from '@components/typography/typography';

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
        <Text>Proudly made in Melbourne 🇦🇺</Text>
        <Text>© 2021 UNIHACK Incorporated</Text>
      </div>
    </div>
  </section>
);

export default Footer;
