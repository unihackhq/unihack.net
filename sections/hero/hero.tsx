import './hero.scss';
import Header from '../../components/header/header';
import ButtonLink from '../../components/button-link/button-link';

const Hero = () => (
  <section className="hero">
    <Header />
    <div className="hero-content">
      <div className="hero-content-title">
        <img className="hero-content-logo" src={'/static/images/unihack.svg'} />
        <h1 className="title">
          <span>UNIHACK</span> 2020
        </h1>
        <h2>
          <span>March 28-29</span>
        </h2>
      </div>
      <div className="actions">
        <ButtonLink
          type="secondary"
          href="https://www.eventbrite.com.au/e/unihack-melbourne-2020-tickets-92874212269"
        >
          Get tickets
        </ButtonLink>
        <a
          className="fb-link"
          href="https://www.facebook.com/events/874105723059342/"
        >
          View Facebook event
        </a>
      </div>
      <a
        id="mlh-trust-badge"
        href="https://mlh.io/seasons/apac-2020/events?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=black"
        target="_blank"
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-apac-black.svg"
          alt="Major League Hacking 2020 Hackathon Season"
          style={{ width: '100%' }}
        />
      </a>
    </div>
  </section>
);

export default Hero;
