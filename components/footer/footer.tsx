import './footer.scss';

const Footer = () => (
  <section className="footer">
    <div className="footer-content">
      <div className="footer-content-col first">
        <div className="links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
        <p>Proudly made in Melbourne 🇦🇺</p>
        <p>© 2019 UNIHACK Incorporated. All rights reserved.</p>
      </div>
      <div className="footer-content-col second">
        <div className="links">
          <a href="mailto:team@unihack.net">team@unihack.net</a>
        </div>
        <p>ABN: 85 369 194 065</p>
        <p>101/6 Lord Street, Richmond, VIC 3121</p>
      </div>
    </div>
  </section>
);

export default Footer;
