import React from 'react';
import './table.scss';
import Column from './column/column';

const Table = () => (
  <div>
    <Column title="Bronze" subtitle="" footerText="$750" colour="#FFE4C2"/>
    <Column title="Silver" subtitle="" footerText="$1,500" colour="#E4E6E9"/>
    <Column title="Gold" subtitle="max 10 sponsors" footerText="$3,000" colour="#FEE795"/>
    <Column title="Platinum" subtitle="max 2 sponsors" footerText="$10,000" colour="#A3ADB8"/>
  </div>
);

export default Table;