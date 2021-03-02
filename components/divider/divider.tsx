import styles from './divider.module.scss';

interface Props {
  color: 'dark' | 'light';
}

const Divider = (props: Props) => (
  <div className={`${styles.hr} ${styles[props.color]}`}>
    <hr className={`${styles['hr-content']} ${styles[props.color]}`} />
  </div>
);

export default Divider;
