import React from 'react';
import Accordion from './Accordion.jsx';

const AccordionList = ({accordions, toggleOpen}) => {
  return (
    <div>
      {accordions.map((accordion, index) => (
        <Accordion 
          open={accordion.open} 
          header={accordion.header} 
          text={accordion.text} 
          key={index} 
          handleClick={() => toggleOpen(index)}
        />
      ))}
    </div>
  )
}

export default AccordionList