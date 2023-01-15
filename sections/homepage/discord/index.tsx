import ButtonLink from '@components/button/button-link';
import styles from './style.module.scss';

export const JoinDiscord = () => {
  return (
    <div className={styles['discord-row']}>
      <div className={styles['discord-row-content']}>
        <h2>Have you joined our Discord?</h2>
        <p>
          Keep up-to-date with everything UNIHACK by joining the UNIHACK
          Discord!
        </p>
      </div>
      <div>
        <ButtonLink
          type="primary"
          theme="transparent"
          href="https://discord.gg/xXvZ3gbGBM"
        >
          Join Discord
        </ButtonLink>
      </div>
    </div>
  );
};
