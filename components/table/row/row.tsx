import React from 'react';
import './row.scss';
import { RowI } from './row.interface';

const Row = (props: RowI) => (
  <div className="row">
    <p>{props.name}</p>
  </div>
);

export default Row;
