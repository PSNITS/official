import React, { useEffect } from 'react'
import "./faq.css"
import Accordion from '../asset-component/Accordion';

const faqs = [
  {
    question: "HOW MUCH IT COST FOR WEBSITE DEVELOPMENT ?",
    answer:
      "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
  },
  {
    question: "DO YOU PROVIDE BRANDING ?",
    answer:
      "Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.",
  },
  {
    question: "HOW MUCH TIME IT WILL TAKE TO DEVELOP & DESIGN WEBSITE?",
    answer:
      "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
  },
  {
    question: "DO YOU DEVELOP MOBILE APP ?",
    answer:
      "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
  },
  {
    question: "CAN YOU BUILD US SHOPIFY STORE FOR CLOTHING BRAND ?",
    answer:
      "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
  },
  {
    question: "CAN YOU HELP US FOR DIGITAL MARKETING ?",
    answer:
      "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
  },
];


const FAQ = () => {


  return (
    <>

<h1 className='accordion-h1' >FAQ'S 
<span>
<svg xmlns="http://www.w3.org/2000/svg" width="146.376" height="82.04" viewBox="0 0 146.376 82.04">
  <g id="Group_1406" data-name="Group 1406" transform="translate(8.477 -1.029) rotate(7)">
    <path id="Path_2005" data-name="Path 2005" d="M1.034,58.64S11.787,46.076,33.712,32.732C55.613,19.4,88.955,5.279,133.876,2.752" transform="translate(0)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="3"/>
    <path id="Path_2006" data-name="Path 2006" d="M-.149,58.764S10.834,45.915,32.982,32.021C55.108,18.143,88.665,3.2,133.546-.4" transform="translate(4.384 21.788) rotate(-8)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="3"/>
  </g>
</svg>
</span>
</h1>

<Accordion data={faqs} />
    </>
  )
}

export default FAQ