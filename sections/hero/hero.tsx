import './hero.scss';
import Header from '../../components/header/header';
import Button from '../../components/button/button';

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
      <Button type="secondary">Interested?</Button>
    </div>
  </section>
);

export default Hero;
