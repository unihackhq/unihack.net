import styles from './prizes.module.scss';
import ButtonLink from '../../../components/button/button-link';
import Card from '../../../components/card/card';
import { H2, H3, Text } from '@components/typography/typography';

const Prizes = () => {
  return (
    <section className={styles['event-page-prizes']}>
      <div className={styles['event-page-prizes-content']}>
        <H2 className={styles['section-title']}>Prizes</H2>
        <Text>And how to win them...</Text>
        <H2>Judging Criteria</H2>
        <div className={styles['criteria-grid']}>
          <Card className={styles['criteria-card']}>
            <H3>Originality</H3>
            <Text>
              Is the hack more than just another generic social/mobile/web/IoT
              solution? Does it do something entirely novel, or at least take a
              fresh approach to an old problem?
            </Text>
          </Card>
          <Card className={styles['criteria-card']}>
            <H3>Technical Difficulty</H3>
            <Text>
              Is the hack technically interesting or difficult? Is it just some
              lipstick on an API, or were there any technical challenges to
              surmount when building it?
            </Text>
          </Card>
          <Card className={styles['criteria-card']}>
            <H3>Polish and Design</H3>
            <Text>
              Is the hack usable in its current state? Does it work as the
              creators say? Is the user experience smooth? Is it well designed
              for the target audience? Our judges will want to see and use your
              prototype - so make sure it works!
            </Text>
          </Card>
          <Card className={styles['criteria-card']}>
            <H3>Usefulness</H3>
            <Text>
              Is it something people would actually use? Does it fulfil a real
              need that the community, the broader society or the target
              audience has? You do not need to prepare a business plan, but you
              should at least identify who is your target audience.
            </Text>
          </Card>
        </div>

        <H3 className={styles['devpost-prompt']}>Find out more on Devpost</H3>
        <ButtonLink href="https://unihack2019.devpost.com/" type="secondary">
          View prizes
        </ButtonLink>
      </div>
    </section>
  );
};

export default Prizes;
