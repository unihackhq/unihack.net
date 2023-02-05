import ButtonLink from '@components/button/button-link';
import { H2 } from '@components/typography/typography';
import styles from './event-checklist.module.scss';

const EventChecklist = () => {
  return (
    <section className={styles['event-checklist']}>
      <H2>Checklist</H2>
      <ul>
        <li>
          <div className={styles['checklist-content']}>
            <h3>Register yourself and your team!</h3>
            <p>So we know you (and your friends) are competing!</p>
          </div>
          <ButtonLink
            type="primary"
            theme="light"
            href="https://manage.unihack.net"
          >
            Register
          </ButtonLink>
        </li>
        <li>
          <div className={styles['checklist-content']}>
            <h3>Read the Participants Handbook!</h3>
            <p>
              Find out everything you need to know about the competition here!
            </p>
          </div>
          <ButtonLink type="primary" theme="light" href="#">
            TBA
          </ButtonLink>
        </li>
        <li>
          <div className={styles['checklist-content']}>
            <h3>Submit your entry on Devpost!</h3>
            <p>Here is where you'll submit your entries for UNIHACK 2022!</p>
          </div>
          <ButtonLink
            type="primary"
            theme="light"
            href="https://unihack2022.devpost.com"
          >
            Devpost
          </ButtonLink>
        </li>
      </ul>
    </section>
  );
};

export default EventChecklist;
