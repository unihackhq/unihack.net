import './sponsor-info.scss';
import Pill from '../../components/pill/pill';

const SponsorInfo = () => (
  <section className="sponsor-info">
    <div className="sponsor-info-content">
      <h2>What is UNIHACK?</h2>
      <p className="details no-margin">When: <strong>March 16 - 17</strong></p>
      <p className="details no-margin">Where: <strong>Melbourne</strong></p>
      <p className="details">
        UNIHACK is a 24-hour hackathon with the mission to provide a creative space for engineering,
        design and product students to build innovative projects that are ready to go to market.
        Come join us in the Imagination Revolution.
      </p>
      <div className="pills">
        <Pill color="grey">
          Hacking since 2014 with <strong>five successful annual hackathons</strong>,
          UNIHACK is <strong className="yellow">Australia’s largest student hackathon</strong>.
        </Pill>
        <Pill color="blue">
          <span>40%</span>
          year-on-year participant growth
        </Pill>
        <Pill color="yellow">
          <span>35-50%</span>
          increase in sponsorship
        </Pill>
      </div>
    </div>
  </section>
);

export default SponsorInfo;
