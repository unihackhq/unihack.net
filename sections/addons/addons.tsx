import styles from './addons.module.scss';
import Card from '@components/card/card';
import ButtonLink from '@components/button-link/button-link';
import { H3, Text } from '@components/typography/typography';

const Addons = () => (
  <section className={styles['sponsor-addons']}>
    <div className={styles['sponsor-addons-content']}>
      <H3>Addons</H3>
      <div className={styles.addons}>
        <Card className={styles['addon-card']}>
          <Text>Additional Mentors</Text>
          <Text bold>$250</Text>
        </Card>
        <Card className={styles['addon-card']}>
          <Text>Additional Guests</Text>
          <Text bold>$150</Text>
        </Card>
        <Card className={styles['addon-card']}>
          <Text>Resume and attendee lists</Text>
          <Text bold>$450</Text>
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
