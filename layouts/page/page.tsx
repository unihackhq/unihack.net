import { ReactNode } from 'react';
import Head from 'next/head';

import styles from './page.module.scss';
import Footer from '../../components/footer/footer';
import { COLORS } from '../../styles/styles';

const description = `
  UNIHACK is Australia's premier student hackathon, based in Melbourne and Sydney.
  Students get 48 hours to design and build something awesome – an app, website, piece of hardware... anything goes.
  Solve a problem, impress us and win some prizes!
`;

type Props = {
  featureBackground?: boolean;
  children: ReactNode;
};

const Page = (props: Props) => {
  return (
    <div className={styles.main}>
      <style jsx global>
        {`
          body {
            background-color: ${props.featureBackground
              ? COLORS.YELLOW
              : COLORS.LIGHT_GREY};
          }
        `}
      </style>
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
        <link
          href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700"
          rel="stylesheet"
        />
      </Head>
      {props.children}
      <Footer />
    </div>
  );
};

export default Page;
