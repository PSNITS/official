import React, { useEffect, useRef } from 'react'

const VideoComponent = (props) => {

    const vidId = useRef()

    useEffect(()=>{
        vidId.current.play()
    },[])

  return (
    <>
    <video ref={vidId}  autoplay playsinline muted loop>
        <source src={props.src} type="video/mp4"/>
        Your browser does not support HTML5 video.
      </video>  
    </>
  )
}

export default VideoComponent