import styles from './sponsor-perks.module.scss';
import Perk from './perk';
import perkData from '@content/perks.json';
import { H2XL } from '@components/typography/typography';

const SponsorPerks = () => {
  const perks = perkData.map((perk) => (
    <Perk
      key={perk.title}
      className={styles['perk-item']}
      title={perk.title}
      imgSrc={perk.imgSrc}
      desc={perk.desc}
    />
  ));

  return (
    <section className={styles['sponsor-perks']}>
      <div className={styles['sponsor-perks-container']}>
        <div className={styles['sponsor-perks-header']}>
          <H2XL>Perks</H2XL>
        </div>
        <div className={styles['sponsor-perks-content']}>
          <div className={styles.perks}>{perks}</div>
        </div>
      </div>
    </section>
  );
};
export default SponsorPerks;
