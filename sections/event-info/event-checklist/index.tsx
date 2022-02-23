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
            <h3>Register your team!</h3>
            <p>So we know you (and your friends) are competing!</p>
            <p>
              Only one person from your team needs to register your team on
              behalf of everyone.
            </p>
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
            <h3>Join the Discord!</h3>
            <p>
              Where you'll find mentors, more friends, and raffles for days.
            </p>
          </div>
          <ButtonLink
            type="primary"
            theme="light"
            href="https://discord.gg/c5WkvETkj8"
          >
            Discord
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
