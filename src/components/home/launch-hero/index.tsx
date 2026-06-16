import styles from './styles.module.css'

export const LaunchHero = () => {
  return (
    <section className={styles.hero}>
      <video autoPlay loop muted src="/video/mosaic.webm" />
      <div className={styles.container}>
        <div className={styles.contentBox}>
          <p>
            The Imagination Hackathon returns on
          </p>
          <p>
            <span>March 12-14, 2027</span>
          </p>
        </div>
      </div>
    </section>
  )
}
