
import React from 'react';
import './column.scss';

type Props = {
  title: string,
  subtitle: string,
  colour: string,
  footerText: string
};

const Column = (props: Props) => (
  <div className="column">
    <div className="column-header">
      <h3>{props.title}</h3>
      <p>{props.subtitle}</p>
    </div>
    <div className="column-divider" style={{borderTop: `4px solid ${props.colour}`}}/>
    <div className="column-content">
      hi
    </div>
    <div className="column-divider" style={{borderTop: `4px solid ${props.colour}`}}/>
    <div className="column-footer">
      <h3>{props.footerText}</h3>
    </div>
  </div>
);

export default Column;