import React from 'react';
import Table from '@components/table/table';
import { ColumnI } from '@components/table/column/column.interface';
import { CellI } from '@components/table/cell/cell.interface';
import { H2XL } from '@components/typography/typography';
import { event, AnalyticsCategory } from '@lib/gtag';
import { SPONSORSHIP_EMAIL } from '@lib/constants';

import styles from './tiers-table.module.scss';
import { Package, CustomPerk } from './types';
import data from '@content/sponsorship/sponsorship-packages.json';

const TiersTable = () => (
  <section className={styles['get-involved']}>
    <H2XL>Which tier is right for you?</H2XL>
    <p>
      One size doesn't fit all - to discuss how we can tailor your UNIHACK
      experience, email us at{' '}
      <a
        href={SPONSORSHIP_EMAIL}
        onClick={() => {
          event({
            action: 'sponsorship.tiers_table.email_link.click',
            category: AnalyticsCategory.SPONSORSHIP,
            label: 'Sponsorship - Tiers Table - Click on Email Link',
          });
        }}
      >
        sponsorship@unihack.net
      </a>{' '}
      and we'll be in touch!
    </p>
    <Table columns={transformPackages(data)} rows={data.perks} />
  </section>
);

const transformPackages = (sponsorshipData: any): ColumnI[] => {
  return sponsorshipData.packages.map((tier: Package) => {
    const capacity = parseInt(tier.maxCapacity, 10);
    const subtitle =
      capacity > 0 ? `Max ${capacity} sponsor${capacity > 1 ? 's' : ''}` : '';

    return {
      id: tier.id,
      title: tier.name,
      subtitle,
      accentColour: tier.name.toLowerCase(),
      footerText: tier.price,
      cellData: transformPackagePerks(tier, sponsorshipData.perks.length),
    };
  });
};

const transformPackagePerks = (tier: Package, totalPerks: number) => {
  const cells: CellI[] = [];

  // Active perks
  tier.perks.map((perk: number) => {
    cells[perk - 1] = {
      key: generateKey(tier.name, perk - 1),
      isChecked: true,
    };
  });

  // Custom perks
  tier.customPerks.map((perk: CustomPerk) => {
    cells[perk.perkID - 1] = {
      key: generateKey(tier.name, perk.perkID - 1),
      content: perk.content,
    };
  });

  // Inactive perks
  while (cells.length < totalPerks) {
    cells[cells.length] = {
      key: generateKey(tier.name, cells.length + 1),
      isChecked: false,
    };
  }

  return cells;
};

const generateKey = (prefix: string, value: number) => {
  return `${prefix}-${value}`;
};

export default TiersTable;
