import styles from './style.module.css';

export const HomeWelcomeSection = () => {
  return (
    <section className={styles.section} id="welcome-section">
      <h2>Welcome to Australia’s biggest student hackathon</h2>
      <div className={styles.centerText}>
        <p>
          Join 500+ students for a 48-hour hybrid hackathon weekend where you
          get to learn new skills, connect with brilliant mentors, forge new
          friendships with like-minded students, and build something incredible.
        </p>
        <p>
          Everyone is welcome at UNIHACK, whether you are just getting started
          or a seasoned hacker. All you need is to be passionate about building
          stuff.
        </p>
      </div>
      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <h3>Is there a theme or prompt?</h3>
          <p>
            <strong>Officially, we do not have a theme or prompt.</strong> You
            can build whatever you want, in whatever shape that you want - a
            mobile app, a hardware piece, or even a video game. Every idea is
            eligible for the Main Prize.
          </p>
          <p>
            Some of our prizes (TBD) do have specific challenges or themes, and
            we strongly encourage you to use them to shape your idea.
          </p>
        </div>
        <div className={styles.gridItem}>
          <h3>Can I participate?</h3>
          <p>
            <strong>
              You must be 18 years or older, and studying as a university/TAFE
              student in Australia or New Zealand at the time of the event.
            </strong>
          </p>
          <p>
            If you have completed but not had your graduation ceremony, you are
            still eligible to participate.
          </p>
        </div>
      </div>
    </section>
  );
};
