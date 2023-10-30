import React from 'react'
import desktopSvg from "../../assets/imgs/desktop.svg"


const FeaturedProduct = (props) => {
  return (
    <section className="featured-project">
    <div className="featured-header"  >
      <h2 className="reveal-text" style={{ display: props.styles ? props.styles : ""}} >Featured project</h2>
    </div>
    <div className="featured-img img" >
    <iframe src="https://ensotyres.com/" scrolling="no"  frameborder="0"></iframe>
   <img style={{ marginTop: props.margin ? props.margin : ""}} src={desktopSvg} alt='' />
    </div>

    <div className="featured-details">
      <h1 className="reveal-text">
        Helping ensotyers <br/> to reach the next billion
      </h1>
      <p className="reveal-text">
        We have worked with ENSOTYRES since 2017, earlier days of brand. We
        have re- <br />
        design their website, and improve website user interface
        & user experience of the <br /> existing website without changing their current
        links.
      </p>
      {/* <a href="#" className="bt btn">
        <span></span><span></span><span></span><span></span>
       Read Full Case Study</a
      > */}
    </div>
  </section>
  )
}

export default FeaturedProduct