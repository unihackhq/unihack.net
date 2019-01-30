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
          <span className="thin">2019</span>
        </h1>
        <h2>March 16-17</h2>
      </div>
      <ButtonLink href="https://www.facebook.com/events/742383822828074" type="secondary">Check out our event</ButtonLink>
    </div>
  </section>
);

export default Hero;
