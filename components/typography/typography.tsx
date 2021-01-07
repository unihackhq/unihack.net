import styles from './typography.module.scss';

const HXL = (props: any) => <h1 className={styles.hxl}>{props.children}</h1>;

const HL = (props: any) => <h1 className={styles.hl}>{props.children}</h1>;

const H1 = (props: any) => <h1 className={styles.h1}>{props.children}</h1>;

const H2 = (props: any) => <h2 className={styles.h2}>{props.children}</h2>;

const H3 = (props: any) => <h3 className={styles.h3}>{props.children}</h3>;

const H4 = (props: any) => <h4 className={styles.h4}>{props.children}</h4>;

export { HXL, HL, H1, H2, H3, H4 };
