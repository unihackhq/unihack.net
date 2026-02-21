import styles from './style.module.css';

export const JudgingCriteria = () => {
  return (
    <div className={styles['judging-section']}>
      <h5>Judging Criteria</h5>
      <div className={styles['criteria-grid']}>
        <div className={styles['criteria-item']}>
          <h6>✨ Polish, Design, and Execution</h6>
          <p>
            What does the project look like? Is it intuitive, aesthetically
            pleasing, and accessible? And most importantly, does it actually
            work?
          </p>
        </div>
        <div className={styles['criteria-item']}>
          <h6>💪 Technical Difficulty</h6>
          <p>
            Does the hack look technically interesting or challenging? Is it
            simply putting a pretty frontend on an existing API or does it do
            something more?
          </p>
        </div>
        <div className={styles['criteria-item']}>
          <h6>💡 Originality and Creativity</h6>
          <p>
            How unique is the hack? Does it solve a new problem, or have a new
            take on an existing problem?
          </p>
        </div>
        <div className={styles['criteria-item']}>
          <h6>😲 Wow Factor</h6>
          <p>
            Does it spark joy? Would this be something you use and show to your
            friends? Yes, this is totally subjective. But that’s what makes it
            fun.
          </p>
        </div>
      </div>
    </div>
  );
};
