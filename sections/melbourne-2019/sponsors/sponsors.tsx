import './sponsors.scss';
import Grid from '../../../components/grid/grid';
import sponsorData from '../../../content/2019/sponsors.json';

const Sponsors = () => {
  const venueSponsorPath = sponsorData.base + sponsorData.sponsors.venue.imagePath;
  const platinumSponsorPath = sponsorData.base + sponsorData.sponsors.platinum.imagePath;

  return (
    <section className="event-page-sponsors">
      <div className="event-page-sponsors-content">
        <h2 className="section-title">Sponsors</h2>
        <p className="subtitle">Without whom this event would not happen...</p>
        <div className="primary-companies">
          <div className="company-section">
            <h2 className="tier-title highlighted platinum">Platinum</h2>
            <img className="company-logo" src={platinumSponsorPath} alt={sponsorData.sponsors.platinum.name}/>
          </div>
          <div className="company-section">
            <h2 className="tier-title highlighted venue">Venue Sponsor</h2>
            <img className="company-logo" src={venueSponsorPath} alt={sponsorData.sponsors.venue.name}/>
          </div>
        </div>

        <h2 className="tier-title highlighted">Gold</h2>
        <Grid items={sponsorData.sponsors.gold} basePath={sponsorData.base}/>
        <h2 className="tier-title highlighted academic-gold">Academic Gold</h2>
        <Grid items={sponsorData.sponsors.academicGold} basePath={sponsorData.base}/>
        <h2 className="tier-title highlighted silver">Silver</h2>
        <Grid items={sponsorData.sponsors.silver} basePath={sponsorData.base}/>
        <h2 className="tier-title highlighted other">Other sponsors</h2>
        <Grid items={sponsorData.sponsors.other} basePath={sponsorData.base}/>
      </div>
    </section>
  );
};

export default Sponsors;
