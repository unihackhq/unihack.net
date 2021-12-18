import React from 'react';
import styles from './meet-the-team.module.scss';
import team from '@content/about/team.json';
import Team from '@components/team/team';
import Stack from '@components/stack/stack';
import ButtonLink from '@components/button/button-link';
import { H2, Text } from '@components/typography/typography';

const meetTheTeam = () => (
  <section className={styles['meet-the-team']}>
    <div className={styles['meet-the-team-wrapper']}>
      <div className={styles['meet-the-team-container']}>
        <H2>Meet the team</H2>
        <Team
          items={team.members}
          basePath={team.base}
          style={styles['meet-the-team-grid']}
        />
      </div>
      <div className={styles['meet-the-team-join']}>
        <H2>Want to join?</H2>
        <div className={styles['meet-the-team-join-content']}>
          <Stack size="medium">
            <Text>
              Inspired by the studnet hackathons in the United States and
              Europe, Unihack was created in 2014 by WIRED Monash. Since then,
              UNIHACK has quickly become one of the go-to hackathons for
              university and TAFE students nationwide.
            </Text>
          </Stack>
          <div className={styles['meet-the-team-join-button']}>
            <ButtonLink theme="transparent" type="primary" href="/sponsorship">
              Join the team
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default meetTheTeam;
