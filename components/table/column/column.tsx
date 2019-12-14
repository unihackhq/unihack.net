import React from 'react';
import './column.scss';
import Cell from '../cell/cell';

type Props = {
  id: number;
  title: string;
  subtitle: string;
  colour: string;
  footerText: string;
  perks: number[];
  customPerks: Array<{ perkID: number; content: string }>;
  totalPerks: number;
};

const Column = (props: Props) => (
  <div className="column" style={{ gridColumn: props.id }}>
    <div className="column-header">
      <h3>{props.title}</h3>
      <p>{props.subtitle}</p>
    </div>
    <div
      className="column-divider"
      style={{ borderTop: `4px solid ${props.colour}` }}
    />
    <div className="column-content">{createCells(props)}</div>
    <div
      className="column-divider"
      style={{ borderTop: `4px solid ${props.colour}` }}
    />
    <div className="column-footer">
      <h3>{props.footerText}</h3>
    </div>
  </div>
);

const generateKey = (prefix: string, value: number) => {
  return `${prefix}-${value}`;
};

const createCells = (props: Props) => {
  const cells: JSX.Element[] = [];

  // Active perks
  props.perks.map(perk => {
    cells[perk - 1] = (
      <Cell key={generateKey(props.title, perk - 1)} checked={true} />
    );
  });

  // Custom perks
  props.customPerks.map(perk => {
    cells[perk.perkID - 1] = (
      <Cell
        key={generateKey(props.title, perk.perkID - 1)}
        content={perk.content}
      />
    );
  });

  // Inactive perks
  while (cells.length < props.totalPerks) {
    cells[cells.length] = (
      <Cell key={generateKey(props.title, cells.length + 1)} checked={false} />
    );
  }

  return cells;
};

export default Column;
