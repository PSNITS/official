import React, { useEffect } from 'react'
import "../assets/css/main.scss"
import Home from '../component/section-component.js/Home'
import BlogContainer from '../component/asset-component/BlogContainer'
import ServiceSection from '../component/section-component.js/ServiceSection'
import Footer from '../component/Footer'

const Blogs = ({children}) => {

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title="Blogs"
      }, [])
    

  return (
    <>
    <Home>
    <section className="hero-section">
          <h1 className="reveal-text h1">Blogs</h1>
          <h3 className='h3' >READ & SHARE</h3>
          <p className="reveal-text p" >We are pleased to announce various open positions in Desktop Application Development, Web Application Development and other creative services in our Company.</p>
          <div className="blogs-section">
        <BlogContainer img="https://d322zej87s3yki.cloudfront.net/blogs/1.png" />
        <BlogContainer img="https://d322zej87s3yki.cloudfront.net/blogs/2.png" />
        <BlogContainer img="https://d322zej87s3yki.cloudfront.net/blogs/bloggoogle.png" />
        <BlogContainer img="https://d322zej87s3yki.cloudfront.net/blogs/blogfacebook.png" />
        <BlogContainer img="https://d322zej87s3yki.cloudfront.net/blogs/3.png" />
        <BlogContainer img="https://d322zej87s3yki.cloudfront.net/blogs/bloginsta.png" />
        </div>
        </section>        
       

        <ServiceSection/>

        <Footer/>

    </Home>
    </>
  )
}

export default Blogs