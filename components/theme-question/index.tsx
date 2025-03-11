import React from 'react';
import styles from './theme-question.module.scss';
import { H3 } from '@components/typography/typography';

export const ThemeQuestion = () => {
  return (
    <div className={styles['theme-question']}>
      <H3>Is there a theme or challenge for UNIHACK?</H3>
      <p>No.</p>
      <p>
        As the Imagination Hackathon, we do not set a theme or prompt. Teams
        must come up with an idea and build a prototype during the weekend.
      </p>
      <p>
        The important thing is that your prototype works, and that you
        demonstate that it works in your pitch.
      </p>
    </div>
  );
};
