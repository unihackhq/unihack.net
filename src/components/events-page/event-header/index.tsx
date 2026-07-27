import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import styles from './styles.module.css'
import { EventBrandingBackground } from '@/types/event'

export const DefaultEventHeader = ({ eventName }: { eventName: string }) => {
    return (
                <header className={styles.default}>
          <ul className={styles.breadcrumbs}>
            <li>
              <Link href="/events" prefetch={false}>
                <FontAwesomeIcon icon={faArrowLeft} />
                Past Events
              </Link>
            </li>
          </ul>
          <h1>{eventName}</h1>
        </header>
    )
}

export const BrandedEventHeader = ({ eventName, background }: { eventName: string, background: EventBrandingBackground }) => {
  return (
    <header className={styles.branded}>
      <div className={styles.overlay}>
        <Image
          alt={background.altText}
          fill={true}
          placeholder="blur"
          src={background.image}
          className={background.position ? styles[`img-${background.position}`] : ''}
        />
      </div>
      <div className={styles.content}>
                  <ul className={styles.breadcrumbs}>
            <li>
              <Link href="/events" prefetch={false}>
                <FontAwesomeIcon icon={faArrowLeft} />
                Past Events
              </Link>
            </li>
          </ul>
        <h1>{eventName}</h1>
      </div>
    </header>
  )
}
