import styles from './style.module.css';
import Image, { StaticImageData } from 'next/image';
import { Button } from '@/components/button';
import elastic from '../sponsor-us-section/logos/elastic-w.svg';

interface Workshop {
  title: string;
  dateTime: string;
  link: string;
  sponsorLogo: StaticImageData;
  sponsorName: string;
}

const workshops: Workshop[] = [
  {
    title: 'Build an agentic app in Elastic',
    dateTime: '25 February, 4:00 PM - 5:00 PM AEDT',
    link: 'https://events.humanitix.com/unihack-x-elastic-build-an-agentic-app-in-elastic?mc_cid=24283086bc',
    sponsorLogo: elastic,
    sponsorName: 'Elastic',
  },
  {
    title: 'Elastic Security - Navigation to Investigation',
    dateTime: '26 February, 4:00 PM - 5:00 PM AEDT',
    link: 'https://events.humanitix.com/unihack-x-elastic-elastic-security-navigation-to-investigation?mc_cid=24283086bc',
    sponsorLogo: elastic,
    sponsorName: 'Elastic',
  },
];

export const WorkshopsSection = () => {
  return (
    <section className={styles.section} id="workshops">
      <h2>Workshops</h2>
      <div className={styles.centerText}>
        <p>
          Join our hands-on workshops led by industry experts and learn new
          skills to help you build your hack.
        </p>
      </div>
      <div className={styles.workshopsGrid}>
        {workshops.map((workshop, index) => (
          <div key={index} className={styles.workshopCard}>
            <div className={styles.workshopContent}>
              <div className={styles.sponsorLogo}>
                <Image src={workshop.sponsorLogo} alt={workshop.sponsorName} />
              </div>
              <h3>{workshop.title}</h3>
              <p className={styles.dateTime}>{workshop.dateTime}</p>
            </div>
            <div className={styles.workshopActions}>
              <Button href={workshop.link} text="Learn More" />
            </div>
          </div>
        ))}
        {workshops.length === 0 && (
          <div className={styles.noWorkshops}>
            <p>Workshops coming soon! Check back later for updates.</p>
          </div>
        )}
      </div>
    </section>
  );
};
