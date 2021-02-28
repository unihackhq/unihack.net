import React, {useState, useEffect} from 'react';
import { TwitchPlayer } from 'react-twitch-embed';
import styles from './twitch.module.scss';
import { H2, H3 } from '@components/typography/typography';
import Stack from '@components/stack/stack'
import scheduleData from '../../content/2019/schedule.json';



function calculateTimeLeft(){
  // Date object is for Sydney/Melbourne time 12am 
  // TODO: Fix up date
  let difference =  +new Date('2021-03-7 12:00 +1100') - +new Date();
  let timeLeft = {hours:0, minutes:0, seconds: 0};
  let timeString = ""

  if (difference > 0) {
    timeLeft = {
      hours: Math.floor((difference / (1000 * 60 * 60))),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
  };
  timeString = `${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds} remaining`
} else {
  timeString = "Good Luck Everyone 🚀"
}
return timeString;
}

interface Event {
  startTime: string,
  endTime: string,
  title: string,
}

function FindCurrentEvent(){
  let events:Event[] = []

  //TODO: Add Friday
  events = events.concat(scheduleData["saturday"])
  events = events.concat(scheduleData["sunday"])


  for (const event of events) {
    let statTimeDiff = +new Date(event.startTime) - +new Date();
    let endTimeDiff = +new Date(event.endTime) - +new Date();

    if (statTimeDiff <= 0 && endTimeDiff >= 0){
      return event.title
    }
  }

  return ""
}

const Stream = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const eventName = FindCurrentEvent()

  useEffect(() => {
    const timer=setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

 
  return (
    <section className={styles.twitch}>
      <div className={styles['twitch-content']}>
        <Stack size='small'>
        <H2>{timeLeft}</H2>  
        {/* TODO: Update channel name */}
        <TwitchPlayer muted width="100%" height="590px" channel="ranboolive" />
        <div className={styles['twitch-content-event']}>
        <H3>{eventName}</H3>
        </div>
        </Stack>
      </div>
    </section>
  );
}

export default Stream;
