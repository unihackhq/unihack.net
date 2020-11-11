import styles from './previous-sponsors.module.scss';
import Grid from '../../components/grid/grid';
import pastSponsors from '../../content/past-sponsors.json';

const PreviousSponsors = () => (
  <section className={styles['previous-sponsors']}>
    <div className={styles['previous-sponsors-content']}>
      <h2>Previous Sponsors</h2>
      <Grid items={pastSponsors.sponsors} basePath={pastSponsors.base} />
      <p>... and many more</p>
    </div>
  </section>
);

export default PreviousSponsors;
