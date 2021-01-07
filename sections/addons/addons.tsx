import styles from './addons.module.scss';
import Card from '@components/card/card';
import ButtonLink from '@components/button-link/button-link';
import { H3 } from '@components/typography/typography';

const Addons = () => (
  <section className={styles['sponsor-addons']}>
    <div className={styles['sponsor-addons-content']}>
      <H3>Addons</H3>
      <div className={styles.addons}>
        <Card className={styles['addon-card']}>
          <p>Additional Mentors</p>
          <span>$250</span>
        </Card>
        <Card className={styles['addon-card']}>
          <p>Additional Guests</p>
          <span>$150</span>
        </Card>
        <Card className={styles['addon-card']}>
          <p>Resume and attendee lists</p>
          <span>$450</span>
        </Card>
      </div>
      <div className={styles.actions}>
        <ButtonLink type="secondary" href="#sponsor-prompt">
          Interested?
        </ButtonLink>
      </div>
    </div>
  </section>
);

export default Addons;
