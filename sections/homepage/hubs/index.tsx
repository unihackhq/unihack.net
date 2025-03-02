import ButtonLink from '@components/button/button-link';
import styles from './style.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const SydneyHub = () => {
  return (
    <div className={cx('hub-row', 'sydney')}>
      <div className={cx('hub-row-content')}>
        <h2>Participate from the Sydney Hub</h2>
        <p>at UNSW Kensington</p>
      </div>
      <div>
        <ButtonLink type="primary" theme="transparent" href="/hubs/sydney">
          More Info
        </ButtonLink>
      </div>
    </div>
  );
};

export const MelbourneHub = () => {
  return (
    <div className={cx('hub-row', 'melbourne')}>
      <div className={cx('hub-row-content')}>
        <h2>Participate from the Melbourne Hub</h2>
        <p>at Monash University Clayton</p>
      </div>
      <div>
        <ButtonLink type="primary" theme="transparent" href="/hubs/melbourne">
          More Info
        </ButtonLink>
      </div>
    </div>
  );
};
