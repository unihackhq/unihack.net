import styles from "./style.module.css";

export const HomeSponsorUsSection = () => {
    return (
      <section className={styles.section} id="sponsor-us">
      <h2>Sponsor us</h2>
      <div className={styles.centerText}>
        <p>Our sponsors make it possible for us to bring together hundreds of emerging developers, designers, thinkers and builders.</p>
      </div>
      <div className={styles.sponsorGridWrapper}>
        <p>Past sponsors include</p>
        <div className={styles.sponsorGrid}>
          <div className={styles.sponsorGridItem}>
            <img src="/images/sponsor-us/sponsor-1.png" alt="Sponsor 1" />
          </div>
          <div className={styles.sponsorGridItem}>
            <img src="/images/sponsor-us/sponsor-2.png" alt="Sponsor 2" />
          </div>
          <div className={styles.sponsorGridItem}>
            <img src="/images/sponsor-us/sponsor-3.png" alt="Sponsor 3" />
          </div>
          <div className={styles.sponsorGridItem}>
            <img src="/images/sponsor-us/sponsor-4.png" alt="Sponsor 4" />
          </div>
        </div>
      </div>
      <div className={styles.centerText}>
        <p>Want to help support and nurture the next generation of tech talent? Shoot us an email at <strong>sponsorship@unihack.net</strong>.</p>
      </div>
    </section>

    )
}