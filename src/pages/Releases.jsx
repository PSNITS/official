import React ,{useEffect} from 'react'
import Footer from '../component/Footer'
import Author from '../component/section-component.js/Author'
import ShowCaseSvg from '../component/section-component.js/ShowCaseSvg'
import OfficialNitsJourney from '../component/section-component.js/OfficialNitsJourney'
import OfficialTrailerVideo from '../component/section-component.js/OfficialTrailerVideo'
import Home from '../component/section-component.js/Home'
import OfficeImageGallary from '../component/section-component.js/OfficeImageGallary'
import Btn from '../component/asset-component/Btn'
import TechnlogyStack from "../component/section-component.js/TechnologyStack"
import DesignToolStack from '../component/section-component.js/DesignToolStack'
import FAQ from '../component/section-component.js/FAQ'

const Releases = ({children}) => {

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title="Releases"
  }, [])

  return (
    <>
<Home>


    
        <section className="hero-section">
          <h1 className="reveal-text h1">releases | free bees</h1>
          <h3 className='h3' >BE LIGHT FOR OTHERS BY GIVING BACK TO THE COMMUNITY</h3>
          <p className="reveal-text p" >We are thrilled to offer you a wide range of free resources that you can download to enhance your knowledge and skills. Our collection includes informative articles, helpful guides, useful templates, and much more. Whether you are a student, a professional, or just someone looking to learn something new, our website has something for everyone. Simply browse through our selection, choose the resources that interest you, and download them for free. We believe in making valuable information accessible to all, and we hope our free resources will empower you on your learning journey. Happy downloading!</p>
          <Btn title="HIRE US" link="/hire-us" marginTop="60px" />
        </section>
  
 
  
        <section className="graffiti-gallary">
          <div className="sm-container img one">
            <img src="https://d322zej87s3yki.cloudfront.net/graphiti/1.png"alt=""/>
          </div>
          <div className="sm-container img two">
            <img src="https://d322zej87s3yki.cloudfront.net/graphiti/2.png" alt=""/>
          </div>
          <div className="sm-container img">
            <img src="https://d322zej87s3yki.cloudfront.net/graphiti/3.png" alt=""/>
          </div>
          <div className="sm-container img">
            <img src="https://d322zej87s3yki.cloudfront.net/graphiti/4.png" alt=""/>
          </div>
          <div className="sm-container img">
            <img src="https://d322zej87s3yki.cloudfront.net/graphiti/5.png" alt=""/>
          </div>
          <div className="sm-container img">
            <img src="https://d322zej87s3yki.cloudfront.net/graphiti/6.png" alt=""/>
          </div>
          <div className="sm-container img">
            <img src="https://d322zej87s3yki.cloudfront.net/graphiti/7.png"  alt=""/>
          </div>
          <div className="sm-container img">
            <img src="https://d322zej87s3yki.cloudfront.net/graphiti/8.png" alt=""/>
          </div>
          <div className="sm-container img">
            <img src="https://d322zej87s3yki.cloudfront.net/graphiti/9.png"  alt=""/>
          </div>
          <div className="sm-container img">
            <img src="https://d322zej87s3yki.cloudfront.net/graphiti/10.png" alt=""/>
          </div>
          <div className="sm-container img">
            <img src="https://d322zej87s3yki.cloudfront.net/graphiti/11.png" alt=""/>
          </div>
          <div className="sm-container img">
            <img src="https://d322zej87s3yki.cloudfront.net/graphiti/12.png" alt=""/>
          </div>
          <div className="sm-container img">
            <img src="https://d322zej87s3yki.cloudfront.net/graphiti/13.png" alt=""/>
          </div>
          <div className="sm-container img">
            <img src="https://d322zej87s3yki.cloudfront.net/graphiti/14.png" alt=""/>
          </div>
        </section>

        <TechnlogyStack/>

        <DesignToolStack/>
  
       
  
       
        <ShowCaseSvg/>

        <FAQ/>
  


       <Footer/>
</Home>
  
        
    </>
  )
}

export default Releases