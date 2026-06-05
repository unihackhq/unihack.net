import Image from 'next/image';
import styles from './style.module.css';

import bg from '@/assets/photos/about-unihack-bg.jpg';
import { PageContent } from '@/components/page-content';

export default function AboutPage() {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.overlay}>
          <Image src={bg} alt="Students participating at UNIHACK" />
        </div>
        <p>
          <strong>Image Credit:</strong> European Union/Melissa Hobbs
        </p>
      </div>
      <PageContent className={styles.content}>
        <h1>About Us</h1>
        <p className={styles.intro}>
          We are Australia's <span>largest</span> student hackathon.
        </p>
        <p>
          Join hundreds of university students from across Australia and New
          Zealand as they spend a weekend of creativity, learning, and building
          solutions to problems. Teams of up to six students have around 48
          hours to design, build and pitch a prototype.
        </p>
        <p>
          We are called{' '}
          <strong className={styles.imagination}>
            The Imagination Hackathon
          </strong>{' '}
          as we do not prescribe an official theme. Students are free to create
          whatever idea they choose, in whatever format they wish - such as a
          website, a mobile app, a game, or even a piece of hardware. The most
          important thing is that it must work when presented.
        </p>
        <p>
          Inspired by similar hackathons in the United States and Europe,
          UNIHACK was created in 2014 by Terence Huynh whilst at WIRED Monash,
          the IT student society at Monash University.
        </p>
        <p>
          Our competition past winners and previous participants are highly
          valued - working at some of the biggest names in the Australian and
          global technology industry; or starting their own companies.
        </p>
        <p>
          We pride ourselves in being an inclusive and welcoming space for all,
          regardless of skill or academic level. UNIHACK features a wide variety
          of students: from first-time participants to experienced programmers;
          first-year students to those completing their PhD doctorates.
        </p>
        <h2>Who runs UNIHACK?</h2>
        <p>
          UNIHACK is now organized by UNIHACK Incorporated, a non-profit
          association external to any university. The team that organizes the
          events are all volunteers, and is a mix of students studying and those
          who are currently working in the industry today.
        </p>
        <p>
          We work with multiple student societies, university faculities, and
          other organizations to help run and share our events to university
          students across Australia and New Zealand.
        </p>
        <p>
          All funds raised are used to run current and future UNIHACK events;
          and supporting orther activities to train the next generation of tech
          talent.
        </p>
      </PageContent>
    </>
  );
}
