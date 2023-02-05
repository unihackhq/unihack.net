import ButtonLink from '@components/button/button-link';
import styles from './style.module.scss';

export const MelbourneHub = () => {
  return (
    <div className={styles['hub-row']}>
      <div className={styles['hub-row-content']}>
        <h2>
          Participate from the Melbourne Hub
          <span>at Monash University, Clayton</span>
        </h2>
        <p>
          with <span>WIRED Monash</span>
        </p>
      </div>
      <div>
        <ButtonLink
          type="primary"
          theme="transparent"
          href="/2023-melbourne-hub"
        >
          More Info
        </ButtonLink>
      </div>
    </div>
  );
};
