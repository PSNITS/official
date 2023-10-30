import React,{useEffect} from 'react'
import Footer from '../component/Footer'
import ShowCaseSvg from '../component/section-component.js/ShowCaseSvg'
import Home from '../component/section-component.js/Home'
import OurProcess from '../component/section-component.js/OurProcess'
import FAQ from '../component/section-component.js/FAQ'
import TechnologyStack from '../component/section-component.js/TechnologyStack'
import DesignToolStack from '../component/section-component.js/DesignToolStack'
import VideoComponent from '../component/asset-component/VideoComponent'

const WhatWeDo = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title="What We Do"
  }, [])

  return (
    <>
        <Home>
        <section className="hero-section">
          <h1 className="reveal-text h1">what we do.</h1>
          <h3 className='h3' >ALWAYS DELIVER MORE THAN EXPECTED</h3>
          <p className="reveal-text p" >YOU WON’T FIND ANY BEASTS OF BURDEN AT NITS. WHAT YOU WILL FIND IS A WILD AND UNSTOPPABLE FORCE DEDICATED TO STRATEGIC THINKING, GREAT DESIGN AND TECHNICAL FINESSE.</p>
          <img className="img" style={{objectFit: "cover"}} src="https://d322zej87s3yki.cloudfront.net/close-up-image-programer-working-his-desk-office.png" alt=""/>
        </section>
        <section className="section-two-img">
            <div className="overview-what-we-do">
                <h2>An overview of what we do.</h2>
                <p>We provides a wide range of diverse services to partner and clients. with our expert staff we are capable of and have fulfilled it related requirements to companies around the world.</p>
            </div>
            <div className="overview-list">
              <ul>
                <li>UI/UX Design</li>
                <li>Mobile App Design</li>
                <li>Front-End Development</li>
                <li>Website Design</li>
                <li>E-com Web App Design & Development</li>
              </ul>
              <ul>
                <li>Mobile App Development</li>
                <li>Branding / Logo Design</li>
                <li>WordPress Development</li>
                <li>Shopify Development</li>
                <li>WooCommerce/Wix/Square Space Dev.</li>
              </ul>
            </div>
        </section>
        
        <section className="design-overView">
          <div className="one-design">
            <h3>1</h3>
            <h2>UI/UX Design</h2>
            <p>WE SPECIALIZE IN BUILDING HIGH PERFORMING ECOMMERCE WEBSITES THAT ARE ENJOYABLE AND DRIVE SALES.</p>
            <div className="img">
              <img src="https://d322zej87s3yki.cloudfront.net/produts/1.png" alt="" />
            </div>
          </div>
          <div className="two-design">
            <h3>2</h3>
          <h2>E-COMMERCE</h2>
            <p>WE SPECIALIZE IN BUILDING HIGH PERFORMING ECOMMERCE WEBSITES THAT ARE ENJOYABLE AND DRIVE SALES.</p>
            <div className="img">
              <img src="https://d322zej87s3yki.cloudfront.net/produts/1.png" alt="" />
            </div>
          </div>
          <div className="three-design">
            <h3>3</h3>
            <h2>website / app design</h2>
            <p>WE SPECIALIZE IN BUILDING HIGH PERFORMING ECOMMERCE WEBSITES THAT ARE ENJOYABLE AND DRIVE SALES.</p>
           <div className="img-section">
           <div className="img">
              <img src="https://d322zej87s3yki.cloudfront.net/produts/2.png" alt="" />
            </div>
            <div className="img">
              <VideoComponent src="https://d322zej87s3yki.cloudfront.net/Travel+Mockup.mp4" />
            </div>
            <div className="img">
              <img src="https://d322zej87s3yki.cloudfront.net/produts/4.png" alt="" />
            </div>
           </div>
          </div>
          <div className="four-design">
            <h3>4</h3>
            <h2>branding</h2>
            <p>WE SPECIALIZE IN BUILDING HIGH PERFORMING ECOMMERCE WEBSITES THAT ARE ENJOYABLE AND DRIVE SALES.</p>
          <div className="img-section">
          <div className="img">
              <img src="https://d322zej87s3yki.cloudfront.net/over/shark.png" alt="" />
            </div>
            <div className="img">
              <img src="https://d322zej87s3yki.cloudfront.net/over/over2.png" alt="" />
            </div>
            <div className="img">
              <img src="https://d322zej87s3yki.cloudfront.net/over/over3.png" alt="" />
            </div>
          </div>
          </div>
          <div className="five-design">
            <h3>1</h3>
            <h2>Mobile App <br/> Development</h2>
            <p>WE IDENTIFY AND BUILD WORLD CLASS DIGITAL PRODUCTS AND SERVICES FOR THE DIGITAL AGE.</p>
            <div className="img">
              <img src="https://d322zej87s3yki.cloudfront.net/over/mindginie.png" alt="" />
            </div>
          </div>

          <div className="six-design">
            <h3>2</h3>
          <h2>DIGITAL MARKETING</h2>
            <p>WE CREATE CONCEPTS & CAMPAIGNS THAT MAKE BRANDS SUCCEED ONLINE.</p>
            <div className="img">
              <img src="https://d322zej87s3yki.cloudfront.net/produts/1.png" alt="" />
            </div>
          </div>          
        </section>

        <div className="designlastoverview">
        <div className="seven-design">
        <h3>4</h3>
            <h2>motion graphics</h2>
            <p>WE SPECIALIZE IN BUILDING HIGH PERFORMING ECOMMERCE WEBSITES THAT ARE ENJOYABLE AND DRIVE SALES.</p>
          <div className="img-section">
            <VideoComponent src="https://d322zej87s3yki.cloudfront.net/Globe_by_milkinside.mp4" />
          </div>
          </div>
        </div>

        <OurProcess/>
        
        <TechnologyStack/>

        <DesignToolStack/>
  
        <ShowCaseSvg/>

        <FAQ/>

    <Footer/>
 </Home>
      
    </>
  )
}

export default WhatWeDo