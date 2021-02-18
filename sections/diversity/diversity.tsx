import React from 'react';
import styles from './diversity.module.scss';
import ButtonLink from '@components/button/button-link';
import { H2, Text } from '@components/typography/typography';

const Diversity = () => (
  <section className={styles.diversity}>
    <div className={styles['diversity-content']}>
      <H2>Diversity Commitment</H2>
      <img src="/images/diversity-commitment.jpg" />
      <Text>
        The organisers of UNIHACK are committed in increasing the diversity of
        UNIHACK competitors. We will be collaborating with Women in ICT and
        Engineering groups across Australia to help promote the event. We will
        also collaborate with ICT and Engineering groups that represent LGBT
        students to ensure they are also represented at UNIHACK.
      </Text>
      <Text>
        We are also committed in producing a harassment-free experience for
        everyone, regardless of gender, age, sexual orientation, disability and
        religion. All persons involved in UNIHACK are required to comply with
        the terms set out in the Hack Code of Conduct this year — including
        attendees, sponsors, partners, volunteers and staff.
      </Text>
      <ButtonLink href="http://hackcodeofconduct.org/unihack" type="secondary">
        Read the Hack Code of Conduct
      </ButtonLink>
    </div>
  </section>
);

export default Diversity;
