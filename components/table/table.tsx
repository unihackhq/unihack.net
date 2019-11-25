import React from 'react';
import './table.scss';
import Column from './column/column';
import data from '../../content/2020/sponsorship-packages.json';

type Package = {
    name: string,
    price: string,
    colour: string,
    maxCapacity: string,
    perks: object,
    customPerks: object
};

const Table = () => {
    const packages = data.packages;
    return (
        <div>
            {packages.map((tier: Package) => {
                const capacity = parseInt(tier.maxCapacity, 10);
                const subtitle = capacity > 0 ? `Max ${capacity} sponsor${capacity > 1 ? 's' : ''}` : '';
                return (<Column key={tier.name} title={tier.name} subtitle={subtitle} footerText={tier.price} colour={tier.colour}/>);
            })}
        </div>
    );
};

export default Table;
