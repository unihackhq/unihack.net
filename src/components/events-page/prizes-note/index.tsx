import { PrizeNote } from "@/content/events/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './styles.module.css'
import classnames from 'classnames/bind';
import { faCircleInfo, faWarning, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const cx = classnames.bind(styles);

interface Props {
    note: PrizeNote;
}

export const getIcon = (note: PrizeNote) => {
    if (note.type === 'WARNING') return faWarning;
    if (note.type === 'ERROR') return faCircleXmark;
    return faCircleInfo;
}

export const PrizeNoteComponent = ({note}: Props) => {

    return (
        <div className={cx('info', note.type.toLowerCase())}>
          <FontAwesomeIcon icon={getIcon(note)} />
          <div>
            {note.text.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
    );
}