import './previous-sponsors.scss';
import Grid from '../../components/grid/grid';
import pastSponsors from '../../content/past-sponsors.json';

const PreviousSponsors = () => (
  <section className="previous-sponsors">
    <div className="previous-sponsors-content">
      <h3>Previous Sponsors</h3>
      <Grid items={pastSponsors.sponsors} basePath={pastSponsors.base}/>
      <p>... and many more</p>
    </div>
  </section>
);

export default PreviousSponsors;
