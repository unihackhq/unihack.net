import React from 'react';
import classNames from 'classnames/bind';
import styles from './home-register.module.scss';
import ButtonLink from '../button/button-link';
import { event, AnalyticsCategory } from '../../lib/gtag';

const cx = classNames.bind(styles);

interface Props {
  className?: string;
}

const HomeRegister: React.FC<Props> = ({ className }) => (
  <section className={cx('home-register', className)}>
    <div className={cx('home-register-content')}>
      <h2>Participating at UNIHACK? Here's what you need to do...</h2>

      <div className={cx('home-register-grid')}>
        <div className={cx('home-register-section')}>
          <h3>
            <span>1.</span> Join the Discord!
          </h3>
          <p>
            The UNIHACK Discord will be our main hub for the event. This is
            where all of our giveaways, mentoring, and how we will communicate
            with everyone during the 48+ hours.
          </p>
          <p>
            <strong>Make sure you are a member so you do not miss out.</strong>
          </p>
          <ButtonLink
            type="primary"
            theme="light"
            href="https://discord.gg/MfuzHurGpd"
            onClick={() => {
              event({
                action: 'join_discord_button_clicked',
                category: AnalyticsCategory.EVENT,
                label: 'Clicked "Join Discord"',
              });
            }}
          >
            Join the Discord
          </ButtonLink>
        </div>
        <div className={cx('home-register-section')}>
          <h3>
            <span>2.</span> Register your team
          </h3>
          <p>
            Got a team ready to go? Make sure you register it on our new Team
            Management app. This lets you manage who is in your team, and lets
            you notify us of any changes.
          </p>
          <p>
            <strong>
              Only one person from your team needs to register for an account.
            </strong>
          </p>
          <ButtonLink
            href="https://manage.unihack.net"
            type="primary"
            theme="light"
            onClick={() => {
              event({
                action: 'manage_team_button_clicked',
                category: AnalyticsCategory.EVENT,
                label: 'Clicked "Manage Your Team"',
              });
            }}
          >
            Manage Your Team
          </ButtonLink>
        </div>

        <div className={cx('home-register-section')}>
          <h3>
            <span>3.</span> Looking for a team or team members?
          </h3>
          <p>
            The best place to start would be on our Discord server. We have a
            channel called <strong>#team-finder</strong> where you see if anyone
            else is looking. We plan to try and organise something virtual
            closer to the event.
          </p>
          <p>
            Alternatively, consider reaching out to your university's IT student
            society if they can help out.
          </p>
        </div>

        <div className={cx('home-register-section')}>
          <h3>
            <span>4.</span> Keep an eye on your inbox!
          </h3>
          <p>
            We have a number of pre-hack and post-hack events planned -
            including workshops and Q&amp;A sessions with some of our sponsors.
          </p>
          <p>
            So make sure you check your email inbox to find out when these events
            will occur.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default HomeRegister;
