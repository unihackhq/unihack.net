import { Stat, StatType } from './stat/stat';
import styles from './stats-banner.module.scss';

type Stats = {
  stats: StatType[];
};

export const StatsBanner = ({ stats }: Stats) => (
  <div className={styles.stats}>
    {stats.map(stat => {
      return (
        <Stat
          key={stat.name}
          name={stat.name}
          value={stat.value}
          colour={stat.colour}
        />
      );
    })}
  </div>
);
