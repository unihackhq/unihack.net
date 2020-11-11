import styles from './prizes.module.scss';
import ButtonLink from '../../../components/button-link/button-link';
import Card from '../../../components/card/card';

const Prizes = () => {
  return (
    <section className={styles['event-page-prizes']}>
      <div className={styles['event-page-prizes-content']}>
        <h2 className={styles['section-title']}>Prizes</h2>
        <p className={styles.subtitle}>And how to win them...</p>
        <h2>Judging Criteria</h2>
        <div className={styles['criteria-grid']}>
          <Card className={styles['criteria-card']}>
            <h3>Originality</h3>
            <p>
              Is the hack more than just another generic social/mobile/web/IoT
              solution? Does it do something entirely novel, or at least take a
              fresh approach to an old problem?
            </p>
          </Card>
          <Card className={styles['criteria-card']}>
            <h3>Technical Difficulty</h3>
            <p>
              Is the hack technically interesting or difficult? Is it just some
              lipstick on an API, or were there any technical challenges to
              surmount when building it?
            </p>
          </Card>
          <Card className={styles['criteria-card']}>
            <h3>Polish and Design</h3>
            <p>
              Is the hack usable in its current state? Does it work as the
              creators say? Is the user experience smooth? Is it well designed
              for the target audience? Our judges will want to see and use your
              prototype - so make sure it works!
            </p>
          </Card>
          <Card className={styles['criteria-card']}>
            <h3>Usefulness</h3>
            <p>
              Is it something people would actually use? Does it fulfil a real
              need that the community, the broader society or the target
              audience has? You do not need to prepare a business plan, but you
              should at least identify who is your target audience.
            </p>
          </Card>
        </div>

        <h3 className={styles['devpost-prompt']}>Find out more on Devpost</h3>
        <ButtonLink href="https://unihack2019.devpost.com/" type="secondary">
          View prizes
        </ButtonLink>
      </div>
    </section>
  );
};

export default Prizes;
