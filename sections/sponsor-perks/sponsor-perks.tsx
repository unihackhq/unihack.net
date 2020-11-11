import styles from './sponsor-perks.module.scss';
import Perk from './perk/perk';
import perkData from '../../content/perks.json';

const SponsorPerks = () => {
  const perks = perkData.map(perk => (
    <Perk
      key={perk.title}
      className={styles['perk-item']}
      title={perk.title}
      imgSrc={perk.imgSrc}
      listItems={perk.listItems}
    >
      {perk.desc}
    </Perk>
  ));

  return (
    <section className={styles['sponsor-perks']}>
      <div className={styles['sponsor-perks-content']}>
        <h2>Perks in Detail</h2>
        <div className={styles.perks}>{perks}</div>
      </div>
    </section>
  );
};
export default SponsorPerks;
