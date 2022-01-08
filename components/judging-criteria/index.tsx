import React from 'react';
import styles from './judging-criteria.module.scss';
import { H3, H4, Text } from '@components/typography/typography';
import Stack from '@components/stack/stack';

export const JudgingCriteria = () => {
    return (
        <div className={styles['judging-section']}>
        <Stack size="medium" className={styles['judging-section-content']}>
          <H3>Judging Criteria</H3>
          <div className={styles['criteria-grid']}>
            <Stack size="xsmall">
              <H4>✨ Polish, Design, and Execution</H4>
              <Text>
                What does the project look like? Is it intuitive, aesthetically
                pleasing, and accessible? And most importantly, does it actually
                work?
              </Text>
            </Stack>
            <Stack size="xsmall">
              <H4>💪 Technical Difficulty</H4>
              <Text>
                Does the hack look technically interesting or challenging? Is it
                simply putting a pretty frontend on an existing API or does it
                do something more?
              </Text>
            </Stack>
            <Stack size="xsmall">
              <H4>💡 Originality and Creativity</H4>
              <Text>
                How unique is the hack? Does it solve a new problem, or have a
                new take on an existing problem?
              </Text>
            </Stack>
            <Stack size="xsmall">
              <H4>😲 Wow Factor</H4>
              <Text>
                Does it spark joy? Would this be something you use and show to
                your friends? Yes, this is totally subjective. But that’s what
                makes it fun.
              </Text>
            </Stack>
          </div>
        </Stack>
      </div>
    )
}