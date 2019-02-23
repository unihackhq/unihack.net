import './sponsor-prompt.scss';
import ButtonLink from '../../components/button-link/button-link';

const SponsorPrompt = () => (
  <section className="sponsor-prompt" id="sponsor-prompt">
    <div className="sponsor-prompt-content">
      <h2>Interested?</h2>
      <h3>Contact us for more information</h3>
      <p>
        We are happy to discuss customisations according to your needs.
        Send us an email to
        <a href="mailto:sponsorship@melbourne.unihack.net"> sponsorship@melbourne.unihack.net </a>
        and we’ll follow-up within 24 hours.
      </p>
      <p>
        For more information on the available tiers and addons, please download our prospectus below.
      </p>
      <div className="actions">
        <ButtonLink type="primary" href="mailto:sponsorship@melbourne.unihack.net?subject=General Sponsorship Enquiry">
          Enquire now
        </ButtonLink>
        <ButtonLink type="primary" href="https://drive.google.com/file/d/1nRRYqNRZXJKqKT53uielDA4pC_14DA9W/view" target="_blank">
          Download prospectus
        </ButtonLink>
      </div>
    </div>
  </section>
);

export default SponsorPrompt;
