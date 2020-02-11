import './hero.scss';
import Header from '../../components/header/header';

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
    </div>
  </section>
);

export default Hero;
