import './privacy.scss';
import ButtonLink from '../../components/button-link/button-link';

const Privacy = () => (
  <section className="privacy">
    <div className="privacy-content">
      <h2 className="highlighted">Your Privacy</h2>
      <p>
        We are committed to respecting your privacy and safeguarding any personal information you provide us with,
        and aim to only collect information essential to the running of our hackathons.
      </p>
      <ButtonLink href="/privacy" type="secondary">View our Privacy Policy</ButtonLink>
    </div>
  </section>
);

export default Privacy;
