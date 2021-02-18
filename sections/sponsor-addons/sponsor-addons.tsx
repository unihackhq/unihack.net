import styles from './sponsor-addons.module.scss';
import ButtonLink from '@components/button/button-link';
import { H3, Text } from '@components/typography/typography';

const Addons = () => (
  <section className={styles['sponsor-addons']}>
    <div className={styles['sponsor-addons-content']}>
      <H3 className={styles['addons-header']}>Addons</H3>
      <Text>Don’t want to pick favourites? You don’t have to!<br />
       Bring additional mentors and guests to assist students and experience all that UNIHACK has to offer.</Text>
      <div className={styles.addons}>
        <div className={styles['addon-card']}>
          <Text>Additional Mentors</Text>
          <Text bold>$250</Text>
        </div>
        <div className={styles['addon-card']}>
          <Text>Resume and attendee lists</Text>
          <Text bold>$450</Text>
        </div>
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
