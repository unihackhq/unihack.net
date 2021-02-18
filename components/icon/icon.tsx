import styles from './icon.module.scss';

type Props = {
  icon: string;
  color?: string;
};

const Icon = (props: Props) => (
  <img
    className={styles['header-logo-content-img']}
    src={`icons/${props.icon}.svg`}
  />
);

export default Icon;
