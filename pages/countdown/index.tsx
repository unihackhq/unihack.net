import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from './index.module.scss';
import { Logo } from '@components/logo';

const END_DATE = '2025/03/16 17:00 +1100';

interface TimeLeft {
  countdown: boolean;
  hours?: string;
  minutes?: string;
  seconds?: string;
}

export const calculateTimeLeft = (): TimeLeft => {
  // Date object is for Sydney/Melbourne time 7th March 2021 5pm
  const now = +new Date();
  const difference = +new Date(END_DATE) - now;
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

    return { ...timeLeft, countdown: true };
  }
  return { countdown: false };
};

const Index = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.countdown}>
      <Head>
        <title>UNIHACK 2025 - Countdown</title>
      </Head>
      <h1>UNIHACK 2025</h1>
      {!timeLeft.countdown && (
        <p className={styles.big}>Good luck everyone! 🚀</p>
      )}
      {timeLeft.countdown && (
        <p className={styles.big}>
          {`${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds} remaining`}
        </p>
      )}
      <p>Where's the prizes? Visit unihack.net</p>
    </section>
  );
};

export default Index;
