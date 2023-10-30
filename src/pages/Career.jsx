import React ,{useEffect} from 'react'
import Footer from '../component/Footer';
import Author from '../component/section-component.js/Author';
import ShowCaseSvg from '../component/section-component.js/ShowCaseSvg';
import OfficialNitsJourney from '../component/section-component.js/OfficialNitsJourney';
import OfficialTrailerVideo from '../component/section-component.js/OfficialTrailerVideo';
import OfficeImageGallary from '../component/section-component.js/OfficeImageGallary';
import Home from '../component/section-component.js/Home';
import Btn from '../component/asset-component/Btn';
import JobDescription from '../component/section-component.js/JobDescription';

const Career = ({children}) => {

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title="Career"
  }, [])

  return (
    <>
      <Home>
        <section className="hero-section">
          <h1 className="reveal-text h1">Career</h1>
          <h3 className='h3' >WE ARE HIRING SKILLS</h3>
          <p className="reveal-text p" >We are pleased to announce various open positions in Desktop Application Development, Web Application Development and other creative services in our Company.</p>

          <img style={{backgroundColor:"#e4c5a6"}} className="img" src="https://d322zej87s3yki.cloudfront.net/career.png" alt=""/>

        </section>  

        <section className="career-email-section">
          <div className="heading">
            <h2>Doubts kills more dream than failure ever will</h2>
          </div>
          <div className="sm-container">
            <p>A career at Nilesh IT Solution learning and developing consistently, opportunity to apply your creative talent. We offer challenging assignments, professional and yet friendly working environment, performance v/s rewards driven opportunities and assure an excellent career growth. If you have following skills and experience and feel you are best fit, you can apply to the position you aspire.</p>
            <p>Interested candidates may apply with their recently updated CV in MS Word to hr@nileshitsolution.com.com</p>
          </div>
        </section>

        <JobDescription/>

       <Author/>

          <OfficeImageGallary/>

        <OfficialTrailerVideo/>

        <OfficialNitsJourney/>


    <Footer/>
       
    </Home>    

    
    </>
  )
}

export default Career