import styles from './about-us.module.scss';
import Stack from '@components/stack/stack';
import {H3, Text } from '@components/typography/typography';

const AboutUs = () => (
  <section className={styles['about-us']}>
    <div className={styles['about-us-container']}>
      <div className={styles['about-us-left']}>
        <H3>The longer version</H3>
      </div>
      <div className={styles['about-us-content']}>
        <Stack size="medium">
          <Text>
            Teams have 48 hours to design and build something awesome. It can be
            anything - a website, a mobile application, a video game, or even
            something hardware. The important thing is that it needs to work
            when it is presented to the judges.
          </Text>
          <Text>
            Whether you are an avid programmer or a first-time hacker, UNIHACK
            welcomes everyone, regardless of skill level. You will have the
            opportunity to build, collaborate and learn from your fellow hackers
            and mentors at the event. The event will also have a number of quick
            tech talks throughout to help participants learn new or extend their
            existing skills.
          </Text>
        </Stack>
      </div>
    </div>
  </section>
);

export default AboutUs;
