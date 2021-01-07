import React from 'react';
import styles from './column.module.scss';
import Cell from '../cell/cell';
import { CellI } from '../cell/cell.interface';
import { ColumnI } from './column.interface';
import { H3 } from '@components/typography/typography';

const Column = (props: ColumnI) => (
  <div className={styles.column} style={{ gridColumn: props.id }}>
    <div className={styles['column-header']}>
      <H3>{props.title}</H3>
      <p>{props.subtitle}</p>
    </div>
    <div
      className={styles['column-divider']}
      style={{ borderTopColor: props.accentColour }}
    />
    <div className={styles['column-content']}>
      {createCells(props.cellData)}
    </div>
    <div
      className={styles['column-divider']}
      style={{ borderTopColor: props.accentColour }}
    />
    <div className={styles['column-footer']}>
      <H3>{props.footerText}</H3>
    </div>
  </div>
);

const createCells = (cellData: CellI[]) => {
  const cells: JSX.Element[] = [];
  cellData.map((cell: CellI, index: number) => {
    cells[index] = (
      <Cell key={cell.key} checked={cell.isChecked} content={cell.content} />
    );
  });

  return cells;
};

export default Column;
