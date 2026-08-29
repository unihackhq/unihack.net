import styles from './styles.module.css'

const sponsorStats = [
  {
    value: '1010',
    label: 'students participating',
  },
  {
    value: '183',
    label: 'projects submitted',
  },
  {
    value: '23+',
    label: 'universities represented',
  },
  {
    value: '26%',
    label: 'women or non-binary students',
  },
  {
    value: '63%',
    label: 'in their final year of study',
  },
  {
    value: '80%',
    label: 'participating for the first time',
  },
]

export const SponsorNumbersSection = () => {
  return (
    <section className={styles.section}>
      <h2>2026 in numbers...</h2>
      <div className={styles.stats}>
        {sponsorStats.map(({ value, label }) => {
          return (
            <div className={styles.stat} key={`${value}-${label}`}>
              <p>
                <span>{value}</span> {label}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
