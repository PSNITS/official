import React,{useEffect} from 'react'
import "../assets/css/main.scss"
import "../assets/css/Responsive.scss"
import "../assets/css/btn.scss"
import Footer from '../component/Footer'
import Testimonial from '../component/section-component.js/Testimonial'
import ShowCaseSvg from '../component/section-component.js/ShowCaseSvg'
import MapSvgSection from '../component/section-component.js/MapSvgSection'
import FAQ from '../component/section-component.js/FAQ'
import Home from '../component/section-component.js/Home'
import NitsDoes from '../component/section-component.js/NitsDoes'
import { Link } from 'react-router-dom'
import OurProcess from '../component/section-component.js/OurProcess'
import ServiceSection from '../component/section-component.js/ServiceSection'
import FeaturedProduct from '../component/section-component.js/FeaturedProduct'
import OtherProject from '../component/section-component.js/OtherProject'
import Btn from '../component/asset-component/Btn'
import Faq2 from '../component/section-component.js/Faq2'


const Main = ({children}) => {

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title="Nilesh It Solution"
  }, [])

  return (
    <>

<Home>
      <section className="hero-section" id='hero' >
        <h1 className="reveal-text h1">WE DESIGN PRODUCTS THAT INCREASE BUSINESS.</h1>
        <Btn title="HIRE US" link="/hire-us" marginTop="60px" marginBottom="0px" />
      </section>

    <ServiceSection/>

  <FeaturedProduct/>

    <NitsDoes/>

    <OtherProject/>

          <OurProcess/>

          <MapSvgSection/>

    <Testimonial/>

      <FAQ/>
      {/* <Faq2/> */}
      <ShowCaseSvg/>

    <Footer/>
      
    </Home>

    

    </>
  )
}

export default Main