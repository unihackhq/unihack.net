import styles from './style.module.css';
import Image, { StaticImageData } from 'next/image';
import elastic from '@/assets/logos/elastic-w.svg';
import { GenericCard } from '@/components/generic-card';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

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
          <GenericCard
            key={index}
            primaryColor="#e2034a"
            title={workshop.title}
            subtext={workshop.dateTime}
            header={
              <div className={cx('sponsorLogo')}>
                <Image src={workshop.sponsorLogo} alt={workshop.sponsorName} />
              </div>
            }
            actions={[{ href: workshop.link, text: 'Learn More' }]}
          />
        ))}
      </div>
    </section>
  );
};
