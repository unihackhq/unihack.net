import React from 'react';
import styles from './diversity.module.scss';
import ButtonLink from '@components/button/button-link';
import { H2, Text } from '@components/typography/typography';
import Stack from '@components/stack/stack';
import Image from 'next/image';

const Diversity = () => (
  <section className={styles.diversity}>
    <div className={styles['diversity-content']}>
      <Stack size="medium">
        <H2>Diversity Commitment</H2>
        <Image src="/images/diversity-commitment.jpg" layout = "intrinsic" height = "550" width="1200"/>
        <Text>
          The organisers of UNIHACK are committed in increasing the diversity of
          UNIHACK competitors. We will be collaborating with Women in ICT and
          Engineering groups across Australia to help promote the event. We will
          also collaborate with ICT and Engineering groups that represent LGBT
          students to ensure they are also represented at UNIHACK.
        </Text>
        <Text>
          We are also committed in producing a harassment-free experience for
          everyone, regardless of gender, age, sexual orientation, disability
          and religion. All persons involved in UNIHACK are required to comply
          with the terms set out in the Hack Code of Conduct this year —
          including attendees, sponsors, partners, volunteers and staff.
        </Text>
        <div className="actions">
          <ButtonLink
            theme="light"
            href="https://github.com/unihackhq/rules/blob/master/code-of-conduct.md"
            type="secondary"
          >
            Read the Hack Code of Conduct
          </ButtonLink>
        </div>
      </Stack>
    </div>
  </section>
);

export default Diversity;
