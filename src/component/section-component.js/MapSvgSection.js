import React, { useEffect, useRef } from 'react'

const MapSvgSection = () => {

  const videoRef = useRef();

  useEffect(()=>{
      videoRef.current.play();
  },[])

  return (
    <>
    <section className="map-svg-section">
            <div className="map-container">
            <video ref={videoRef} loop autoPlay muted id="earth" playsinline>
        <source src="https://d322zej87s3yki.cloudfront.net/Globe_by_milkinside.mp4" type="video/mp4"/>
        Your browser does not support HTML5 video.
      </video>
            </div>


            <div className="clients-counting-years">
              <h1>300+<span>Clients</span></h1>
              <h1>20<span>Country</span></h1>
              <h1>4<span>Years</span></h1>
            </div>

          </section>
    </>
  )
}

export default MapSvgSection