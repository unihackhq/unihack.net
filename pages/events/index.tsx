import Head from 'next/head';
import Page from '@layouts/page/page';
import Header from '@components/header/header';
import Stack from '@components/stack/stack';
import { HXL } from '@components/typography/typography';
import styles from './events.module.scss';

export default () => (
    <div>
        <Head>
            <title>Previous events</title>
        </Head>

        <Page>
            <Header/>
            <section className={styles["events"]}>
                <Stack size="large">
                    <HXL underlineColor="yellow">Previous Events</HXL>
                </Stack>
            </section>
        </Page>
    </div>
)
