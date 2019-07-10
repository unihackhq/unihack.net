import './addons.scss';
import Card from '../../components/card/card';
import ButtonLink from '../../components/button-link/button-link';

const Addons = () => (
  <section className="sponsor-addons">
    <div className="sponsor-addons-content">
      <h3>Addons</h3>
      <div className="addons">
        <Card className="addon-card">
          <p>Additional Mentors</p>
          <span>$250</span>
        </Card>
        <Card className="addon-card">
          <p>Additional Guests</p>
          <span>$150</span>
        </Card>
        <Card className="addon-card">
          <p>Resume and attendee lists</p>
          <span>$450</span>
        </Card>
      </div>
      <div className="actions">
        <ButtonLink type="secondary" href="#sponsor-prompt">Interested?</ButtonLink>
      </div>
    </div>
  </section>
);

export default Addons;
