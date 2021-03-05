import styles from './divider.module.scss';

interface Props {
  dark?: boolean;
}

const Divider = ({ dark }: Props) => (
  <div className={`${styles.hr} ${dark && styles.dark}`}>
    <hr className={`${styles['hr-content']}`} />
  </div>
);

export default Divider;
