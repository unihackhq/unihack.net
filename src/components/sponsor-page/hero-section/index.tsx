import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import bg from '@/app/sponsor/sponsor-unihack-bg.jpg'
import styles from './styles.module.css'

export const SponsorHeroSection = () => {
  return (
    <header className={styles.header}>
      <div className={styles.overlay}>
        <Image
          alt="Students looking at stickers"
          fill={true}
          placeholder="blur"
          src={bg}
        />
      </div>
      <div className={styles.content}>
        <h1>Sponsor UNIHACK 2027</h1>
        <p>Help us support the next generation of tech talent.</p>
        <p className={styles.date}>
          <FontAwesomeIcon icon={faCalendar} />
          March 12-14, 2027
        </p>
        <p className={styles.credit}>
          <strong>Image Credit:</strong> European Union/Melissa Hobbs
        </p>
      </div>
    </header>
  )
}
