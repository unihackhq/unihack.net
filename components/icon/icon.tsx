import styles from './icon.module.scss';

type Props = {
  icon: string;
  color?: string;
  size?: number;
};

const Icon = (props: Props) => (
  <img
    className={styles['header-logo-content-img']}
    style={{ height: props.size, width: props.size }}
    src={`icons/${props.icon}.svg`}
  />
);

export default Icon;
