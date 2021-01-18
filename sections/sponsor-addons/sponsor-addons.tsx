import styles from './sponsor-addons.module.scss';
import Card from '@components/card/card';
import ButtonLink from '@components/button-link/button-link';
import { H3, Text } from '@components/typography/typography';

const Addons = () => (
  <section className={styles['sponsor-addons']}>
    <div className={styles['sponsor-addons-content']}>
      <H3 className={styles['addons-header']}>Addons</H3>
      <Text>Don’t want to pick favourites? You don’t have to!<br />
       Bring additional mentors and guests to assist students and experience all that UNIHACK has to offer.</Text>
      <div className={styles.addons}>
        <Card className={styles['addon-card']}>
          <Text>Additional Mentors</Text>
          <span className={styles['right-text']}> <Text bold>$250</Text></span>
        </Card>
        <Card className={styles['addon-card']}>
          <Text>Resume and attendee lists</Text>
          <span className={styles['right-text']}><Text bold>$450</Text></span>
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
