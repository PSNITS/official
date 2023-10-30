import React,{useEffect} from 'react'
import Footer from '../component/Footer';
import Author from '../component/section-component.js/Author';
import ShowCaseSvg from '../component/section-component.js/ShowCaseSvg';
import OfficialNitsJourney from '../component/section-component.js/OfficialNitsJourney';
import OfficialTrailerVideo from '../component/section-component.js/OfficialTrailerVideo';
import MapSvgSection from '../component/section-component.js/MapSvgSection';
import Home from '../component/section-component.js/Home';
import OfficeImageGallary from '../component/section-component.js/OfficeImageGallary';
import NitsDoes from '../component/section-component.js/NitsDoes';
import OurProcess from '../component/section-component.js/OurProcess';
import Btn from '../component/asset-component/Btn';

const About = ({children}) => {

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title="About Us"
  }, [])

  return (
    <>

<Home>
        <section className="hero-section">
          <h1 className="reveal-text h1">About us</h1>
          <h3 className='h3' >BEST CREATIVE DIGITAL AGENCY</h3>
          <p className="reveal-text p" >We are a team of passionate full stack developer, Graphic Designer, Web Developer, Brand Creator product managers, UI UX Designers and communication artists helping businesses of all sizes launch their next project.</p>
          <Btn title="HIRE US" link="/hire-us" marginTop="60px" />
        </section>

  
   
  
        <NitsDoes/>
  
        <section className="total-project">
            <div className="total-project-details">
                <div className="sm-total-project-container">
                    <div className="heading">
                        <h2>500</h2>
                        <h5>Total Projects</h5>
                    </div>
                    <p>Finished Project in domestics and overseas and some of them sittings in the folders.</p>
                </div>
                <div className="sm-total-project-container">
                    <div className="heading">
                        <h2>30+</h2>
                        <h5>Mobile Application</h5>
                    </div>
                    <p>Sales, Education , Dating , Finicial Apps Developed for Domestics & Overseas Clients.</p>
                </div>
                <div className="sm-total-project-container">
                    <div className="heading">
                        <h2>1000+</h2>
                        <h5>UI UX Projects</h5>
                    </div>
                    <p>Creative , minimal and user friendly created for our clients</p>
                </div>
                <div className="sm-total-project-container">
                    <div className="heading">
                        <h2>1000+</h2>
                        <h5>UI UX Projects</h5>
                    </div>
                    <p>We are proud to work with the various industries and making their business simple and more efficient.</p>
                </div>
            </div>
            <div className="total-project-img img">
                <img src="https://d322zej87s3yki.cloudfront.net/We-are-girl%402x.png" alt=""/>
            </div>
        </section>

        <section className="our-story">
          <div className="heading">
            <h2>OUR STORY</h2>
            <p>The best work is done by talented creative people working on project they themselves are passionate about.</p>
          </div>
          <div className="detail-container">
            <div className="sm-container">
              <h2>2017</h2>
              <p>We help brands connect with their audience using in-depth research, well-built technology and reponsive design.</p>
            </div>
            <div className="sm-container">
              <h2>2020</h2>
              <p>We make digital the starting point around which revolve creative, strategy & technology</p>
            </div>
            <div className="sm-container">
              <h2>2023</h2>
              <p>We challence team members to constantly develop new skills so that they are always gaining new perspective.</p>
            </div>
          </div>
        </section>
        <OurProcess/>
  

        <section className="startup-growth">
            <div className="heading">
                <h1>Helping Companies & Startups at all stage of growth.</h1>

                <a href="#">Get in touch</a>
            </div>
            <div className="startup-growth-container">
                <div className="sm-conatiner">
                    <h2>Launch</h2>
                    <p>Just conceived an idea, or trying to bring your innovation to the market? We help you launch while creating memorable experience for your users.</p>
                </div>
                <div className="sm-conatiner">
                    <h2>Grow</h2>
                    <p>Our user-focused approach keeps us on toes at all times. As you expand your horizon of services or optimize funnels, we work with you insuring you never hit the plateau.</p>
                </div>
                <div className="sm-conatiner">
                    <h2>Innovate</h2>
                    <p>You know the business probems, we help you just get a little closer to the solution. Together we envision the future, and incubate offerings that will capture new markets.</p>
                </div>
            </div>
        </section>

        <Author/>

        <OfficeImageGallary/>

       <OfficialTrailerVideo/>

        <OfficialNitsJourney/>

        {/* <ShowCaseSvg/> */}

       <Footer/>
       
</Home>
    

    </>
  )
}

export default About