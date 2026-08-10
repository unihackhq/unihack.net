import { PrizeComponent } from '@/components/events-page/prize'
import { EventNote } from '@/components/events-page/event-note'
import { arrangePrizes } from '@/app/events/utils'
import type { Prize, PrizeNote } from '@/types/event'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'

interface Props {
  prizes: Prize[]
  prizesNote?: PrizeNote
}

export const EventWinners = ({ prizes, prizesNote }: Props) => {
  const { main, other } = arrangePrizes(prizes)

  return (
    <section>
      <h2><FontAwesomeIcon icon={faTrophy} /> Winners</h2>
      {prizesNote && <EventNote note={prizesNote} />}
      <div className={styles.mainGrid}>
        {main.first && (
          <PrizeComponent prize={main.first} key={main.first.name} />
        )}
        {main.second && (
          <PrizeComponent prize={main.second} key={main.second.name} />
        )}
        {main.third && (
          <PrizeComponent prize={main.third} key={main.third.name} />
        )}
      </div>
      <div className={styles.prizeGrid}>
        {other.map((prize) => (
          <PrizeComponent prize={prize} key={prize.name} />
        ))}
      </div>
    </section>
  )
}
