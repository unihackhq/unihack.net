import './addons.scss';
import Card from '../../components/card/card';
import ButtonLink from '../../components/button-link/button-link';

const Addons = () => (
  <section className="sponsor-addons">
    <div className="sponsor-addons-content">
      <h4>Addons</h4>
      <div className="addons">
        <Card className="addon-card">
          <p><strong>Additional Mentors</strong></p>
          <span>$250</span>
        </Card>
        <Card className="addon-card">
          <p><strong>Additional Guests</strong></p>
          <span>$150</span>
        </Card>
        <Card className="addon-card">
          <p><strong>Resume and attendee lists</strong></p>
          <span>$450</span>
        </Card>
      </div>
      <div className="actions">
        <ButtonLink type="primary" href="#sponsor-prompt">Interested?</ButtonLink>
      </div>
    </div>
  </section>
);

export default Addons;
