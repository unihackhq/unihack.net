import styles from "./style.module.css";

export const HomeWelcomeSection = () => {
    return (
        <section className={styles.section} id="welcome-section">
        <h2>Welcome to Australia’s biggest student hackathon</h2>
        <div className={styles.centerText}>
          <p>Join 500+ students for a 48-hour hybrid hackathon weekend where you get to learn new skills, connect with brilliant mentors, forge new friendships with like-minded students, and build something incredible.</p>
          <p>Everyone is welcome at UNIHACK, whether you are just getting started or a seasoned hacker. All you need is to be passionate about building stuff.</p>
        </div>
      </section>  
    )
}