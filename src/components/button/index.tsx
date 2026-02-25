import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './button.module.css';

interface ButtonProps {
  href: string;
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ href, text }) => {
  return (
    <a href={href} className={styles.button}>
      {text}
      <FontAwesomeIcon icon={faArrowRight} />
    </a>
  );
};
