import styles from './back-nav.module.scss';
import Link from 'next/link';
import { Text } from '@components/typography/typography'


type Props = {
    className?: string;
    route: string;
};

const BackNav = (props: Props) => (
    <section className={styles['back-nav']}>
        <Link href={`/${props.route}`}>
            <p className={`${props.className ? props.className : ''}`}>
                <Text>← {props.route ? props.route : 'Home'}</Text>
            </p>
        </Link>
    </section>
);

export default BackNav;
