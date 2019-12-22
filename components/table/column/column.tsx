import React from 'react';
import './column.scss';
import Cell from '../cell/cell';
import { CellI } from '../cell/cell.interface';
import { ColumnI } from './column.interface';

const Column = (props: ColumnI) => (
  <div className="column" style={{ gridColumn: props.id }}>
    <div className="column-header">
      <h3>{props.title}</h3>
      <p>{props.subtitle}</p>
    </div>
    <div
      className="column-divider"
      style={{ borderTopColor: props.accentColour }}
    />
    <div className="column-content">{createCells(props.cellData)}</div>
    <div
      className="column-divider"
      style={{ borderTopColor: props.accentColour }}
    />
    <div className="column-footer">
      <h3>{props.footerText}</h3>
    </div>
  </div>
);

const createCells = (cellData: CellI[]) => {
  console.log(cellData);
  const cells: JSX.Element[] = [];
  cellData.map((cell: CellI, index: number) => {
    cells[index] = (
      <Cell key={cell.key} checked={cell.isChecked} content={cell.content} />
    );
  });

  return cells;
};

export default Column;
