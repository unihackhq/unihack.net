import React from 'react';
import './table.scss';
import Column from './column/column';
import Row from './row/row';
import { PackageI } from './package.interface';
import { PerkI } from './perk.interface';
import data from '../../content/2020/sponsorship-packages.json';

const Table = () => {
  const packages: PackageI[] = data.packages;
  const perks: PerkI[] = data.perks;
  const totalPerks = data.perks.length;

  return (
    <div
      className="table"
      style={{ gridTemplateRows: `96px repeat(${totalPerks}, 40px) 96px` }}
    >
      <div className="rows">
        {perks.map((perk: PerkI) => {
          return (
            <Row
              key={perk.id}
              name={perk.name}
              description={perk.description}
            />
          );
        })}
      </div>
      {packages.map((tier: PackageI) => {
        const capacity = parseInt(tier.maxCapacity, 10);
        const subtitle =
          capacity > 0
            ? `Max ${capacity} sponsor${capacity > 1 ? 's' : ''}`
            : '';
        return (
          <Column
            key={tier.id}
            title={tier.name}
            subtitle={subtitle}
            footerText={tier.price}
            colour={tier.colour}
            id={tier.id}
            perks={tier.perks}
            customPerks={tier.customPerks}
            totalPerks={totalPerks}
          />
        );
      })}
    </div>
  );
};

export default Table;
