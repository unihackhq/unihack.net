import styles from './privacy.module.scss';
import ButtonLink from '../../components/button-link/button-link';

const Privacy = () => (
  <section className={styles.privacy}>
    <div className={styles['privacy-content']}>
      <h2 className={styles.highlighted}>Your Privacy</h2>
      <p>
        We are committed to respecting your privacy and safeguarding any
        personal information you provide us with, and aim to only collect
        information essential to the running of our hackathons.
      </p>
      <ButtonLink href="/privacy" type="secondary">
        View our Privacy Policy
      </ButtonLink>
    </div>
  </section>
);

export default Privacy;
