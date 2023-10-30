import React from 'react'
import OurProcessDetContainer from '../asset-component/OurProcessDetContainer'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
import { useRef,useEffect } from 'react'

const OurProcess = () => {

  const ourProcess = useRef(null)
  const processDetails = useRef(null)

  // useEffect(()=>{
  //   const triggerObject = ourProcess.current;
  //   const object = processDetails.current;

  //   gsap.to(object,{left:"-200%", duration:10, scrollTrigger:{
  //     trigger:triggerObject,
  //     scrub:  2,
  //     pin:true,
  //   }})


  // },[window.innerHeight])


  return (
    <section className='our-process' ref={ourProcess} >
      <div className="process-sphere"></div>
        <div className="heading">
            <h1>OUR process</h1>
            <p>Our agency is about people who love creating, designing and developing wow projects. we learn and grow, win and celebrate together.</p>
        </div>
        <div className="our-process-details" ref={processDetails}>
            <OurProcessDetContainer h2="Discovery Call" p="This is the phase where I dive deep into your world and get to know you. Before I can properly design your high-performing website, I need to understand you, your pain-points, and your audience." h3="01" />
            <OurProcessDetContainer h2="Research" p="This is the phase where I dive deep into your world and get to know you. Before I can properly design your high-performing website, I need to understand you, your pain-points, and your audience." h3="02" />
            <OurProcessDetContainer h2="Wire frame (lo-fi)" p="This is the phase where I dive deep into your world and get to know you. Before I can properly design your high-performing website, I need to understand you, your pain-points, and your audience." h3="03" />
            <OurProcessDetContainer h2="User Experience design" p="This is the phase where I dive deep into your world and get to know you. Before I can properly design your high-performing website, I need to understand you, your pain-points, and your audience." h3="04" />
            <OurProcessDetContainer h2="User Interface design" p="This is the phase where I dive deep into your world and get to know you. Before I can properly design your high-performing website, I need to understand you, your pain-points, and your audience." h3="05" />
            <OurProcessDetContainer h2="Development" p="This is the phase where I dive deep into your world and get to know you. Before I can properly design your high-performing website, I need to understand you, your pain-points, and your audience." h3="06" />
            <OurProcessDetContainer h2="Beta test / Quality Check" p="This is the phase where I dive deep into your world and get to know you. Before I can properly design your high-performing website, I need to understand you, your pain-points, and your audience." h3="07" />
            <OurProcessDetContainer h2="Deployment / Release / Go live" p="This is the phase where I dive deep into your world and get to know you. Before I can properly design your high-performing website, I need to understand you, your pain-points, and your audience." h3="08" />
            <OurProcessDetContainer h2="Training*" p="This is the phase where I dive deep into your world and get to know you. Before I can properly design your high-performing website, I need to understand you, your pain-points, and your audience." h3="*" />
        </div>
    </section>
  )
}

export default OurProcess