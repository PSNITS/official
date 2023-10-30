import React from 'react'
import AccordionItem from "./AccordionItem";
import { useState } from "react";



const Accordion = (props) => {

    const [clicked, setClicked] = useState("0");

    const handleToggle = (index) => {
        if (clicked === index) {
         return setClicked("0");
        }
        setClicked(index);
       };
      

  return (
    <ul className="accordion">
{props.data.map((faq, index) => (
        <AccordionItem key={index} faq={faq} onToggle={() => handleToggle(index)} active={clicked === index} />
      ))}
    </ul>
  )
}

export default Accordion