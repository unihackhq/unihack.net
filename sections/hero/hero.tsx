import './hero.scss';
import Header from '../../components/header/header';
import ButtonLink from '../../components/button-link/button-link';

const Hero = () => (
  <section className="hero">
    <Header/>
    <div className="hero-content">
      <div className="hero-content-title">
        <h1 className="title">
          <span>UNIHACK</span>
          <span className="thin">2020</span>
        </h1>
        <h2>
          <span>March 14-15</span>
        </h2>
      </div>
      <div className="actions">
        <ButtonLink href="https://www.facebook.com/events/742383822828074" type="secondary">Check out our event</ButtonLink>
        <ButtonLink href="https://unihack2019.devpost.com/" type="secondary">Devpost</ButtonLink>
      </div>
    </div>
  </section>
);

export default Hero;
