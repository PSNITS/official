import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Testimonial = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 950, min: 750 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 750, min: 0 },
          items: 1
        }
      };

  return (
    <>
    <div className="testimoniol-section">
        <div className="testimoniol-container">


          <div className="q-svg">
          <svg xmlns="http://www.w3.org/2000/svg"  width="124" height="110" viewBox="0 0 124 110">
  <defs>
    <clipPath id="clip-path">
      <rect id="Rectangle_158" data-name="Rectangle 158" width="124" height="65" transform="translate(247 10816)" fill="#fff" opacity="0.7"/>
    </clipPath>
  </defs>
  <g id="Group_1401" data-name="Group 1401" transform="translate(-247 -10771)">
    <g id="quotenew" transform="translate(247 10763.672)">
      <path id="Path_2007" data-name="Path 2007" d="M49.8,29.032a5.96,5.96,0,0,0,3-8l-4.9-10.3a5.978,5.978,0,0,0-7.8-2.9,68.894,68.894,0,0,0-21.6,14A52.249,52.249,0,0,0,4,44.732c-2.6,8.6-4,20.3-4,35.2v30.7a6.018,6.018,0,0,0,6,6H45.3a6.018,6.018,0,0,0,6-6v-39.3a6.017,6.017,0,0,0-6-6H26.5c.2-10.1,2.6-18.2,7-24.3,3.6-4.9,9-8.9,16.3-12Zm70.6,0a5.961,5.961,0,0,0,3-8l-4.9-10.2a5.979,5.979,0,0,0-7.8-2.9,72.439,72.439,0,0,0-21.5,13.9,53.37,53.37,0,0,0-14.6,23q-3.9,12.6-3.9,35.1v30.7a6.018,6.018,0,0,0,6,6H116a6.018,6.018,0,0,0,6-6v-39.3a6.017,6.017,0,0,0-6-6H97.1c.2-10.1,2.6-18.2,7-24.3,3.6-4.9,9-8.9,16.3-12Z" fill="#1fc0e9"/>
    </g>
    <g id="Mask_Group_8" data-name="Mask Group 8" clip-path="url(#clip-path)">
      <g id="quotenew-2" data-name="quotenew" transform="translate(247 10763.672)">
        <path id="Path_2007-2" data-name="Path 2007" d="M49.8,29.032a5.96,5.96,0,0,0,3-8l-4.9-10.3a5.978,5.978,0,0,0-7.8-2.9,68.894,68.894,0,0,0-21.6,14A52.249,52.249,0,0,0,4,44.732c-2.6,8.6-4,20.3-4,35.2v30.7a6.018,6.018,0,0,0,6,6H45.3a6.018,6.018,0,0,0,6-6v-39.3a6.017,6.017,0,0,0-6-6H26.5c.2-10.1,2.6-18.2,7-24.3,3.6-4.9,9-8.9,16.3-12Zm70.6,0a5.961,5.961,0,0,0,3-8l-4.9-10.2a5.979,5.979,0,0,0-7.8-2.9,72.439,72.439,0,0,0-21.5,13.9,53.37,53.37,0,0,0-14.6,23q-3.9,12.6-3.9,35.1v30.7a6.018,6.018,0,0,0,6,6H116a6.018,6.018,0,0,0,6-6v-39.3a6.017,6.017,0,0,0-6-6H97.1c.2-10.1,2.6-18.2,7-24.3,3.6-4.9,9-8.9,16.3-12Z"/>
      </g>
    </g>
  </g>
</svg>
          </div>

        <Carousel
  swipeable={true}
  draggable={true}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={3000}
  keyBoardControl={true}
  customTransition="all .5s linear"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
<div>
<p>Nilesh is an excellent designer who knows exactly how to translate a customers wishes into incredible products. I am very happy with my finished projects and would recommend Nilesh to everyone looking for a professional design partner.</p>
          <div className="sm-container">
            <div className="client-img img">
                <img src="https://d322zej87s3yki.cloudfront.net/Group+1457%402x.png" alt=""/>
            </div>
            <div className="name-details">
                <h5>Mr. Teun</h5>
                <p>CEO & FOUNDER</p>
            </div>
            <div className="working-as-client">
            <svg xmlns="http://www.w3.org/2000/svg" width="171.155" height="51.211" viewBox="0 0 171.155 51.211">
  <g id="Group_1402" data-name="Group 1402" transform="translate(-50.675 -15.267)">
    <g id="Group_2" data-name="Group 2" transform="translate(51.425 16.017)">
      <g id="Group_1" data-name="Group 1">
        <path id="Path_5" data-name="Path 5" d="M22.6,14.328h9.554a.52.52,0,0,0,.525-.525h0a3.107,3.107,0,0,0-1.123-2.4L23.541,4.721a3.372,3.372,0,0,0-2.163-.777h0a.775.775,0,0,0-.777.777v7.612A1.994,1.994,0,0,0,22.6,14.328Z" transform="translate(7.801 -3.945)" fill="none" stroke="#1bdc77" stroke-width="1.5"/>
        <path id="Path_3" data-name="Path 3" d="M24.426,12.337v-8.4H10.672A3.37,3.37,0,0,0,7.312,7.3V42.574a3.37,3.37,0,0,0,3.36,3.36h25.2a3.37,3.37,0,0,0,3.36-3.36V17.061H29.151A4.732,4.732,0,0,1,24.426,12.337Z" transform="translate(-7.312 3.776)" fill="none" stroke="#1bdc77" stroke-width="1.5"/>
        <path id="Path_1" data-name="Path 1" d="M22.6,14.328h9.554a.52.52,0,0,0,.525-.525h0a3.107,3.107,0,0,0-1.123-2.4L23.541,4.721a3.372,3.372,0,0,0-2.163-.777h0a.775.775,0,0,0-.777.777v7.612A1.994,1.994,0,0,0,22.6,14.328Z" transform="translate(5.279 -1.423)" fill="none" stroke="#000" stroke-width="1.5"/>
        <path id="Path_2" data-name="Path 2" d="M24.426,12.337v-8.4H10.672A3.37,3.37,0,0,0,7.312,7.3V42.574a3.37,3.37,0,0,0,3.36,3.36h25.2a3.37,3.37,0,0,0,3.36-3.36V17.061H29.151A4.732,4.732,0,0,1,24.426,12.337Z" transform="translate(-3.167 0.466)" fill="none" stroke="#3826ce" stroke-width="1.5"/>
      </g>
    </g>
    <path id="Path_2018" data-name="Path 2018" d="M7.458.183a7.034,7.034,0,0,0,4.633-1.459A4.713,4.713,0,0,0,13.855-5.09a4.519,4.519,0,0,0-1.373-3.564,8.983,8.983,0,0,0-3.857-1.837A12.861,12.861,0,0,1,5.45-11.554a1.379,1.379,0,0,1-.69-1.215,1.506,1.506,0,0,1,.562-1.221,2.344,2.344,0,0,1,1.538-.464,7.691,7.691,0,0,1,4.7,1.721l1.965-2.844a9.3,9.3,0,0,0-3.04-1.7,10.747,10.747,0,0,0-3.5-.6,7.172,7.172,0,0,0-4.456,1.349A4.516,4.516,0,0,0,.745-12.7a4.456,4.456,0,0,0,1.41,3.65A11.269,11.269,0,0,0,6.616-7.153a8.345,8.345,0,0,1,2.57.928,1.464,1.464,0,0,1,.653,1.257,1.479,1.479,0,0,1-.616,1.245,2.753,2.753,0,0,1-1.691.464q-2.393,0-5.212-2.478L0-2.893A10.7,10.7,0,0,0,7.458.183Zm17.48.464A9.11,9.11,0,0,0,31.946-2.7l-2.5-2.576A5.736,5.736,0,0,1,24.756-3a4.861,4.861,0,0,1-3.571-1.471,5.288,5.288,0,0,1-1.471-3.912,5,5,0,0,1,1.556-3.864,5.343,5.343,0,0,1,3.754-1.434,5.7,5.7,0,0,1,4.6,2.295l2.417-2.747a9.211,9.211,0,0,0-7.19-3.271,8.968,8.968,0,0,0-6.506,2.594,8.673,8.673,0,0,0-2.661,6.476A8.615,8.615,0,0,0,18.3-1.9,9.112,9.112,0,0,0,24.939.647ZM42.651-9.229l-3.418-4.9.964-.024q.6,0,1.379.049a4.5,4.5,0,0,1,1.477.342,2.229,2.229,0,0,1,1.025,2.051,2.891,2.891,0,0,1-.745,2.1A1.948,1.948,0,0,1,42.651-9.229ZM49.133-.012q-2.222-3.125-4.419-6.25a5.647,5.647,0,0,0,3.381-5.6A5.474,5.474,0,0,0,46.289-16.1,6.236,6.236,0,0,0,42.3-17.468H33.875v2.49q.586.854,4.2,6.018h-4.2V-.012h3.894V-5.591h2.649l.366.537h.049l3.5,5.042Zm5.725,0V-17.456H50.964V-.012Zm10.864-8.9-3.638-5.212h.586a13.682,13.682,0,0,1,1.471.085,3.364,3.364,0,0,1,1.5.549,2.6,2.6,0,0,1,.916,2.136v.732a2.623,2.623,0,0,1-.7,1.575A1.046,1.046,0,0,1,65.723-8.911Zm-5.139,8.9V-4.883H62.9q3.87,0,5.762-1.5a6.486,6.486,0,0,0,1.917-4.736,6.744,6.744,0,0,0-1.868-4.785q-1.794-1.526-5.664-1.562h-6.36v2.49L61.4-8.252H56.689v8.24Zm20.667,0V-14.1h4.944v-3.369H72.412V-14.1h4.944V-.012ZM100.61,0V-3.442H91.919V-7.068h8.691v-3.32H96.143l-3.369-3.589h7.837v-3.467H88.025v3.467l3.369,3.589H88.025V0ZM108.8-3.467h-2.466V-14.075h2.173a6.125,6.125,0,0,1,4.4,1.385,5.236,5.236,0,0,1,1.434,3.949,5.13,5.13,0,0,1-1.434,3.925A5.772,5.772,0,0,1,108.8-3.467Zm-.4,3.442q5,0,7.434-2.368a8.586,8.586,0,0,0,2.429-6.445,8.169,8.169,0,0,0-2.5-6.348q-2.5-2.283-7.159-2.283h-6.165V-.024Z" transform="translate(103.568 41.982)" fill="#3f2ece"/>
    <path id="Path_6" data-name="Path 6" d="M7.526,2.127a4.038,4.038,0,0,1-2.5,1.152c-1.9,0-3.2-1.376-3.2-3.9A2.963,2.963,0,0,1,4.265-3.811c1.615,0,2.094,2.034,2.094,2.363a.563.563,0,0,0,.479.209A.592.592,0,0,0,7.466-1.9,2.9,2.9,0,0,0,4.4-4.245,3.78,3.78,0,0,0,.6-.221,4.125,4.125,0,0,0,4.654,3.922a4.721,4.721,0,0,0,3.141-1.5ZM16.306-4.3A3.972,3.972,0,0,0,12.342-.176a3.985,3.985,0,0,0,3.964,4.143A3.987,3.987,0,0,0,20.285-.176,3.975,3.975,0,0,0,16.306-4.3Zm.209,7.868c-1.406,0-2.812-1.511-2.977-3.665S14.646-3.8,16.112-3.8c1.541,0,2.752,1.391,2.947,3.545S17.892,3.563,16.516,3.563ZM31.728-1.448c0-1.96-.868-2.827-2.438-2.827A4.043,4.043,0,0,0,26.552-2.7L26.4-4.17l-1.511.194V-3.8c.509,0,.688.553.688,1.062v5c0,.6-.254,1.391-.763,1.391v.179h2.5V3.653c-.509,0-.763-.838-.763-1.391V-2.076A3.7,3.7,0,0,1,29.14-3.5c.927,0,1.615.509,1.615,2.049v3.71c0,.658-.254,1.391-.763,1.391v.179h2.5V3.653c-.494,0-.763-.7-.763-1.391Zm6.567-.912a1.582,1.582,0,0,1,1.63-1.526c1.167,0,1.571,1.5,1.571,1.765a.584.584,0,0,0,.733-.224c.568-.673-.643-1.96-2.154-1.96-1.331,0-2.648.823-2.648,2.109,0,2.633,4.263,2.438,4.263,4.173a1.653,1.653,0,0,1-1.705,1.376A2.226,2.226,0,0,1,37.726.931s-.763-.03-.763.987c0,.868,1.361,2.019,2.767,2.019,1.481,0,2.827-.658,2.827-2.154C42.558-.565,38.295-.535,38.295-2.36Zm9.169-.269V1.006c0,2.124.957,2.9,2.438,2.9a4.45,4.45,0,0,0,2.573-1.182V2.95a.894.894,0,0,0,.808.883h.927V3.653c-.509,0-.763-.688-.763-1.286V-4.17l-1.436.224v.179c.509,0,.464.464.464,1.137V1.888a3.6,3.6,0,0,1-2.319,1.436c-.7,0-1.72-.344-1.72-2.319V-4.17L47-3.946v.179C47.494-3.766,47.464-3.347,47.464-2.629Zm13.044-5.1-1.81.464v.179c.509,0,.838.553.838,1.062V2.292c0,.643-.329,1.361-.838,1.361v.179h2.648V3.653c-.509,0-.838-.658-.838-1.361Zm9.11,10.052c0,.329-.209,1.107-.972,1.107-.628,0-1.2-.733-1.2-2.109V-3.646h2.423l.15-.524h-2.5V-7.4l-.568.628C66.655-5.4,66.416-4.02,65.7-4.02v.374h.778V1.409a2.175,2.175,0,0,0,2.169,2.5c.883,0,1.855-.628,1.855-1.256,0-.284-.1-.6-.464-.6A.541.541,0,0,0,69.617,2.322Zm11.428.045V-1.851A2.165,2.165,0,0,0,78.592-4.29c-1.63,0-2.887,1.062-2.887,1.974a.591.591,0,0,0,.613.673.667.667,0,0,0,.419-.15,1.906,1.906,0,0,1,1.84-1.96A1.416,1.416,0,0,1,80.058-2.54v.449c0,1.481-4.951,1.72-4.951,4.114,0,1.421,1.286,2,2.678,2a3.389,3.389,0,0,0,2.274-.912.8.8,0,0,0,.793.718h.957V3.653C81.3,3.653,81.045,3.13,81.045,2.367ZM77.919,3.489c-.957,0-1.75-.4-1.75-1.511,0-1.361,2.692-2.154,3.889-3.007V2.232A2.977,2.977,0,0,1,77.919,3.489Zm14.9-4.936c0-1.96-.868-2.827-2.438-2.827A4.043,4.043,0,0,0,87.642-2.7l-.15-1.466-1.511.194V-3.8c.509,0,.688.553.688,1.062v5c0,.6-.254,1.391-.763,1.391v.179h2.5V3.653c-.509,0-.763-.838-.763-1.391V-2.076A3.7,3.7,0,0,1,90.23-3.5c.927,0,1.615.509,1.615,2.049v3.71c0,.658-.254,1.391-.763,1.391v.179h2.5V3.653c-.494,0-.763-.7-.763-1.391ZM104.9,2.127a4.038,4.038,0,0,1-2.5,1.152c-1.9,0-3.2-1.376-3.2-3.9a2.963,2.963,0,0,1,2.438-3.186c1.615,0,2.094,2.034,2.094,2.363a.563.563,0,0,0,.479.209.592.592,0,0,0,.628-.658,2.9,2.9,0,0,0-3.066-2.348,3.78,3.78,0,0,0-3.8,4.024,4.125,4.125,0,0,0,4.054,4.143,4.721,4.721,0,0,0,3.141-1.5Zm10.112-6.3v.179c.673.045.643.9.419,1.586l-1.675,5.041-2.453-5.19c-.284-.6-.15-1.406.4-1.436V-4.17h-2.842v.179c.509,0,1.047.883,1.346,1.436l3.1,6.342-.553,1.5s-.568,1.391-1.466,1.391a1.142,1.142,0,0,1-1.242-1.122c0-.3.165-.613.165-.808s-.1-.419-.359-.419A1.022,1.022,0,0,0,109,5.433a2.014,2.014,0,0,0,2.139,1.795c1.167,0,1.87-1.331,2.094-1.945L116.122-2.7c.269-.763.524-1.286.927-1.286V-4.17Z" transform="translate(104.683 56.597)" fill="#009848"/>
  </g>
</svg>
              
            </div>
            <div className="rating">
              <h4>5/5</h4>
              <div className="stars-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="25.842" height="24.734" viewBox="0 0 25.842 24.734">
                  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M12.976.86l-3.154,6.4L2.765,8.284a1.546,1.546,0,0,0-.855,2.637L7.015,15.9,5.808,22.924a1.545,1.545,0,0,0,2.241,1.628l6.313-3.318,6.313,3.318a1.546,1.546,0,0,0,2.241-1.628L21.709,15.9l5.106-4.975a1.546,1.546,0,0,0-.855-2.637L18.9,7.255,15.749.86a1.547,1.547,0,0,0-2.773,0Z" transform="translate(-1.441 0.001)" fill="#29abe2"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="25.842" height="24.734" viewBox="0 0 25.842 24.734">
                  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M12.976.86l-3.154,6.4L2.765,8.284a1.546,1.546,0,0,0-.855,2.637L7.015,15.9,5.808,22.924a1.545,1.545,0,0,0,2.241,1.628l6.313-3.318,6.313,3.318a1.546,1.546,0,0,0,2.241-1.628L21.709,15.9l5.106-4.975a1.546,1.546,0,0,0-.855-2.637L18.9,7.255,15.749.86a1.547,1.547,0,0,0-2.773,0Z" transform="translate(-1.441 0.001)" fill="#29abe2"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="25.842" height="24.734" viewBox="0 0 25.842 24.734">
                  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M12.976.86l-3.154,6.4L2.765,8.284a1.546,1.546,0,0,0-.855,2.637L7.015,15.9,5.808,22.924a1.545,1.545,0,0,0,2.241,1.628l6.313-3.318,6.313,3.318a1.546,1.546,0,0,0,2.241-1.628L21.709,15.9l5.106-4.975a1.546,1.546,0,0,0-.855-2.637L18.9,7.255,15.749.86a1.547,1.547,0,0,0-2.773,0Z" transform="translate(-1.441 0.001)" fill="#29abe2"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="25.842" height="24.734" viewBox="0 0 25.842 24.734">
                  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M12.976.86l-3.154,6.4L2.765,8.284a1.546,1.546,0,0,0-.855,2.637L7.015,15.9,5.808,22.924a1.545,1.545,0,0,0,2.241,1.628l6.313-3.318,6.313,3.318a1.546,1.546,0,0,0,2.241-1.628L21.709,15.9l5.106-4.975a1.546,1.546,0,0,0-.855-2.637L18.9,7.255,15.749.86a1.547,1.547,0,0,0-2.773,0Z" transform="translate(-1.441 0.001)" fill="#29abe2"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="25.842" height="24.734" viewBox="0 0 25.842 24.734">
                  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M12.976.86l-3.154,6.4L2.765,8.284a1.546,1.546,0,0,0-.855,2.637L7.015,15.9,5.808,22.924a1.545,1.545,0,0,0,2.241,1.628l6.313-3.318,6.313,3.318a1.546,1.546,0,0,0,2.241-1.628L21.709,15.9l5.106-4.975a1.546,1.546,0,0,0-.855-2.637L18.9,7.255,15.749.86a1.547,1.547,0,0,0-2.773,0Z" transform="translate(-1.441 0.001)" fill="#29abe2"/>
                </svg>
              </div>
            </div>
          </div>
</div>
</Carousel>
        </div>
        <div className="testimoniol-heading">
          <h4>TESTIMONIAL</h4>
          <h2>What client says<br/> about NITS 
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="146.376" height="82.04" viewBox="0 0 146.376 82.04">
  <g id="Group_1406" data-name="Group 1406" transform="translate(8.477 -1.029) rotate(7)">
    <path id="Path_2005" data-name="Path 2005" d="M1.034,58.64S11.787,46.076,33.712,32.732C55.613,19.4,88.955,5.279,133.876,2.752" transform="translate(0)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="3"/>
    <path id="Path_2006" data-name="Path 2006" d="M-.149,58.764S10.834,45.915,32.982,32.021C55.108,18.143,88.665,3.2,133.546-.4" transform="translate(4.384 21.788) rotate(-8)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="3"/>
  </g>
</svg>
          </span> </h2>
        </div>
      </div>
    </>
  )
}

export default Testimonial