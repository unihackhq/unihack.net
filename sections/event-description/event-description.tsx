import React from 'react';
import styles from './event-description.module.scss';
import { H2, H4, Text } from '@components/typography/typography';
import Stack from '@components/stack/stack';

const EventDescription = () => (
  <section className={styles['event-description']}>
    <div className={styles['event-description-content']}>
      <Stack size="small">
        <H2>What is UNIHACK?</H2>
        <Text>
          We are Australia’s largest student hackathon. We bring together a
          diverse range of students to collaborate and bring innovative ideas to
          life - fostering the next generation of developers, thinkers, and
          entrepreneurs.
        </Text>
        <Text>
          In a team of 4-6, build your idea (an app, website, device or anything
          really!), pitch it, and win prizes. We will provide you with the
          mentors, workshops, and plenty of food and drinks to keep you going!
        </Text>
      </Stack>

      <div className={styles.values}>
        <Stack className={styles.value} size="xsmall">
          <img src="/images/lightbulb.png" alt="A drawing of a lightbulb." />
          <H4>Imagination</H4>
          <Text>
            We believe students are the ones who imagine the future without
            limitations.
          </Text>
          <Text bold>#creativity</Text>
        </Stack>
        <Stack className={styles.value} size="xsmall">
          <img src="/images/handshake.png" alt="A drawing of a handshake." />
          <H4>Collaboration</H4>
          <Text>
            We create a supportive community that promotes diversity and
            inclusion.
          </Text>
          <Text bold>#community</Text>
        </Stack>
        <Stack className={styles.value} size="xsmall">
          <img src="/images/laptop.png" alt="A drawing of a laptop." />
          <H4>Build</H4>
          <Text>
            We embrace technology to build amazing ideas through software and
            hardware.
          </Text>
          <Text bold>#technology</Text>
        </Stack>
      </div>
    </div>
  </section>
);

export default EventDescription;
