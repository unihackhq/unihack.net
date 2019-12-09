import React from 'react';
import './row.scss';
import { PerkI } from '../perk.interface';

const Row = (props: PerkI) => (
  <div className="row">
    <p>{props.name}</p>
  </div>
);

export default Row;
