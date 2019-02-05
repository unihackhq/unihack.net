import Head from 'next/head';
import './terms.scss';

import Page from '../../layouts/page/page';
import Header from '../../components/header/header';

export default () => (
  <div>
    <Head>
      <title>Terms of Service - UNIHACK</title>
    </Head>
    <Page featureBackground>
      <Header withLogo solid/>
      <section className="terms">
        <div className="terms-content">
          <h2>Terms of Service</h2>
          <p>
            <strong>UNIHACK INCORPORATED</strong> is an Australian-owned and non-for-profit company.
            All payments will be invoiced in Australian Dollars unless otherwise agreed upon in writing.
          </p>

          <h3>UNIHACK competitor refund policy</h3>
          <p>
            Unfortunately we cannot offer refunds for any competitor tickets, however you are able transfer your
            ticket to another student willing to compete.
          </p>
          <p>
            Our <a href="https://facebook.com/groups/unihackers/">Facebook Group</a> is the recommended medium
            to find other students looking for tickets.
          </p>

          <h3>UNIHACK company sponsorship refund policy</h3>
          <p>
            Since sponsorship goes directly into the running of hackathons and takes effect immediately
             we cannot offer refunds for sponsorship.
          </p>
          <p>
          We may however be able to offer compensation in credit towards another year of sponsorship.
          </p>
        </div>
      </section>
    </Page>
  </div>
);
