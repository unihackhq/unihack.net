import React, { useEffect, useState } from 'react';
import styles from './brand-hero.module.scss';
import { Text } from '@components/typography/typography';
import Stack from '@components/stack/stack';
import ReactPlayer from 'react-player/twitch';
import ButtonLink from '@components/button/button-link';

const START_DATE = '2024/03/01 18:00 +1100';
const END_DATE = '2024/03/03 17:00 +1100';

const calculateTimeLeft = () => {
  const start = +new Date(START_DATE);
  const now = +new Date();
  if (now < start) {
    return { title: 'Hacking starts 6PM today (Melbourne time)' };
  }

  const diff = +new Date(END_DATE) - now;
  if (diff > 0) {
    const hours = Math.floor(diff / (1000 * 60 * 60))
      .toString()
      .padStart(2, '0');
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
      .toString()
      .padStart(2, '0');
    const seconds = Math.floor((diff / 1000) % 60)
      .toString()
      .padStart(2, '0');
    return {
      time: `${hours}:${minutes}:${seconds}`,
      subtitle: 'remaining before hacking stops...',
    };
  }

  return {
    title: `Good luck everyone! 🚀`,
    subtitle: 'Winners announcement on March 11, 6PM (Melbourne time)',
  };
};

const StreamHero = () => {
  const [{ title, time, subtitle }, setTitle] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTitle(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <section className={styles['stream-hero']}>
      <div className={styles['stream-hero-content']}>
        <Stack size="medium">
          <h1>UNIHACK 2025</h1>
          {title && (
            <Text className={styles.title}>
              {title ?? 'Get ready for UNIHACK 2024!'}
            </Text>
          )}
          {time && <Text className={styles.time}>{time}</Text>}
          {subtitle && <Text className={styles.subtitle}>{subtitle}</Text>}
        </Stack>
      </div>
      <div className={styles.stream}>
        <ReactPlayer
          width="100%"
          height="100%"
          url="https://twitch.tv/unihack"
        />
      </div>
      <div className={styles['stream-hero-content']}>
        <div className={styles.actions}>
          <ButtonLink
            type="primary"
            theme="transparent"
            href="https://unihack2025.devpost.com"
          >
            Visit DevPost
          </ButtonLink>
          <ButtonLink
            type="primary"
            theme="transparent"
            href="https://docs.google.com/forms/d/e/1FAIpQLScWRbp9lMacf0Xjul2y2kgLvgsTYqDo1BlrDWBkEAac0UrY0w/viewform"
          >
            Want to join the team?
          </ButtonLink>
          <ButtonLink
            type="primary"
            theme="transparent"
            href="https://merch.unihack.net"
          >
            Buy Stickers + T-Shirt
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default StreamHero;
