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

const Column = (props: Props) => {
  const numberOfInactivePerks =
    props.totalPerks - props.perks.length - props.customPerks.length;
  const inactivePerks = [...Array(numberOfInactivePerks).keys()];

  return (
    <div
      className="column"
      style={{
        gridColumn: props.id + 1,
        gridRow: '1 / -1'
      }}
    >
      <div className="column-header">
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
      </div>
      <div
        className="column-divider"
        style={{ borderTop: `4px solid ${props.colour}` }}
      />
      <div className="column-content">
        {/* Active perks */}
        {props.perks.map(perk => {
          return <Cell key={perk} checked={true} />;
        })}

        {/* Custom perks */}
        {props.customPerks.map(perk => {
          return <Cell key={perk.perkID} content={perk.content} />;
        })}

        {/* Inactive perks */}
        {inactivePerks.map(perk => {
          return <Cell key={perk} checked={false} />;
        })}
      </div>
      <div
        className="column-divider"
        style={{ borderTop: `4px solid ${props.colour}` }}
      />
      <div className="column-footer">
        <h3>{props.footerText}</h3>
      </div>
    </div>
  );
};

export default Column;
