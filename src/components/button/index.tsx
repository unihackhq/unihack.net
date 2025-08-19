import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './button.module.css';

interface ButtonProps {
  href: string;
  text: string;
}

export const Button = ({ href, text }: ButtonProps) => {
  return (
    <a href={href} className={styles.button}>
      {text}
      <FontAwesomeIcon icon={faArrowRight} />
    </a>
  );
};
