import React, { useEffect, useRef, useState } from 'react'

const OfficialTrailerVideo = () => {

  const [playedVideo,setPlayedVideo] = useState(false)

  const vidId = useRef()

  const playVideo = () =>{
    setPlayedVideo(prev => !prev)
  }

  useEffect(()=>{

    if(!playedVideo){
      vidId.current.pause()
    }else{
      vidId.current.play()
    }

  },[playedVideo])


  return (
    <>
     <section className="official-trailer-video">
          <svg className={playedVideo ? 'trailerSvg' : ""} onClick={playVideo} width="357" height="206" viewBox="0 0 357 206">
            <g id="Group_1455" data-name="Group 1455" transform="translate(-896 -8996)">
              <g id="Group_1436" data-name="Group 1436">
                <g id="Ellipse_141" data-name="Ellipse 141" transform="translate(896 8996)" fill="none" stroke="#000" strokeWidth="1">
                  <circle cx="64" cy="64" r="64" stroke="none"/>
                  <circle cx="64" cy="64" r="63.5" fill="none"/>
                </g>
                <path id="Polygon_1" data-name="Polygon 1" d="M8.387,4.779a3,3,0,0,1,5.257,0l5.942,10.8a3,3,0,0,1-2.629,4.446H5.074a3,3,0,0,1-2.629-4.446Z" transform="translate(972.026 9049.984) rotate(90)" fill="#000"/>
                <path id="Path_2000" data-name="Path 2000" d="M-15202,8425.9l82,38.368v91.572h138.255" transform="translate(16226 640)" fill="none" stroke="#000" strokeWidth="1"/>
                <circle id="Ellipse_142" data-name="Ellipse 142" cx="6" cy="6" r="6" transform="translate(1241 9190)" fill="#000"/>
                <text id="OFFICE_REEL" data-name="OFFICE REEL" transform="translate(1128 9190)" fill="#000" fontSize="15" fontFamily="SofiaPro-ExtraLight, Sofia Pro" fontWeight="200"><tspan x="0" y="0">OFFICE REEL</tspan></text>
              </g>
            </g>
          </svg>

          <video ref={vidId} onClick={playVideo}  autoplay playsinline muted loop>
        <source src={"https://d322zej87s3yki.cloudfront.net/Nits+Agency+2.mp4"} type="video/mp4"/>
        Your browser does not support HTML5 video.
      </video>  
          
        </section>
    </>
  )
}

export default OfficialTrailerVideo