import styles from './alert.module.scss';

type Props = {
  link: string;
  message: string;
};

const Alert = (props: Props) => {
  const { link, message } = props;
  return (
    <div className={styles.alert}>
      <a href={link}>{message}</a>
    </div>
  );
};

export default Alert;
