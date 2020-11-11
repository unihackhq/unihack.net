import React from 'react';
import styles from './table.module.scss';
import Column from './column/column';
import Row from './row/row';
import { ColumnI } from './column/column.interface';
import { RowData } from './row/row.interface';

type Props = {
  columns: ColumnI[];
  rows: RowData[];
};

const Table = (props: Props) => {
  const totalRows = props.rows.length;

  return (
    <div
      className={styles.table}
      style={{ gridTemplateRows: `96px repeat(${totalRows}, 40px) 96px` }}
    >
      <div className={styles.rows}>
        {props.rows.map((row: RowData) => {
          return (
            <Row key={row.id} name={row.name} description={row.description} />
          );
        })}
      </div>
      <div className={styles.columns}>
        {props.columns.map((column: ColumnI) => {
          return (
            <Column
              key={column.id}
              title={column.title}
              subtitle={column.subtitle}
              footerText={column.footerText}
              accentColour={column.accentColour}
              id={column.id}
              cellData={column.cellData}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Table;
