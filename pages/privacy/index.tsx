import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './privacy.module.scss';

import Page from '@layouts/page/page';
import Header from '@components/header/header';
import { HL, H2, Text } from '@components/typography/typography';
import Stack from '@components/stack/stack';

export default () => (
  <div>
    <Head>
      <title>Privacy Policy - UNIHACK</title>
    </Head>
    <Page>
      <Header withLogo solid />
      <section className={styles['privacy-policy']}>
        <div className={styles['privacy-policy-content']}>
          <Stack size="medium">
            <HL>Privacy Policy</HL>
            <Text>
              <strong>UNIHACK INCORPORATED</strong> is the not-for-profit
              organisation committed to running enjoyable, informative and
              inclusive hackathons for tertiary students. We are bound by this
              policy which outlines our ongoing obligations to you in respect of
              how we manage your Personal Information.
            </Text>
            <Text>
              We have adopted the Australian Privacy Principles (APPs) contained
              in the Privacy Act 1988 (Cth) (the Privacy Act). The APPs govern
              the way in which we collect, use, disclose, store, secure and
              dispose of your Personal Information.
            </Text>
            <Text>
              A copy of the Australian Privacy Principles may be obtained from
              the website of The Office of the Australian Information
              Commissioner at{' '}
              <a href="https://oaic.gov.au">https://oaic.gov.au</a>.
            </Text>

            <H2>What is personal information and why do we collect it?</H2>
            <Text>
              Personal Information is information or an opinion that identifies
              an individual. Examples of Personal Information we collect
              include: names, gender, addresses, email addresses, phone numbers,
              tertiary institutions, education information, and dietary
              requirements and/or medical conditions that you disclose to us in
              order to assist us help you throughout the event.
            </Text>
            <Text>
              This Personal Information is obtained in several ways including
              forms on our website{' '}
              <Link href="/">
                <a>http://unihack.net</a>
              </Link>
              , correspondence via email or phone calls, and the third parties
              listed below. We don’t guarantee website links or policy of
              authorised third parties.
            </Text>
            <Text>
              We collect your Personal Information for the primary purpose of
              providing our services to you and providing information to
              sponsors. You may unsubscribe from our mailing/marketing lists and
              opt-out from us providing information to our sponsors at any time
              by contacting us in writing.
            </Text>
            <Text>
              When we collect Personal Information we will, where appropriate
              and where possible, explain to you why we are collecting the
              information and how we plan to use it.
            </Text>

            <H2>Third Parties</H2>
            <Text>
              We will primarily collect your Personal Information only from you.
              However, we also will be provided with information by several
              third parties, such as our third-party ticketing platform{' '}
              <a href="https://www.eventbrite.com.au/">Eventbrite</a>, payment
              provider <a href="https://pinpayments.com/">Pin Payments</a>,
              communications system <a href="https://slack.com/">Slack</a>, and
              hackathon management service{' '}
              <a href="https://devpost.com/">DevPost</a>. In such a case we will
              take reasonable steps to ensure that you are made aware of the
              information provided to us by the third party.
            </Text>

            <H2>Disclosure of personal information</H2>
            <Text>
              Your Personal Information may be disclosed to third-parties where
              you consent to the disclosure. These third-parties may include but
              are not limited to the host universities/TAFEs and/or our
              sponsorship partners.
            </Text>
            <Text>
              Where required by law, we will also disclose Personal Information
              to authorised governmental bodies.
            </Text>

            <H2>Security of personal information</H2>
            <Text>
              Your Personal Information is stored in a manner that reasonably
              protects it from misuse and loss and from unauthorized access,
              modification or disclosure.
            </Text>
            <Text>
              When your Personal Information is no longer needed for the purpose
              for which it was obtained, we will take reasonable steps to
              destroy or permanently de-identify your Personal Information.
              However, most of the Personal Information is or will be stored in
              participant files which will be kept by us for a minimum of 7
              years.
            </Text>

            <H2>Access to your personal information</H2>
            <Text>
              You may access the Personal Information we hold about you and to
              update and/or correct it, subject to certain exceptions. If you
              wish to access your Personal Information, please contact us in
              writing.
            </Text>
            <Text>
              <strong>UNIHACK INCORPORATED</strong> will not charge any fees for
              you to access a copy of your Personal Information.
            </Text>
            <Text>
              In order to protect your Personal Information we may require
              identification from you before releasing the requested
              information.
            </Text>

            <H2>Maintaining the Quality of your Personal Information</H2>
            <Text>
              It is an important to us that your Personal Information is up to
              date. We will take reasonable steps to make sure that your
              Personal Information is accurate, complete and up-to-date. If you
              find that the information we have is not up to date or is
              inaccurate, please advise us as soon as practicable so we can
              update our records and ensure we can continue to provide quality
              services to you.
            </Text>

            <H2>Policy updates</H2>
            <Text>
              This Policy may change from time to time and is available on our
              website.
            </Text>

            <H2>Privacy Policy complaints and enquiries</H2>
            <Text>
              If you have any queries or complaints about our Privacy Policy
              please contact us at:{' '}
              <a href="mailto:team@unihack.net">team@unihack.net</a>
            </Text>
          </Stack>
        </div>
      </section>
    </Page>
  </div>
);
