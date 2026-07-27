import styles from './styles.module.css'
import { EventDefinition } from '@/types/event'


export const EventFooter = ({ event }: { event: EventDefinition }) => {

  const hasEventBackground = !!event.branding?.background

  return (
    <section className={styles.footer}>
      {hasEventBackground && <p><strong className="uppercase">Background Image Credits:</strong> {event.branding?.background?.credit}</p> }
    </section>
  )
}
