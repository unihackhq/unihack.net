import ReactPlayer from 'react-player'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.css'

interface Props {
  videoUrl: string
  videoTitle: string
}

export const EventVideo = ({ videoUrl, videoTitle }: Props) => (
    <section>
      <h2><FontAwesomeIcon icon={faVideo} /> {videoTitle}</h2>
      <div className={styles.eventVideo}>
        <ReactPlayer src={videoUrl} width="100%" height="100%" autoPlay light />
      </div>
    </section>
)
