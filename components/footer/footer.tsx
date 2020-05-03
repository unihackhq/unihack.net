import Link from 'next/link';
import './footer.scss';

const Footer = () => (
  <section className="footer">
    <div className="footer-content">
      <div className="footer-content-col first">
        <div className="links">
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
      <div className="footer-content-col second">
        <p>Proudly made in Melbourne 🇦🇺</p>
        <p>© 2020 UNIHACK Incorporated</p>
      </div>
    </div>
  </section>
);

export default Footer;
