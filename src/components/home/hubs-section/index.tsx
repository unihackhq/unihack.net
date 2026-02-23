import { GenericCard } from '@/components/generic-card';
import styles from './style.module.css';

import monashCoding from '@/assets/logos/mac-logo.svg';
import devsocLogo from '@/assets/logos/devsoc-logo.svg';
import witLogo from '@/assets/logos/wit-logo.png';
import Image from 'next/image';

const Hubs = [
  {
    name: 'Melborne Hub',
    location: 'Monash University Clayton',
    signUpLink: '/hubs/melbourne',
    logos: [{ src: monashCoding, alt: 'Monash Association of Coding' }],
  },
  {
    name: 'Sydney Hub',
    location: 'UNSW Kensington',
    signUpLink: '/hubs/sydney',
    logos: [
      { src: devsocLogo, alt: 'UNSW DevSoc' },
      { src: witLogo, alt: 'UNSW WIT' },
    ],
  },
];

export const HubsSection = () => {
  return (
    <section className={styles.section} id="hubs">
      <h2>How do I participate?</h2>
      <div className={styles.grid}>
        <div className={`${styles.gridItem} ${styles.remote}`}>
          <h4>Participate remotely...</h4>
          <p>
            Join from anywhere in Australia or New Zealand - from your
            university lab, your bedroom, or even your local cafe.
          </p>
          <p>
            Just make sure you and your team are registered and connected on our
            Discord.
          </p>
        </div>
        <div className={`${styles.gridItem} ${styles.hubs}`}>
          <h4>... or at one of our hubs</h4>
          <p>
            Meet and collaborate with other hackers in person at your
            university. Limited spots available at each hub.
          </p>
          <p>
            Participating from a hub is not mandatory - you can still join
            remotely!
          </p>
        </div>
      </div>
      <div className={styles.hubsListings}>
        {Hubs.map((hub, index) => (
          <GenericCard
            key={index}
            primaryColor="#000000"
            secondaryColor="#ffc837"
            mode="outline"
            title={hub.name}
            subtext={hub.location}
            footer={
              <div className={styles.hubLogos}>
                {hub.logos.map((logo, index) => (
                  <Image key={index} src={logo.src} alt={logo.alt} />
                ))}
              </div>
            }
            actions={[{ href: hub.signUpLink, text: 'Learn More' }]}
          />
        ))}
      </div>
    </section>
  );
};
