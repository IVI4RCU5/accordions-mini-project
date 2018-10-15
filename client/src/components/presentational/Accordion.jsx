import React from 'react';
import chevron from '../../../dist/chevron.png';

const Accordion = (props) => {
  if (props.open) {
    return (
      <div className="accordion open" onClick={props.handleClick}>
        <h2>{props.header}<img src={chevron}/></h2>
        <div className="inner-text">{props.text}</div>
      </div>
    )
  } else {
    return (
      <div className="accordion closed" onClick={props.handleClick}>
        <h2>{props.header}<img src={chevron}/></h2>
      </div>
    )
  }
}

export default Accordion