import React, { useEffect, useRef } from 'react'
import VideoComponent from '../asset-component/VideoComponent';

const OtherProject = () => {



  

  return (
    <>
      <section className="other-products">
        <div className="other-products-heading">
          <h2 className="reveal-text2">other projects</h2>
        </div>

        <div className="products-imgs">
          <div className="img-1 img tilt">
            <img className="tilt-product" src="https://d322zej87s3yki.cloudfront.net/produts/1.png" alt="" />
          </div>
          <div className="img-2 img tilt">
            <img className="tilt-product" src="https://d322zej87s3yki.cloudfront.net/produts/2.png" alt="" />
          </div>
          <div className="img-3 img tilt">
      <VideoComponent src="https://d322zej87s3yki.cloudfront.net/Travel+Mockup.mp4" />
          </div>
          <div className="img-4 img tilt">
            <img className="tilt-product" src="https://d322zej87s3yki.cloudfront.net/produts/4.png" alt="" />
          </div>
          <div className="img-5 img tilt">
            <img className="tilt-product" src="https://d322zej87s3yki.cloudfront.net/produts/5.png" alt="" />
          </div>
          <div className="img-6 img tilt">
      <VideoComponent src="https://d322zej87s3yki.cloudfront.net/Aghori+_+Mockup.mp4" />
          </div>
          <div className="img-7 img tilt">
            <img className="tilt-product" src="https://d322zej87s3yki.cloudfront.net/produts/7.png" alt="" />
          </div>
          <div className="img-8 img tilt">
            <img className="tilt-product" src="https://d322zej87s3yki.cloudfront.net/produts/8.png" alt="" />
          </div>
          <div className="img-9 img tilt">
      <VideoComponent src="https://d322zej87s3yki.cloudfront.net/WNW_Hero+Section+MOCKUP+VIDEO.mp4" /> 
          </div>
          <div className="img-10 img tilt">
            <img className="tilt-product" src="https://d322zej87s3yki.cloudfront.net/produts/10.png" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default OtherProject