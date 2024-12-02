import Link from 'next/link';
import styles from './footer.module.scss';
import { Text } from '@components/typography/typography';
import { Logo } from '@components/logo';
import Icon from '@components/icon/icon';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles['footer-acknowledgement']}>
      <Text>
        UNIHACK acknowledges the Traditional Custodians of Country throughout
        Australia and their connections to land, sea and community. We pay our
        respects to their elders past, present and emerging.
      </Text>
    </div>
    <div className={styles['footer-content']}>
      <Logo baseColor="#c0c0c0" topColor="#c0c0c0" />
      <div className={styles['footer-info']}>
        <ul>
          <li>
            <Link href="/rules">
              <a>Rules</a>
            </Link>
          </li>
          <li>
            <Link href="/conduct">
              <a>Code of Conduct</a>
            </Link>
          </li>
          <li>
            <Link href="/privacy">
              <a>Privacy Policy</a>
            </Link>
          </li>
          <li>
            <Link href="/terms">
              <a>Terms of Service</a>
            </Link>
          </li>
          <li className={styles.spacer} />
          <li>
            <Link href="/about">
              <a>About UNIHACK</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact Us</a>
            </Link>
          </li>
        </ul>
        <div className={styles.copyright}>
          <Text>© {new Date().getFullYear()} UNIHACK Incorporated</Text>
          <Text>Proudly made in Melbourne 🇦🇺</Text>
        </div>
        <div className={styles.hosting}>
          <a href="https://vercel.com/?utm_source=team_EPsCE3tmBMa6zenfP9k7v3VK&utm_campaign=oss">
            <img src="/powered-by-vercel.svg" />
          </a>
        </div>
      </div>
      <div className={styles['footer-social']}>
        <ul>
          <li>
            <a href="https://twitter.com/unihackhq">
              <Icon icon="Twitter" />
            </a>
          </li>
          <li>
            <a href="https://facebook.com/unihackhq">
              <Icon icon="Facebook" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/unihack">
              <Icon icon="Instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/unihack-inc/">
              <Icon icon="LinkedIn" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
