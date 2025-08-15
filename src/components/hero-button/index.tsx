import styles from "./styles.module.css"
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
    href: string;
    text: string;
}

export const HeroButton: React.FC<Props> = ({ href, text })=> {
    return (
        <a className={styles.button} href={href}>
            {text}
            <FontAwesomeIcon icon={faChevronRight} />
        </a>
    )
}