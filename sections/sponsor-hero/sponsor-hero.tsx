import './sponsor-hero.scss';

const SponsorHero = () => (
  <section className="sponsor-hero" style={{backgroundImage: 'url(/static/images/sponsor-hero.jpg)'}}>
    <div className="sponsor-hero-content">
      <div className="hero-quote">
        <p className="quote">
          <strong className="highlight">
            <span className="offset">
              Blown away by the great ideas at #UNIHACK2015! Makes judging very difficult
            </span>
          </strong>
        </p>
        <p className="quote-from">- Hadi Michel (Software Engineer at Deloitte)</p>
      </div>
    </div>
  </section>
);

export default SponsorHero;
