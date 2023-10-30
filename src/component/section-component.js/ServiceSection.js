import React from 'react'
import Btn from '../asset-component/Btn'

const ServiceSection = () => {
  return (
    <>
      <section className="service-section">
        <h4 className="service-heading reveal-text">
          Let's built something which makes impact 
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="146.376" height="82.04" viewBox="0 0 146.376 82.04">
  <g id="Group_1406" data-name="Group 1406" transform="translate(8.477 -1.029) rotate(7)">
    <path id="Path_2005" data-name="Path 2005" d="M1.034,58.64S11.787,46.076,33.712,32.732C55.613,19.4,88.955,5.279,133.876,2.752" transform="translate(0)" fill="none" stroke="#29ABE2" stroke-linecap="round" stroke-width="3"/>
    <path id="Path_2006" data-name="Path 2006" d="M-.149,58.764S10.834,45.915,32.982,32.021C55.108,18.143,88.665,3.2,133.546-.4" transform="translate(4.384 21.788) rotate(-8)" fill="none" stroke="#29ABE2" stroke-linecap="round" stroke-width="3"/>
  </g>
</svg>
          </span>
        </h4>
        <div className="service-titles">
            <h1 className="website" >WEBSITE <b>01</b> <span></span></h1>
            <h1 className="branding" >BRANDING <b>02</b> <span></span></h1>
            <h1 className="uiux" >UIUX DESIGN <b>03</b> <span></span></h1>
            <h1 className="e-commerce" >E-COMMERCE <b>04</b> <span></span></h1>
            <h1 className="digital-marketing" >DIGITAL MARKETING <b>05</b> <span></span></h1>
        </div>
        <Btn title="Know More" link="/about" />
      </section>
    </>
  )
}

export default ServiceSection