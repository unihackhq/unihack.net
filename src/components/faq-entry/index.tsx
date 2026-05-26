"use client"

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import styles from './style.module.css';

interface Props {
    id: string;
    title: string;
    isAlreadyExpanded?: boolean;
}

export const FaqEntry: React.FC<React.PropsWithChildren<Props>> = ({ id, title, children, isAlreadyExpanded }) => {
    const [expanded, setExpand] = useState(isAlreadyExpanded); 

    const onClick = () => {
        setExpand(prev => !prev);
    }

    return <section className={styles.entry}>
        <button onClick={onClick} aria-expanded={expanded} data-expandable={id}>
            {title}
            <FontAwesomeIcon 
                className={styles.icon} 
                icon={expanded ? faMinus : faPlus}
                aria-hidden="true"
                focusable="false"
            />
        </button>
        <div id={id} className={styles.answer} hidden={!expanded}>
            {children}
        </div>
    </section>
}