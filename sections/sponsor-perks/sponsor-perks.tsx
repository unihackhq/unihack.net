import './sponsor-perks.scss';
import Perk from './perk/perk';
import perkData from '../../content/perks.json';

const SponsorPerks = () => {
  const perks = perkData.map((perk, index) => (
    <Perk
      key={perk.title}
      className={`perk-item ${index % 2 !== 0 ? 'alt' : ''}`}
      title={perk.title}
      imgSrc={perk.imgSrc}
      listItems={perk.listItems}
    >
      {perk.desc}
    </Perk>
    )
  );

  return (
    <section className="sponsor-perks">
      <div className="sponsor-perks-content">
        <h2>Perks in Detail</h2>
        <div className="perks">
          {perks}
        </div>
      </div>
    </section>
  );
};
export default SponsorPerks;
