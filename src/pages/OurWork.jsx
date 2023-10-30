import React from 'react'
import "../assets/css/main.scss"
import Home from '../component/section-component.js/Home'
import NitsDoes from '../component/section-component.js/NitsDoes'
import OtherProject from '../component/section-component.js/OtherProject'
import FAQ from '../component/section-component.js/FAQ'
import Footer from '../component/Footer'
import FeaturedProduct from '../component/section-component.js/FeaturedProduct'

const OurWork = () => {
  return (
    <>
    <Home>
    <section className="hero-section">
          <h1 className="reveal-text h1">our work</h1>
          <h3 className='h3' >GOOD DESIGN IS GOOD BUSINESS</h3>
          <p className="reveal-text p" >We are a team of passionate full stack developer, Graphic Designer, Web Developer, Brand Creator product managers, UI UX Designers and communication artists helping businesses of all sizes launch their next project.</p>
        <FeaturedProduct styles="none" margin="0" />
        </section>


<NitsDoes/>
    <OtherProject/>
    <FAQ/>
    <Footer/>

    </Home>
    </>
  )
}

export default OurWork