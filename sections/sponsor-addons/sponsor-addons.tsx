import styles from './sponsor-addons.module.scss';
import ButtonLink from '@components/button/button-link';
import { H3, Text } from '@components/typography/typography';
import Stack from '@components/stack/stack';
import { event, AnalyticsCategory } from '../../lib/gtag';

const Addons = () => (
  <section className={styles['sponsor-addons']}>
    <div className={styles['sponsor-addons-content']}>
      <Stack size="medium">
        <Stack size="xsmall">
          <H3 className={styles['addons-header']}>Addons</H3>
          <Text>
            Like the sound of a package but also want a few more perks? That’s
            cool with us. Attach some addons and experience all that UNIHACK has
            to offer.
          </Text>
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
        <div className={styles.actions}>
          <ButtonLink
            type="primary"
            theme="light"
            href="#sponsor-prompt"
            onClick={() => {
              event({
                action: 'addons_button_clicked',
                category: AnalyticsCategory.SPONSORSHIP,
                label: 'Clicked on Addons "Interested?" Button'
              });
            }}
          >
            Interested?
          </ButtonLink>
        </div>
      </Stack>
    </div>
  </section>
);

export default Addons;
