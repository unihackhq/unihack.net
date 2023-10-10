import { ReactNode } from 'react';
import Head from 'next/head';

import styles from './page.module.scss';
import Header from '@components/header/header';
import Footer from '@components/footer/footer';

const description = `
  UNIHACK is Australia's premier student hackathon.
  Students get 48 hours to design and build something awesome – an app, website, piece of hardware... anything goes.
  Solve a problem, impress us and win some prizes!
`;

type Props = {
  featureBackground?: boolean;
  headerless?: boolean;
  children: ReactNode;
};

const Page = (props: Props) => {
  return (
    <div className={styles.main}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://unihack.net/" />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://unihack.net/images/og-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@UNIHACKMelb" />
        <meta name="twitter:title" content="UNIHACK" />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://unihack.net/images/og-image.png"
        />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          href="/favicons/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicons/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicons/favicon-96x96.png"
          sizes="96x96"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon-180x180.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicons/apple-touch-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/favicons/apple-touch-icon-167x167.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {!props.headerless && <Header />}
      <div className={styles['main-content']}>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Page;
