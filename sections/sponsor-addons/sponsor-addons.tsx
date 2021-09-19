import styles from './sponsor-addons.module.scss';
import { H3, Text } from '@components/typography/typography';
import Stack from '@components/stack/stack';

const Addons = () => (
  <section className={styles['sponsor-addons']}>
    <div className={styles['sponsor-addons-content']}>
      <Stack size="medium">
        <Stack size="xsmall">
          <H3 className={styles['addons-header']}>Want more?</H3>
        </Stack>
        <Stack size="small" className={styles.addons}>
          <div>
            <div className={styles['addon-card-content']}>
              <Text>Additional mentors</Text>
              <Text bold>$250</Text>
            </div>
          </div>
          <div>
            <div className={styles['addon-card-content']}>
              <Text>Resume and attendee lists</Text>
              <Text bold>$450</Text>
            </div>
          </div>
        </Stack>
      </Stack>
    </div>
  </section>
);

export default Addons;
