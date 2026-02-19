import styles from './style.module.css';

interface HubsHeroProps {
  hubName: string;
  location: string;
  host: { name: string; link: string; logo: React.ReactNode }[];
}

export const HubsHero = ({ hubName, location, host }: HubsHeroProps) => {
  return (
    <div className={styles.home_header}>
      <h1>
        {hubName} <span>at {location}</span>
      </h1>
      <div className={styles.hub_host}>
        <h6>Host</h6>
        <div className={styles.hub_host_wrap}>
          {host.map((h, index) => (
            <a
              key={index}
              href={h.link}
              className={styles.logo}
              aria-label={h.name}
            >
              {h.logo}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
