import './sponsorship-hero.scss';

const SponsorshipHero = () => (
  <section className="sponsorship-hero" style={{backgroundImage: 'url(/static/images/sponsorship-hero.jpg)'}}>
    <div className="sponsorship-hero-content">
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

export default SponsorshipHero;
