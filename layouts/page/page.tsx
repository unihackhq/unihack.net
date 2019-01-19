import { ReactNode } from 'react';
import Head from 'next/head';

import Header from '../../components/header/header';
import './page.scss';

type Props = { children: ReactNode };

const Page = (props: Props) => (
  <div>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      <link rel="shortcut icon" href="/static/favicons/favicon.ico"/>
      <link rel="icon" type="image/png" href="/static/favicons/favicon-16x16.png" sizes="16x16"/>
      <link rel="icon" type="image/png" href="/static/favicons/favicon-32x32.png" sizes="32x32"/>
      <link rel="icon" type="image/png" href="/static/favicons/favicon-96x96.png" sizes="96x96"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon-180x180.png"/>
      <link rel="apple-touch-icon" sizes="152x152" href="/static/favicons/apple-touch-icon-152x152.png"/>
      <link rel="apple-touch-icon" sizes="167x167" href="/static/favicons/apple-touch-icon-167x167.png"/>
    </Head>
    <Header/>
    { props.children }
    {/* <Footer /> */}
  </div>
);

export default Page;
