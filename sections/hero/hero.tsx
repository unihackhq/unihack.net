import './hero.scss';
import Header from '../../components/header/header';
import ButtonLink from '../../components/button-link/button-link';

const Hero = () => (
  <section className="hero">
    <Header />
    <div className="hero-content">
      <div className="hero-content-title">
        <h1 className="title">
          <span>UNIHACK</span>
          <span className="thin">2020</span>
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
    </div>
  </section>
);

export default Hero;
