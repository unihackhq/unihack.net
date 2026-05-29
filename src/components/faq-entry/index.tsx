"use client"

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import styles from './style.module.css';

interface Props {
    id: string;
    title: string;
    content: React.ReactNode;
    isAlreadyExpanded?: boolean;
}

export const FaqEntry: React.FC<Props> = ({ id, title, content, isAlreadyExpanded }) => {
    const [expanded, setExpand] = useState(isAlreadyExpanded); 
    const onClick = () => setExpand(prev => !prev);

    return (
        <div className={styles.entry} data-exapnded={expanded}>
            <button onClick={onClick} aria-expanded={expanded} aria-controls={id}>
                {title}
                <FontAwesomeIcon 
                    className={styles.icon} 
                    icon={expanded ? faMinus : faPlus}
                    aria-hidden="true"
                    aria-label={expanded ? 'Close' : 'Expand'}
                    focusable="false"
                />
            </button>
            <div id={id} className={styles.answer} hidden={!expanded}>
                {content}
            </div>
        </div>
    )
}