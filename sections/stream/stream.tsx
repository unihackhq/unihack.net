import React, { useState, useEffect } from 'react';
import { TwitchPlayer } from 'react-twitch-embed';
import styles from './stream.module.scss';
import { H2 } from '@components/typography/typography';
import Stack from '@components/stack/stack';

function calculateTimeLeft() {
  // Date object is for Sydney/Melbourne time 7th March 2021 5pm
  const start = +new Date('2021/03/05 18:30 +1100');
  const now = +new Date();
  let timeString = '';

  if (now < start) {
    timeString = 'Hacking begins soon...';
    return timeString;
  }

  const difference = +new Date('2021/03/07 17:00 +1100') - now;
  let timeLeft = { hours: '00', minutes: '00', seconds: '00' };

  if (difference > 0) {
    timeLeft = {
      hours: Math.floor(difference / (1000 * 60 * 60)).toString(),
      minutes: Math.floor((difference / 1000 / 60) % 60).toString(),
      seconds: Math.floor((difference / 1000) % 60).toString(),
    };

    if (timeLeft.hours.length < 2) {
      timeLeft.hours = `0${timeLeft.hours}`;
    }

    if (timeLeft.minutes.length < 2) {
      timeLeft.minutes = `0${timeLeft.minutes}`;
    }

    if (timeLeft.seconds.length < 2) {
      timeLeft.seconds = `0${timeLeft.seconds}`;
    }

    timeString = `${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds} remaining`;
  } else {
    timeString = 'Good luck everyone! 🚀';
  }
  return timeString;
}

const Stream = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.stream}>
      <div className={styles['stream-content']}>
        <Stack size="medium">
          <H2>{timeLeft}</H2>
          <div className={styles['stream-container']}>
            <TwitchPlayer muted width="100%" height="100%" channel="unihack" />
          </div>
        </Stack>
      </div>
    </section>
  );
};

export default Stream;
