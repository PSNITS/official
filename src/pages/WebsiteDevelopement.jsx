import React, { useEffect } from 'react'
import Home from '../component/section-component.js/Home'
import "../assets/css/main.scss"
import { Link } from 'react-router-dom'
import FAQ from '../component/section-component.js/FAQ'
import ServiceSection from '../component/section-component.js/ServiceSection'
import Footer from '../component/Footer'
import StepsWeeksSimple from '../component/asset-component/StepsWeeksSimple'
import Btn from '../component/asset-component/Btn'

const WebsiteDevelopement = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title="Website Development"
      }, [])


  return (
    <>
    <Home>
    <section className="hero-section" id='hero' >
        <h1 className="reveal-text h1">website development</h1>
        <h3 className='h3' >DESIGN IS THE SILENT AMBASSADOR OF YOUR BRAND.</h3>
        <p className='p' >We are pleased to announce various open positions in Desktop Application Development, Web Application Development and other creative services in our Company.</p>
       <Btn title="HIRE US" link="/hire-us" marginTop="60px" />
      </section>
      
      <section className='web-dev-sec-one' >
        <div className="detailContainer">
            <h3>High-converting websites to power your business</h3>
            <p>Professional responsive website in 8 weeks - Enhance your online presence and drive results</p>
            
            <div className="list">
                <h4> <svg width="64px" height="64px" viewBox="0 -8 72 72" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs></defs><title>handshake</title><path class="cls-1" d="M64,12.78v17s-3.63.71-4.38.81-3.08.85-4.78-.78C52.22,27.25,42.93,18,42.93,18a3.54,3.54,0,0,0-4.18-.21c-2.36,1.24-5.87,3.07-7.33,3.78a3.37,3.37,0,0,1-5.06-2.64,3.44,3.44,0,0,1,2.1-3c3.33-2,10.36-6,13.29-7.52,1.78-1,3.06-1,5.51,1C50.27,12,53,14.27,53,14.27a2.75,2.75,0,0,0,2.26.43C58.63,14,64,12.78,64,12.78ZM27,41.5a3,3,0,0,0-3.55-4.09,3.07,3.07,0,0,0-.64-3,3.13,3.13,0,0,0-3-.75,3.07,3.07,0,0,0-.65-3,3.38,3.38,0,0,0-4.72.13c-1.38,1.32-2.27,3.72-1,5.14s2.64.55,3.72.3c-.3,1.07-1.2,2.07-.09,3.47s2.64.55,3.72.3c-.3,1.07-1.16,2.16-.1,3.46s2.84.61,4,.25c-.45,1.15-1.41,2.39-.18,3.79s4.08.75,5.47-.58a3.32,3.32,0,0,0,.3-4.68A3.18,3.18,0,0,0,27,41.5Zm25.35-8.82L41.62,22a3.53,3.53,0,0,0-3.77-.68c-1.5.66-3.43,1.56-4.89,2.24a8.15,8.15,0,0,1-3.29,1.1,5.59,5.59,0,0,1-3-10.34C29,12.73,34.09,10,34.09,10a6.46,6.46,0,0,0-5-2C25.67,8,18.51,12.7,18.51,12.7a5.61,5.61,0,0,1-4.93.13L8,10.89v19.4s1.59.46,3,1a6.33,6.33,0,0,1,1.56-2.47,6.17,6.17,0,0,1,8.48-.06,5.4,5.4,0,0,1,1.34,2.37,5.49,5.49,0,0,1,2.29,1.4A5.4,5.4,0,0,1,26,34.94a5.47,5.47,0,0,1,3.71,4,5.38,5.38,0,0,1,2.39,1.43,5.65,5.65,0,0,1,1.48,4.89,0,0,0,0,1,0,0s.8.9,1.29,1.39a2.46,2.46,0,0,0,3.48-3.48s2,2.48,4.28,1c2-1.4,1.69-3.06.74-4a3.19,3.19,0,0,0,4.77.13,2.45,2.45,0,0,0,.13-3.3s1.33,1.81,4,.12c1.89-1.6,1-3.43,0-4.39Z"></path></g></svg> Persuade people to act</h4>
                <h4> <svg fill="#000000" width="64px" height="64px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" class="icon"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path> </g></svg> Reach a wider audience</h4>
                <h4> <svg fill="#000000" width="64px" height="64px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" class="icon"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path> </g></svg> Strengthen company messaging</h4>
                <h4> <svg fill="#000000" width="64px" height="64px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" class="icon"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path> </g></svg> Increase conversion</h4>
            </div>

        </div>
        <div className="img">
          <img src="https://d322zej87s3yki.cloudfront.net/websitedevelopment.png" alt="" />
        </div>
      </section>

      <section className="web-dev-sec-two">
        <h3>Developing websites is about so much more than marketing. It’s also about aesthetics. For us, your site is the face of your company. <br/> Let’s make it stunning.</h3>

        <a href="#">BOOK A DISCOVERY CALL</a>

        <img src="https://d322zej87s3yki.cloudfront.net/close-up-image-programer-working-his-desk-office.png" alt="" className="img" />

      </section>

      <section className="reality-check">
        <h2>reality check !</h2>
        <ul>
            <li>You can’t seem to crack exponential growth.</li>
            <li>Your competitors have better websites than you.</li>
            <li>Your customers can’t find you.</li>
            <li>Your customers don’t know how you can change their life.</li>
            <li>You’re giving the wrong first impression.</li>
            <li>Your website “looks good,” but simply isn’t doing its job.</li>
            <li>You want to Keep up with current design trends.</li>
            <li>Your website takes too much time load.</li>
        </ul>
      </section>

      <section className="our-solution">
        <h1 className="heading">OUR SOLUTION</h1>
        <div className="our-solution-category">
            <div className="sol-container">
                <div className="img">
                <svg xmlns="http://www.w3.org/2000/svg" id="Capa_2" data-name="Capa 2" width="97.144" height="158.307" viewBox="0 0 97.144 158.307">
  <g id="design" transform="translate(0.25 0.25)">
    <path id="Path_2034" data-name="Path 2034" d="M.25,64.378V48.253L27.81,8.52H63.591L86.32,47.076v55.138L55.827,134.621H23.717l-10.557-17V86.668l40.8-38.415L18.131,59.846v4.69L9.191,67.171V64.676Z" transform="translate(-0.25 6.007)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2035" data-name="Path 2035" d="M9.191,47.564h8.941L.25,31.14h17.9V42.733" transform="translate(-0.25 23.119)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2036" data-name="Path 2036" d="M20.1,8.52,25.95,21.852,55.881,8.52,46.256,48.253H10.44L30.781,35.272" transform="translate(7.459 6.007)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2037" data-name="Path 2037" d="M21.88,14.777V.25L31.962,14.777" transform="translate(16.114 -0.25)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2038" data-name="Path 2038" d="M28.07,14.777V.25L38.135,14.777" transform="translate(20.797 -0.25)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2039" data-name="Path 2039" d="M13.54,22.077l4.181-6.007h5.972L19.53,22.077Z" transform="translate(9.804 11.718)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2040" data-name="Path 2040" d="M37.74,10.9H48.332l20.2,34.375L57.958,88.556" transform="translate(28.112 7.807)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2041" data-name="Path 2041" d="M7.6,109.319,48.4,39.954,24.024,19.49" transform="translate(5.311 14.306)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <line id="Line_45" data-name="Line 45" x1="1.862" y1="86.369" transform="translate(53.715 54.259)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2042" data-name="Path 2042" d="M88.849,88.9H5.08l6.183-8.589h71.4Z" transform="translate(3.404 60.318)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2043" data-name="Path 2043" d="M95.132,93.789H2.58L9.4,85.2H88.316Z" transform="translate(1.513 64.017)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <line id="Line_46" data-name="Line 46" x2="9.678" y2="17.003" transform="translate(71.579 123.625)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <line id="Line_47" data-name="Line 47" x2="28.842" y2="40.506" transform="translate(26.734 100.122)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2044" data-name="Path 2044" d="M63.185,93.173l-31.424-9.38,31.424-17.9L30.83,39.212,52.822,20.47" transform="translate(22.885 15.047)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
  </g>
</svg>
                </div>
                <h3>Strategy and design that turns visitors into clients</h3>
                <p>We don’t choose between style and substance. You can have it all. Our design team build sites that get clicks, generate leads, and look good doing it. High bounce rates are a thing of the past.</p>
            </div>

            <div className="sol-container">
                <div className="img">
                <svg xmlns="http://www.w3.org/2000/svg" width="146.994" height="91.85" viewBox="0 0 146.994 91.85">
  <g id="Capa_2" data-name="Capa 2" transform="translate(0.008 0.004)">
    <g id="design" transform="translate(0.245 0.246)">
      <path id="Path_2083" data-name="Path 2083" d="M73.382.267h29.5a2.748,2.748,0,0,1,1.485.4c1.827,1.069,3.683,2.094,5.51,3.163,2.48,1.485,4.916,2.97,7.426,4.292,1.589.861,3.1,1.842,4.678,2.748l3.936,2.228c2.064,1.188,4.114,2.421,6.178,3.609s4.277,2.391,6.386,3.609,4.277,2.7,6.55,3.772c1.485.683,1.485,1.649,1.485,2.97v16.01c0,2.569,0,5.139.119,7.693s.119,5.436.089,8.154c0,2.406-.089,4.812-.089,7.218a1.01,1.01,0,0,1-.579.98q-9.713,5.614-19.411,11.272l-15.906,9.267c-2.035,1.173-4.084,2.361-6.1,3.564a2.97,2.97,0,0,1-1.619.371H46.575A10.753,10.753,0,0,1,40.753,90C34.189,86.08,27.52,82.337,20.9,78.52l-12.1-6.98c-2.5-1.485-4.975-2.881-7.426-4.292A1.485,1.485,0,0,1,.5,65.763q0-11.525,0-23.02c0-3.49,0-6.98-.134-10.4-.089-2.183,0-4.366-.119-6.535A1.1,1.1,0,0,1,.861,24.7L5.6,21.965c2.614-1.485,5.243-2.97,7.871-4.545C15.06,16.5,16.6,15.5,18.208,14.628c2.287-1.233,4.456-2.658,6.758-3.906C27.8,9.237,30.55,7.455,33.342,5.836c2.168-1.262,4.352-2.465,6.52-3.713.728-.416,1.485-.817,2.153-1.292A3.416,3.416,0,0,1,44.124.252Zm.342,82.115H101.69a1.8,1.8,0,0,0,.951-.223l24.966-14.525c4.619-2.688,9.223-5.376,13.842-8.02a1.485,1.485,0,0,0,.906-1.485c-.089-2.6-.089-5.183-.089-7.782V27.252a1.485,1.485,0,0,0-.891-1.574c-5.6-3.238-11.124-6.49-16.649-9.639q-11.094-6.4-22.174-12.832a3.564,3.564,0,0,0-1.827-.46H45.58a2.228,2.228,0,0,0-1.233.327L33.773,9.237q-14.2,8.243-28.4,16.471a1.158,1.158,0,0,0-.668,1.2q0,4.456.089,8.777V58.337a1.084,1.084,0,0,0,.639,1.084l11.258,6.505q13.9,7.975,27.743,15.966a3.7,3.7,0,0,0,1.886.5Z" transform="translate(-0.245 -0.246)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2084" data-name="Path 2084" d="M72.245,81.56H44.829a3.7,3.7,0,0,1-1.871-.49Q29.145,73.08,15.3,65.1L4.031,58.6a1.084,1.084,0,0,1-.639-1.084q0-11.317,0-22.649,0-4.456-.089-8.777a1.158,1.158,0,0,1,.668-1.2Q18.11,16.658,32.294,8.416L42.868,2.267A2.228,2.228,0,0,1,44.1,1.94H99.245a3.564,3.564,0,0,1,1.827.46q11.065,6.431,22.174,12.832c5.525,3.193,11.05,6.4,16.6,9.565a1.485,1.485,0,0,1,.891,1.574V49.466c0,2.6,0,5.183.089,7.782a1.485,1.485,0,0,1-.906,1.485q-6.817,4.055-13.8,8.079L101.161,81.338a1.8,1.8,0,0,1-.951.223Zm.074-2.02H98.651a2.079,2.079,0,0,0,1.114-.238l19.07-11.124q8.777-5.139,17.688-10.263a1.485,1.485,0,0,0,.832-1.485V27.322a1.708,1.708,0,0,0-.98-1.753c-4.292-2.406-8.555-4.886-12.817-7.352L99.795,4.421a2.777,2.777,0,0,0-1.381-.4H45.319a1.9,1.9,0,0,0-1.025.282c-1.337.8-2.688,1.589-4.04,2.361Q23.8,16.243,7.313,25.792a1,1,0,0,0-.579,1.025c0,3.639,0,7.292.089,10.931V56.61a1.144,1.144,0,0,0,.653,1.158l11.258,6.49L44.457,79.11a2.881,2.881,0,0,0,1.485.416Z" transform="translate(1.234 0.575)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2085" data-name="Path 2085" d="M71.175,78.861H44.9a2.881,2.881,0,0,1-1.485-.416L17.694,63.593,6.407,57.1a1.144,1.144,0,0,1-.653-1.158V37.083c0-3.639,0-7.292-.089-10.931a1,1,0,0,1,.5-1.04Q22.655,15.578,39.111,5.984c1.352-.772,2.7-1.485,4.04-2.361a1.9,1.9,0,0,1,1.025-.282h52.9a2.777,2.777,0,0,1,1.381.4l23.763,13.8c4.262,2.465,8.525,4.946,12.817,7.352a1.708,1.708,0,0,1,1.054,1.708V55.707a1.485,1.485,0,0,1-.832,1.485q-8.911,5.094-17.718,10.263L98.621,78.579a2.079,2.079,0,0,1-1.114.238H71.175ZM90.646,34.306a16.471,16.471,0,0,0-8.733,2.317c-3.787,2.257-7.619,4.456-11.421,6.668C67.745,44.88,64.967,46.44,62.25,48.1c-3.98,2.465-3.921,6.743,0,9.208a15.4,15.4,0,0,0,6.015,2.2A18.342,18.342,0,0,0,80.8,57.237c2.777-1.693,5.614-3.282,8.436-4.916,3.564-2.079,7.144-4.144,10.708-6.238a7.2,7.2,0,0,0,2.124-1.842c1.812-2.376,1.233-5.243-1.485-7.144a16.2,16.2,0,0,0-9.936-2.777ZM76.685,65.212c1.8,1.04,3.475,1.99,5.124,2.97.342.193.579,0,.847-.149l12.431-7.277a.817.817,0,0,1,.98,0c.743.46,1.485.876,2.257,1.307a18.164,18.164,0,0,0,15.386,1.129,49.174,49.174,0,0,0,7.2-3.921A10.025,10.025,0,0,0,123.5,57.3a4.054,4.054,0,0,0,.208-5.941,8.658,8.658,0,0,0-2.257-1.827q-4.233-2.451-8.451-4.916a.891.891,0,0,0-1.04,0c-1.144.7-2.3,1.352-3.446,2.02l-24.3,14.124ZM51.868,19.484l4.277,1.708c2.124.817,2.213.787,3.772-.906a4.188,4.188,0,0,0-.134-6.49,10.515,10.515,0,0,0-3.3-2.228,17.362,17.362,0,0,0-17.406,1.485A7.56,7.56,0,0,0,35.487,19.8c0,1.946.149,3.891.267,5.837a4.233,4.233,0,0,1-1.485,3.832,7.649,7.649,0,0,1-8.035,1.144c-1.663-.653-1.946-1.9-.951-3.4a13.2,13.2,0,0,1,2.183-2.094l-5.272-2.673a.431.431,0,0,0-.49,0,11.659,11.659,0,0,0-3.861,3.891,4.233,4.233,0,0,0,.743,5.287,12.579,12.579,0,0,0,3.921,2.7,17.822,17.822,0,0,0,16.07-.847A9.045,9.045,0,0,0,43.3,23.865a14.317,14.317,0,0,1-.312-4.277,5.941,5.941,0,0,1,4.233-4.649,6.238,6.238,0,0,1,5.569.119,1.723,1.723,0,0,1,.564,2.97,10.634,10.634,0,0,1-1.485,1.455ZM39.734,43.841c1.767,1.025,3.4,1.96,5.005,2.97a.847.847,0,0,0,.98-.089l12.045-7,17.079-9.936a1.188,1.188,0,0,1,1.4,0c1.485.906,2.97,1.738,4.456,2.629a.891.891,0,0,0,1.054,0c1.352-.832,2.748-1.6,4.114-2.406.787-.46.787-.475,0-.921-4.931-2.941-9.891-5.807-14.9-8.733a1.9,1.9,0,0,0-2.332,0c-1.352.906-2.807,1.663-4.307,2.54,1.767,1.04,3.416,2.02,5.094,2.97.55.312.55.475,0,.787-1.485.8-2.852,1.634-4.262,2.465L44.606,41Z" transform="translate(2.378 1.255)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2086" data-name="Path 2086" d="M73.12,24.208a16.2,16.2,0,0,1,10,2.777c2.658,1.9,3.238,4.767,1.485,7.144a7.2,7.2,0,0,1-2.124,1.842c-3.564,2.094-7.144,4.158-10.708,6.238-2.822,1.634-5.659,3.223-8.436,4.916A18.342,18.342,0,0,1,50.8,49.4a15.4,15.4,0,0,1-6.015-2.2c-3.98-2.465-4.04-6.743,0-9.208,2.718-1.663,5.5-3.223,8.243-4.812,3.8-2.228,7.634-4.456,11.421-6.668A16.47,16.47,0,0,1,73.12,24.208Zm0,4.307-1,.1a10.144,10.144,0,0,0-3.936,1.812q-8.748,5.064-17.5,10.159a3.772,3.772,0,0,0-.743.535c-1.069.936-.787,2.361.683,3.1a6.238,6.238,0,0,0,6.253,0c4.753-2.7,9.475-5.48,14.213-8.228,1.812-1.054,3.639-2.079,5.436-3.178a1.8,1.8,0,0,0,0-3.356,6.178,6.178,0,0,0-3.342-.951Z" transform="translate(19.904 11.368)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2087" data-name="Path 2087" d="M53.48,51.779l7.53-4.456L85.292,33.214c1.144-.668,2.3-1.322,3.446-2.02a.891.891,0,0,1,1.04,0q4.2,2.465,8.451,4.916a8.659,8.659,0,0,1,2.257,1.827,4.055,4.055,0,0,1-.208,5.941,10.025,10.025,0,0,1-2.569,1.96,49.173,49.173,0,0,1-7.2,3.936,18.164,18.164,0,0,1-15.386-1.129c-.757-.431-1.485-.847-2.257-1.307a.817.817,0,0,0-.98,0L59.45,54.556c-.267.149-.5.342-.847.149C56.955,53.725,55.277,52.774,53.48,51.779Zm24.357-7.723c1.025.579,2.035,1.188,3.059,1.738a6.4,6.4,0,0,0,6.4,0c1.753-.951,3.46-1.99,5.183-2.97a3.4,3.4,0,0,0,.951-.772,1.485,1.485,0,0,0,0-2.079,3.757,3.757,0,0,0-.891-.713c-.95-.579-1.916-1.1-2.866-1.663a.876.876,0,0,0-1,0L78.461,43.536a1.076,1.076,0,0,0-.624.475Z" transform="translate(25.583 14.688)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2088" data-name="Path 2088" d="M48.089,17.307a10.633,10.633,0,0,0,1.485-1.485,1.723,1.723,0,0,0-.564-2.97,6.238,6.238,0,0,0-5.569-.119,5.941,5.941,0,0,0-4.233,4.649,14.317,14.317,0,0,0,.312,4.307A9.045,9.045,0,0,1,34.752,31.3a17.822,17.822,0,0,1-16.025.847A12.579,12.579,0,0,1,14.791,29.5a4.233,4.233,0,0,1-.743-5.287,11.659,11.659,0,0,1,3.861-3.891.431.431,0,0,1,.49,0l5.287,2.614a13.2,13.2,0,0,0-2.243,2.213c-1,1.485-.713,2.748.951,3.4a7.649,7.649,0,0,0,8.035-1.158,4.233,4.233,0,0,0,1.485-3.832c-.119-1.946-.267-3.891-.267-5.837a7.56,7.56,0,0,1,3.594-6.743A17.362,17.362,0,0,1,52.648,9.5a10.515,10.515,0,0,1,3.3,2.228,4.188,4.188,0,0,1,.134,6.49c-1.485,1.693-1.649,1.723-3.772.906Z" transform="translate(6.157 3.431)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2089" data-name="Path 2089" d="M28.6,38.416l4.886-2.852L54.041,23.683c1.485-.832,2.822-1.663,4.262-2.465.535-.312.535-.475,0-.787-1.678-.921-3.327-1.9-5.094-2.97,1.485-.876,2.97-1.634,4.307-2.54a1.9,1.9,0,0,1,2.332,0c4.96,2.97,9.966,5.792,14.971,8.688.772.446.772.46,0,.921-1.366.8-2.762,1.574-4.114,2.406a.891.891,0,0,1-1.054,0c-1.485-.891-2.97-1.723-4.456-2.629a1.188,1.188,0,0,0-1.4,0q-8.54,4.99-17.079,9.936l-12.045,7a.847.847,0,0,1-.98.089C32,40.376,30.367,39.441,28.6,38.416Z" transform="translate(13.512 6.68)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2090" data-name="Path 2090" d="M70.711,27.1a6.178,6.178,0,0,1,3.46.891,1.8,1.8,0,0,1,0,3.356c-1.8,1.1-3.624,2.124-5.436,3.178-4.782,2.822-9.505,5.525-14.258,8.228a6.238,6.238,0,0,1-6.253,0c-1.485-.743-1.753-2.168-.683-3.1a3.772,3.772,0,0,1,.743-.535l17.5-10.159a10.144,10.144,0,0,1,3.936-1.812Z" transform="translate(22.387 12.781)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2091" data-name="Path 2091" d="M69.88,41.926c.149-.312.416-.386.624-.5l10.218-5.941a.876.876,0,0,1,1,0c.951.564,1.916,1.084,2.866,1.663a3.758,3.758,0,0,1,.891.713,1.485,1.485,0,0,1,0,2.079,3.4,3.4,0,0,1-.951.772c-1.723,1.01-3.431,2.05-5.183,2.97a6.4,6.4,0,0,1-6.4,0C71.915,43.114,70.9,42.505,69.88,41.926Z" transform="translate(33.54 16.773)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    </g>
  </g>
</svg>
                </div>
                <h3>Strategy and design that turns visitors into clientss</h3>
                <p>We know how to make an impact. And we’ll teach you how, too. With clarity on your audience and ways to communicate with them effectively, you can stop chasing sales and start attracting the clients you want. We don’t just deliver the goods, we’ve got the strategy to back it up.</p>
            </div>

            <div className="sol-container">
                <div className="img">
                <svg xmlns="http://www.w3.org/2000/svg" id="Capa_2" data-name="Capa 2" width="116.17" height="119.875" viewBox="0 0 116.17 119.875">
  <g id="design" transform="translate(0.25 0.25)">
    <path id="Path_2092" data-name="Path 2092" d="M30.305,29.214s1.524-10.939,3.548-13.04c0,0-2.319,9.71-1.281,13.54,0,0,7.968.295,8.7-9.991S36.915,7.541,37.427,5.44c0,0-11.157,5.444-11.157,14.206S30.305,29.214,30.305,29.214Z" transform="translate(7.06 1.208)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2093" data-name="Path 2093" d="M70.908,43.181s9.056-.564,11.08.73c0,0-8.2-.282-11.119,1.281,0,0,1.076,6.4,9.479,5.367s9.082-5.482,10.862-5.418c0,0-6.2-8.1-13.258-6.674S70.908,43.181,70.908,43.181Z" transform="translate(19.591 10.44)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2094" data-name="Path 2094" d="M31.83,39.7s-7.686-4.765-8.634-6.981c0,0,6.533,4.944,9.786,5.406,0,0,2.844-5.905-4.65-9.851s-10.593-.743-12-1.819c0,0,.4,10.248,6.994,13.079S31.83,39.7,31.83,39.7Z" transform="translate(4.268 7.052)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2095" data-name="Path 2095" d="M52.524,33.561s3.843-10.376,2.985-13.181c0,0-2.562,9.658-5.278,12.541,0,0-7.173-3.484-2.972-12.912s9.556-8.7,10.094-10.8c0,0,7.289,10.043,3.177,17.78S52.524,33.561,52.524,33.561Z" transform="translate(12.587 2.267)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2096" data-name="Path 2096" d="M24.418,41.409s-9.927,4.842-11.3,7.417c0,0,8.506-5.213,12.5-5.367,0,0,2.741,7.481-6.815,11.362S5.883,54.437,4,55.577c0,0,1.7-12.3,10.043-15.013S24.418,41.409,24.418,41.409Z" transform="translate(0.804 10.79)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2097" data-name="Path 2097" d="M71.386,39.029s-.781-9.095-2.37-10.914c0,0,1.5,8.108.436,11.234,0,0-6.6-.1-6.751-8.621s4.112-9.863,3.843-11.618c0,0,8.967,4.957,8.6,12.195S71.386,39.029,71.386,39.029Z" transform="translate(17.295 5.049)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2098" data-name="Path 2098" d="M49.483,15.926S46.319,8.548,44.5,7.5c0,0,3.471,6.4,3.446,9.261,0,0-5.534,1.716-8.006-5.354s.717-9.364,0-10.734c0,0,8.864,1.678,10.542,7.827S49.483,15.926,49.483,15.926Z" transform="translate(10.632 -0.132)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2099" data-name="Path 2099" d="M52.417,10.325s.717-3.843.269-4.842a14.91,14.91,0,0,1-1.114,4.752s-2.728-.807-1.832-4.394S52.6,2.166,52.686,1.41c0,0,3.19,3.113,2.2,6.11S52.417,10.325,52.417,10.325Z" transform="translate(13.603 0.076)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2100" data-name="Path 2100" d="M13.356,18.466s-2.78-2.831-3.843-3.01c0,0,2.741,2.306,3.241,3.651,0,0-2.229,1.781-4.637-1.025S6.836,13.637,6.17,13.138c0,0,4.381-.82,6.251,1.716S13.356,18.466,13.356,18.466Z" transform="translate(1.413 3.335)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2101" data-name="Path 2101" d="M9.422,37.759S5.015,39.514,4.3,40.578c0,0,3.843-1.96,5.521-1.909,0,0,.935,3.292-3.279,4.65S1.07,42.755.25,43.178c0,0,1.127-5.2,4.778-6.1S9.422,37.759,9.422,37.759Z" transform="translate(-0.25 10.02)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2102" data-name="Path 2102" d="M10.959,55.261S8,58.963,7.948,60.218c0,0,2.331-3.587,3.843-4.394,0,0,2.459,2.4-.525,5.662s-5.124,2.254-5.572,3.036c0,0-1.614-5.124,1.114-7.686S10.959,55.261,10.959,55.261Z" transform="translate(1.146 15.153)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2103" data-name="Path 2103" d="M59.534,12.832s.948-5.124.346-6.4c0,0-.4,4.675-1.447,6.238,0,0-3.612-1.05-2.408-5.751s3.74-4.675,3.881-5.764c0,0,4.176,4.086,2.882,7.993S59.534,12.832,59.534,12.832Z" transform="translate(15.351 0.003)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2104" data-name="Path 2104" d="M70.009,20.318s3.5-3.843,3.638-5.213c0,0-2.805,3.766-4.522,4.522,0,0-2.562-2.78,1-6.149s5.7-2.1,6.315-2.908c0,0,1.4,5.662-1.768,8.3S70.009,20.318,70.009,20.318Z" transform="translate(18.85 2.649)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2105" data-name="Path 2105" d="M69.973,55.56s-.564,5.124.128,6.4c0,0,0-4.688.986-6.315,0,0,3.664.781,2.818,5.559s-3.382,5.047-3.382,6.072c0,0-4.471-3.766-3.471-7.763S69.973,55.56,69.973,55.56Z" transform="translate(18.477 15.29)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2106" data-name="Path 2106" d="M62.55,22.726s3.087-6.4,2.754-8.185c0,0-2.216,5.969-4.163,7.686,0,0-4.33-2.677-1.063-8.39s6.648-4.983,7.109-6.277c0,0,4,6.84.884,11.529S62.55,22.726,62.55,22.726Z" transform="translate(16.216 1.804)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2107" data-name="Path 2107" d="M73.646,29.075s5.034-4.957,5.329-6.789c0,0-4.086,4.893-6.4,5.79,0,0-3.19-3.971,1.806-8.262s7.9-2.421,8.775-3.484c0,0,1.473,7.8-3.01,11.144S73.646,29.075,73.646,29.075Z" transform="translate(19.787 4.268)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2108" data-name="Path 2108" d="M29.735,7.795s.487-3.471,1.127-4.137a13.168,13.168,0,0,0-.41,4.291s2.562.1,2.754-3.164S31.836.942,31.925.25c0,0-3.535,1.729-3.535,4.509S29.735,7.795,29.735,7.795Z" transform="translate(7.656 -0.25)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2109" data-name="Path 2109" d="M68.631,11.167s2.562-3.215,3.587-3.51c0,0-2.562,2.677-2.946,4.1,0,0,2.562,1.6,4.663-1.563s.9-4.714,1.46-5.29c0,0-4.6-.359-6.238,2.447S68.631,11.167,68.631,11.167Z" transform="translate(18.858 1.053)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2110" data-name="Path 2110" d="M83.36,36.755s4.086-.423,5.021.115c0,0-3.7,0-5,.769,0,0,.615,2.895,4.381,2.242s4-2.652,4.8-2.652c0,0-2.959-3.535-6.11-2.754S83.36,36.755,83.36,36.755Z" transform="translate(23.1 9.334)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2111" data-name="Path 2111" d="M83.207,49.317s4.368,2.677,4.893,3.933c0,0-3.7-2.792-5.534-3.049,0,0-1.6,3.33,2.562,5.559s5.995.423,6.789,1.025c0,0-.231-5.751-3.958-7.391S83.207,49.317,83.207,49.317Z" transform="translate(22.792 13.347)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2112" data-name="Path 2112" d="M73.537,36.273s5.585-4.291,7.455-4.381c0,0-5.393,3.382-6.623,5.611,0,0,3.5,3.7,8.429-.666s3.459-7.481,4.637-8.211c0,0-7.506-2.562-11.426,1.473S73.537,36.273,73.537,36.273Z" transform="translate(20.267 7.497)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2113" data-name="Path 2113" d="M74.708,49.84s5.034,4.932,5.342,6.776c0,0-4.1-4.88-6.482-5.777,0,0-3.177,3.971,1.819,8.249s7.891,2.4,8.775,3.459c0,0,1.46-7.788-3.036-11.119S74.708,49.84,74.708,49.84Z" transform="translate(20.069 13.555)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2114" data-name="Path 2114" d="M27.872,13.627S24.7,8.247,23.184,7.594c0,0,3.318,4.56,3.587,6.8,0,0-4.086,1.9-6.712-3.318s-.384-7.3-1.1-8.288c0,0,7.007.41,8.967,4.983S27.872,13.627,27.872,13.627Z" transform="translate(4.946 0.464)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2115" data-name="Path 2115" d="M27.374,25.587s-5.124-6.8-7.212-7.468c0,0,5.124,5.675,5.828,8.659,0,0-5.252,3.138-9.53-3.51s-1.576-9.786-2.69-11.016c0,0,9.5-.474,12.81,5.431S27.374,25.587,27.374,25.587Z" transform="translate(3.548 3.119)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2116" data-name="Path 2116" d="M19.99,35.266s-6.085-1.883-7.686-1.281c0,0,5.649,1.166,7.391,2.677,0,0-1.806,4.24-7.365,2.088S7.04,33.5,5.81,33.242c0,0,5.572-4.5,10.158-2.344S19.99,35.266,19.99,35.266Z" transform="translate(1.312 8.197)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2117" data-name="Path 2117" d="M20.83,53.788s-3.535,5.3-3.471,6.994c0,0,2.728-5.124,4.663-6.328,0,0,3.561,2.933-.077,7.686s-6.6,3.561-7.135,4.663c0,0-2.728-6.635.628-10.414S20.83,53.788,20.83,53.788Z" transform="translate(3.547 14.743)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2118" data-name="Path 2118" d="M18.628,26.929s-6.738-2.088-8.493-1.486c0,0,6.238,1.281,8.16,2.959,0,0-2,4.688-8.134,2.319S4.281,24.905,3,24.636c0,0,6.161-4.97,11.221-2.562S18.628,26.929,18.628,26.929Z" transform="translate(0.523 5.697)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2119" data-name="Path 2119" d="M44.326,89.533S50,74.943,44.569,71.1s-13.36-3.292-17.318-5.265-6.4-7.058-6.085-7.852a12.348,12.348,0,0,0,11.593,4.855c7.686-1.012,8.262-1.14,8.262-1.14s-4.56-11.362-16.665-12.912c0,0,7.391-2.4,11.3-.436s4.355,3.113,4.355,3.113.09-4.688-4.714-12.195a12.028,12.028,0,0,1-1.742-9.428s3.049,5.739,6.738,7.916c0,0,6.4-11.452,4.419-20.867,0,0,5.444,16.191,1.089,29,0,0,10.248-10.747,11.234-11.874,0,0-1.729,6.892-4.125,9.044s-5.444,8.557-4.2,13.117a94.6,94.6,0,0,0,3.33,9.658S65.436,54.653,66.96,46.9s.858-20.905,3.7-24.236c0,0,1.281,14.155,1.729,20.034.371,4.88-3.638,15.5-3.638,15.5s11.874-4.842,12.195-15.128c0,0-1.089,13.168-4.355,16,0,0,7.186,1.96,9.146.794,0,0,.346,3.843-8.775,4.061S58.839,65,57.532,72.253s1.4,17.7,1.4,17.7" transform="translate(5.619 4.425)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2120" data-name="Path 2120" d="M20.74,75.92a2.844,2.844,0,0,0,3.113,2.447c2.664-.307,2.69-1.012,4.061-.243s1.857,2.383,3.074,2.344,7.109-1.985,7.942-3.036,4.176-4.137,6.264-3.651,2.869.564,3.369.179a5.265,5.265,0,0,1,3.5-.884,2.293,2.293,0,0,0-1.96,2.562c0,2.267,1.537,5.559.871,8.147a55.594,55.594,0,0,1-3.5,9.108c-.807,1.358-.807,4.3-1.537,4.829S43.8,99.079,43.8,99.079" transform="translate(5.507 20.203)" fill="none" stroke="#1a1a1a" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2121" data-name="Path 2121" d="M19.86,83.457s4.278-4.829,6.482-4.727,4.752.538,5.572,0" transform="translate(5.26 21.799)" fill="none" stroke="#1a1a1a" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2122" data-name="Path 2122" d="M29.7,87.947s-.82-.935.461-2.139a3.715,3.715,0,0,0,1.435-2.562c.077-.576.384-4.1,1.947-5.406" transform="translate(7.951 21.549)" fill="none" stroke="#1a1a1a" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2123" data-name="Path 2123" d="M27.57,75.68s2.652-.423,3.292.179a1.742,1.742,0,0,0,2.024.346c.6-.32,2.626-1.473,3.5-1.281s2.178-.243,2.319.346" transform="translate(7.426 20.724)" fill="none" stroke="#1a1a1a" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2124" data-name="Path 2124" d="M35.38,83.484a1.821,1.821,0,0,0,2.1-1.281c.73-1.665,1.512-3.535,2.242-3.715s1.921-.141,2.165-.73,1.576-3.395,2.562-3.958" transform="translate(9.62 20.414)" fill="none" stroke="#1a1a1a" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2125" data-name="Path 2125" d="M32.27,95.321A6.994,6.994,0,0,0,34.4,91.4a5.547,5.547,0,0,1,2.844-4.33c1.076-.461,3.5-1.755,3.843-2.562s0-4.137.692-5.252a12.105,12.105,0,0,0,1.05-2.408" transform="translate(8.746 21.271)" fill="none" stroke="#1a1a1a" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2126" data-name="Path 2126" d="M38.18,92.45s-1.127-2.126-.743-3.254,2.242-3.459,2.2-4.509,0-1.857,0-1.857" transform="translate(10.176 22.951)" fill="none" stroke="#1a1a1a" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2127" data-name="Path 2127" d="M43.526,94.978a8.826,8.826,0,0,1-1.4-3.843V87.42" transform="translate(11.516 24.241)" fill="none" stroke="#1a1a1a" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2128" data-name="Path 2128" d="M48.429,93.72s-2.985-2.933-2.805-3.843a17.933,17.933,0,0,0,.6-4.483c-.256-.666-1.588-2.857-2.216-2.844" transform="translate(12.045 22.872)" fill="none" stroke="#1a1a1a" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2129" data-name="Path 2129" d="M51.659,95.192s1.473-2.408.743-4.022-2.178-2.933-2.037-4.022.5-4.932-.243-6.994-2.434-5.995-4.932-7.084" transform="translate(12.376 20.209)" fill="none" stroke="#1a1a1a" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2130" data-name="Path 2130" d="M57.984,93.48a5.892,5.892,0,0,1-2.165-3.843,4.342,4.342,0,0,0-2.7-4.022A20.739,20.739,0,0,1,49.35,82.81" transform="translate(13.545 22.946)" fill="none" stroke="#1a1a1a" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2131" data-name="Path 2131" d="M54.343,82.617s-.974.423-2.165-1.6-1.87-4.1-3.958-4.035" transform="translate(13.227 21.307)" fill="none" stroke="#1a1a1a" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2132" data-name="Path 2132" d="M75.033,85.175S72.407,80.845,68,80.666s-10.5-.871-12.105-3.33a7.237,7.237,0,0,0-5.828-3.561c-1.793.115-2.959-.7-4.868-.7" transform="translate(12.379 20.209)" fill="none" stroke="#1a1a1a" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2133" data-name="Path 2133" d="M59.683,88.392A4.663,4.663,0,0,0,58.4,84.959c-1.435-1.537-.564-3.459-1.025-4.547A13.988,13.988,0,0,0,55.75,77.85" transform="translate(15.343 21.552)" fill="none" stroke="#1a1a1a" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2134" data-name="Path 2134" d="M63.064,75.668a4.291,4.291,0,0,0-3.049.243c-1.473.769-1.614.461-2.562,0a7.481,7.481,0,0,0-5.124-1" transform="translate(14.382 20.698)" fill="none" stroke="#1a1a1a" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
    <path id="Path_2135" data-name="Path 2135" d="M70.235,75.41s-.807,2.229-2.459,2.19-4.125-1.191-5.7.282a6,6,0,0,1-3.625,1.512" transform="translate(16.102 20.866)" fill="none" stroke="#1a1a1a" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
  </g>
</svg>
                </div>
                <h3>Strategy and design that turns visitors into clients</h3>
                <p>Grow your business with a custom website designed by our expert team. Our data-driven approach ensures your website will showcase your products, set you apart from competitors, and align with your vision.</p>
            </div>

            <div className="sol-container">
                <div className="img">
                <svg xmlns="http://www.w3.org/2000/svg" width="82.641" height="147.922" viewBox="0 0 82.641 147.922">
  <g id="Capa_2" data-name="Capa 2" transform="translate(0.014 -0.027)">
    <g id="design" transform="translate(0.252 0.255)">
      <path id="Path_2045" data-name="Path 2045" d="M67.553.373C65.538,4.6,63.7,8.531,61.842,12.419Q50.261,36.7,38.727,60.986a2.448,2.448,0,0,1-2.656,1.6c-5.119-.1-10.222,0-15.581,0,1.6-3.439,3.2-6.7,4.687-9.95,8-16.925,16.173-33.85,24.188-50.807A2.288,2.288,0,0,1,51.8.357C56.915.4,62.018.373,67.553.373Z" transform="translate(11.885 -0.205)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2046" data-name="Path 2046" d="M32.035,37.44a39.77,39.77,0,0,1-2.847,3.407c-1.424,1.36-.784,2.959-.944,4.8a42.632,42.632,0,0,1,25.755,0,4.079,4.079,0,0,0-1.456-5.311l1.3-2.576a4.591,4.591,0,0,1,3.631,4.8c-.336,3.2.9,4.8,3.823,6.4A39.369,39.369,0,0,1,82.09,79.8,41.048,41.048,0,1,1,23.541,47.582a2.208,2.208,0,0,0,1.5-2.448,18.8,18.8,0,0,1,0-2.847C25.332,38.9,27.844,36.928,32.035,37.44Zm46.6,46.391a37.337,37.337,0,1,0-35.929,38.009c19.82-.416,36.457-18.029,35.929-38.025Z" transform="translate(-0.252 21.996)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2047" data-name="Path 2047" d="M2,.423A106.271,106.271,0,0,0,13.678.343c4.319-.5,6.367,1.1,8.11,5.1C27.019,17.22,32.746,28.77,38.329,40.367a3.2,3.2,0,0,1,0,3.2c-2.128,4.255-4.1,8.574-6.239,12.8a2.16,2.16,0,0,1-1.728.912,2.56,2.56,0,0,1-1.9-.976Q15.278,28.8,2.24,1.271A3.645,3.645,0,0,1,2,.423Z" transform="translate(0.797 -0.255)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2048" data-name="Path 2048" d="M39.2,115.1a34.954,34.954,0,1,1,24.754-10.243A35.1,35.1,0,0,1,39.2,115.1ZM59.212,68.272a4.415,4.415,0,0,0-.256-4.7,3.327,3.327,0,0,0-4.1-1.44c1.184,2.032,1.776,4.335,4.015,5.487.176.1.24.432.352.656l.128.16a1.087,1.087,0,0,1-.32-.112,3.3,3.3,0,0,0-3.983.24,5.231,5.231,0,0,0,5.935,2.991l.32,1.76c-1.408-1.28-2.735-1.84-4.383-.9a5.2,5.2,0,0,0,5.119,4.015l.3,2.783a3.727,3.727,0,0,0-4.319-2.336c.352,2.064.928,3.711,2.863,4.559,1.376.608,1.344.656.88,2.4-.848-1.232-1.7-2.448-3.535-2.176a4.591,4.591,0,0,0,1.92,4.991c1.184.736.88,1.392.4,2.1l-3.007-3.039a5.247,5.247,0,0,0,1.344,6.7l-.944,1.376-2.128-3.775c-1.856,2.608-1.808,4.8-.24,6.895l-1.5,1.392c.224-1.744.08-3.2-1.424-4.063a5.167,5.167,0,0,0-1.28,6.239l-1.3.848-.5-4.335c-1.936,1.328-3.3,2.528-3.2,4.319s-.8,2.208-2.144,2.5c-1.04.24-2.112.416-3.119.736-3.535,1.152-6.495-.784-9.694-1.456.592-2.783-.56-4.447-2.943-6.047l-.656,4.111c-.864-.192-1.168-.64-.88-1.744a4.127,4.127,0,0,0-1.968-5.087,9.6,9.6,0,0,0-.976,1.6,13.662,13.662,0,0,0-.352,2.192l-1.184-1.28c1.6-2.687,1.488-4.687-.448-6.655l-1.952,3.7-.944-1.5a5.183,5.183,0,0,0,1.472-6.4A11.645,11.645,0,0,0,18.74,87.2a11.614,11.614,0,0,0-1.184,1.968l-.64-1.76c2.719-2.016,3.407-3.5,2.608-6.063a9.806,9.806,0,0,0-2.016.976,9.694,9.694,0,0,0-1.456,1.728l-.16-2.064c2.991-1.312,4-2.672,3.871-5.119-1.984-.192-2.432,0-4.143,2.016l.352-2.48a5.263,5.263,0,0,0,5.119-4.031c-1.776-.9-3.2-.368-4.671,1.328l.736-2.256a5.135,5.135,0,0,0,5.855-2.847A3.311,3.311,0,0,0,18.98,68.3a2.272,2.272,0,0,1-.88.08,10.558,10.558,0,0,0,4.879-6.4,3.615,3.615,0,0,0-4.543,2.863,25.467,25.467,0,0,0-.288,3.519L16.82,70.384c-.688-2.7-.992-3.2-2.592-3.759-1.6,3.2-1.232,5.023,1.6,7.2L15.4,75.6c-.7-1.7-1.328-3.2-3.3-3.455-.864,2.815-.352,5.215,1.6,6.047a1.9,1.9,0,0,1,1.5,2.56l-3.935-2.576c-.3,4.031.992,5.807,4.319,6.495l.464,2.112c-2.224-1.744-2.751-1.92-4.3-1.456.416,3.407,2.208,5.007,5.423,4.8l.784,1.6L13.493,91.1c1.008,3.2,3.071,4.8,5.279,4.287,1.408-.288,1.408-.288,1.92.96l-4.1.528c1.856,2.975,4.1,4.047,6.111,2.959,1.136-.624,1.6-.3,2.08.48l-3.807,1.5c2.624,2.8,4.7,2.975,7.519.848l1.312.72-3.615,2.288c2.975,1.952,5.071,1.776,7.071-.192a1.6,1.6,0,0,1,1.168-.4c.9.128,1.792.4,2.783.64-3.775,2.736-3.775,2.736-3.583,3.327a2.016,2.016,0,0,0,.464-.192c3.2-2.672,6.4-3.039,9.6-.144.224.208.7.144,1.072.192l.224-.592L40.8,105.705c1.888-.336,3.407-1.488,5.023.544,1.184,1.488,4.175.992,6.031-.816l-3.823-2.192c.752-.08,1.6-.48,2.192-.192,2.8,1.6,4.447,1.36,7.071-1.36l-4.255-1.328,1.424-1.136a4.431,4.431,0,0,0,6.879-2.5l-4.655-.48c.976-.48,1.6-1.056,2.128-.992,2.943.336,4.7-.8,5.743-4.271l-4.479.768L60.94,90c3.2.384,5.343-1.6,5.327-5.359l-4.159,1.824a2.064,2.064,0,0,1,1.9-2.224c2.128-.432,3.279-3.087,2.624-6.063l-3.7,2.56V78.958c3.2-1.408,3.951-3.327,2.8-6.975a12.109,12.109,0,0,0-1.952,1.44A10.925,10.925,0,0,0,62.6,75.455c-.224-.736-.272-1.6.144-1.984,2.32-2.016,2.656-4.111.624-7.279l-2.24,3.887Z" transform="translate(1.99 26.518)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    </g>
  </g>
</svg>
                </div>
                <h3>Award winning mobile first design</h3>
                <p>We’re on a mission to create high-performing mobile experiences. We’ve even won awards for it. With the majority of web traffic coming from mobile browsers, it’s a no-brainer to build your site with this in mind.</p>
            </div>

            <div className="sol-container">
                <div className="img">
                <svg xmlns="http://www.w3.org/2000/svg" width="101.336" height="141.169" viewBox="0 0 101.336 141.169">
  <g id="Capa_2" data-name="Capa 2" transform="translate(0 0.07)">
    <g id="design" transform="translate(0.25 0.18)">
      <path id="Path_2066" data-name="Path 2066" d="M5.56,88.733v-9.85c0-5.956-.107-11.881,1.527-17.715A42.5,42.5,0,0,1,50.611,30.2c18.769.87,35.46,15.653,38.8,34.407.412,2.382.565,4.811.764,7.208" transform="translate(2.549 15.601)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2067" data-name="Path 2067" d="M22.19,39.907a33,33,0,0,1,11.331-4.032,34.3,34.3,0,0,1,39.828,33.7c0,3.894,0,7.773,0,13.24A114.337,114.337,0,0,1,70.982,108.9c-.244,1.161-.5,2.321-.779,3.467" transform="translate(11.316 18.4)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2068" data-name="Path 2068" d="M16.56,109.76a41.692,41.692,0,0,0,2.9-5.849,68.233,68.233,0,0,0,4.581-27.489q-.092-6.215,0-12.416A18.1,18.1,0,0,1,40.307,46.093,17.883,17.883,0,0,1,59.732,60.6a71.41,71.41,0,0,1,.26,11.728" transform="translate(8.348 23.972)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2069" data-name="Path 2069" d="M29.008,64.36c.153,9.468-1.038,26.878-4.688,35.7-.6,1.42-1.222,2.825-1.939,4.154" transform="translate(11.416 33.652)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2070" data-name="Path 2070" d="M83.465,89.352V75.9A48.869,48.869,0,0,0,72.684,44.164a49.861,49.861,0,0,0-20.708-15.7A53.022,53.022,0,0,0,33.65,24.83" transform="translate(17.357 12.814)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2071" data-name="Path 2071" d="M12.23,107.942a34.1,34.1,0,0,0,1.527-3.176,56.917,56.917,0,0,0,4.429-23.9,150.638,150.638,0,0,1,.29-17.226c1.833-18.1,22.418-28.588,38.316-19.761" transform="translate(6.065 21.178)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2072" data-name="Path 2072" d="M26.72,60.53a10.018,10.018,0,0,1,20.006.687c0,2.016,0,4.047,0,6.109v5.895a95.737,95.737,0,0,1-2.4,25.366,85.138,85.138,0,0,1-5.146,15.47" transform="translate(13.704 26.762)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2073" data-name="Path 2073" d="M46.42,46.9a22.754,22.754,0,0,1,5.6,12.217c.5,4.841.443,9.758.641,14.63a123.3,123.3,0,0,1-3.3,31.826c-.55,2.184-1.161,4.352-1.848,6.49" transform="translate(24.088 24.448)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2074" data-name="Path 2074" d="M.25,73.9v-.458A50.579,50.579,0,0,1,41.681,25.37" transform="translate(-0.25 13.099)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2075" data-name="Path 2075" d="M47.356,68.47V72.1a102.5,102.5,0,0,1-6.506,31.7" transform="translate(21.152 35.819)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2076" data-name="Path 2076" d="M26.47,101a64.23,64.23,0,0,0,3.467-7.636A76.678,76.678,0,0,0,34.518,73.82" transform="translate(13.572 38.639)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2077" data-name="Path 2077" d="M9.6,94.823c2.169-7.071,1.863-14.34,1.894-21.594,0-5.544-.412-11.1,1.038-16.554A34.819,34.819,0,0,1,18.793,44" transform="translate(4.679 22.92)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2078" data-name="Path 2078" d="M61.4,68.62V73c-.2,4.047-.565,8.079-1.145,12.049" transform="translate(31.379 35.898)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2079" data-name="Path 2079" d="M12.51,49.049V23.087S15.167.18,42.595.18,71.947,23.087,71.947,23.087V45.933" transform="translate(6.213 -0.18)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2080" data-name="Path 2080" d="M18.31,40.319V21.6S20.173,5.76,39.43,5.76,60.032,21.6,60.032,21.6V38.2" transform="translate(9.27 2.761)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2081" data-name="Path 2081" d="M38.909,61.393l3.375,8.277H29.41l3.054-8.72" transform="translate(15.122 31.855)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2082" data-name="Path 2082" d="M31.771,63.6a4.49,4.49,0,0,1-1.038-2.856,4.429,4.429,0,1,1,8.842,0,4.352,4.352,0,0,1-1.42,3.238" transform="translate(15.815 29.277)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    </g>
  </g>
</svg>
                </div>
                <h3>World-class security</h3>
                <p>Say goodbye to security updates, bugs and plugin maintenance. We build your site using Webflow. The leader in web security.</p>
            </div>

            <div className="sol-container">
                <div className="img">
                <svg xmlns="http://www.w3.org/2000/svg" width="203.176" height="125.515" viewBox="0 0 203.176 125.515">
  <g id="Capa_2" data-name="Capa 2" transform="translate(0.022 0.005)">
    <g id="design" transform="translate(0.236 0.251)">
      <path id="Path_2049" data-name="Path 2049" d="M83.985,11.22a5.9,5.9,0,0,1,.958.418A2,2,0,0,1,85.8,13.38v6.584c0,.488.122.592.61.592H92.99a2.073,2.073,0,0,1,1.533.557,2.015,2.015,0,0,1-1.2,3.5,4.668,4.668,0,0,1-.7,0H86.3c-.453,0-.575.122-.575.592v6.6a2.16,2.16,0,0,1-.523,1.5,2.038,2.038,0,0,1-2.142.592,2,2,0,0,1-1.393-1.742V25.293c0-.47-.1-.592-.575-.592H74.457a2.195,2.195,0,0,1-1.48-.488,2.055,2.055,0,0,1-.7-1.219.244.244,0,0,0,0-.1v-.453a.244.244,0,0,0,0-.1,2.16,2.16,0,0,1,.7-1.237,2.3,2.3,0,0,1,1.48-.488h6.584c.488,0,.592-.1.592-.592V13.432a2,2,0,0,1,.853-1.742,6.1,6.1,0,0,1,.975-.418Z" transform="translate(53.204 7.885)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2050" data-name="Path 2050" d="M51.843,34.35a15.989,15.989,0,0,0,23.462,0,19.682,19.682,0,0,1,6.323,7.838,20.065,20.065,0,0,1,1.742,7.4A7.176,7.176,0,0,1,80.3,55.983,18.079,18.079,0,0,1,72.744,59.1a42.673,42.673,0,0,1-20.483-.592A19.908,19.908,0,0,1,47.7,56.592a7.4,7.4,0,0,1-3.936-7.42A20.048,20.048,0,0,1,51.843,34.35Z" transform="translate(32.013 25.042)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2051" data-name="Path 2051" d="M72.485,33.432A12.192,12.192,0,1,1,60.292,21.24,12.192,12.192,0,0,1,72.485,33.432Z" transform="translate(35.268 15.318)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2052" data-name="Path 2052" d="M46.051,43.962A9.806,9.806,0,1,1,53,41.041a9.806,9.806,0,0,1-6.949,2.921Z" transform="translate(26.448 17.625)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2053" data-name="Path 2053" d="M72.616,43.962a9.806,9.806,0,1,1,9.736-9.771A9.806,9.806,0,0,1,72.616,43.962Z" transform="translate(46.127 17.625)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2054" data-name="Path 2054" d="M68.579,54.465c1.881-5.33.557-10.067-1.359-14.77,7.089-.261,7.507-.418,12.523-4.825a14.317,14.317,0,0,1,4.25,6.619,22.642,22.642,0,0,1,.749,4.215,5.87,5.87,0,0,1-2.7,5.539,14.108,14.108,0,0,1-6.323,2.4C73.4,53.995,71.069,54.256,68.579,54.465Z" transform="translate(49.45 25.428)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2055" data-name="Path 2055" d="M50.528,39.672c-1.933,4.772-3.24,9.51-1.393,14.718a53.493,53.493,0,0,1-5.365-.435,42.185,42.185,0,0,1-6.305-1.742,8.709,8.709,0,0,1-2.752-1.864,6.079,6.079,0,0,1-1.742-5.574,15.449,15.449,0,0,1,4.755-9.649l.348-.3A13.621,13.621,0,0,0,50.528,39.672Z" transform="translate(23.957 25.398)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2056" data-name="Path 2056" d="M22.943,10.985c-.575.644-1.184,1.271-1.742,1.916L18.38,16.175V14.66c1.48-1.289,2.978-2.543,4.494-3.78Z" transform="translate(13.222 7.633)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2057" data-name="Path 2057" d="M146.337,11.908V60.364H131.5a3.257,3.257,0,0,0-3.484,3.484V95.2q-50.6-.1-101.2,0c-5.487,0-8.448-2.978-8.448-8.5V50.367a3.727,3.727,0,0,0,1.916-2c4.023-9.6,8.169-19.159,12.192-28.669,1.986-4.685,4.006-9.336,5.992-13.934H139.144A6.967,6.967,0,0,1,144.7,8.582a21.842,21.842,0,0,1,1.637,3.327Z" transform="translate(13.215 3.835)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2058" data-name="Path 2058" d="M54.05,72.341V61.42H93.5V72.341h20.013a3.727,3.727,0,0,1,3.727,5.069,3.658,3.658,0,0,1-3.222,2.438,7.942,7.942,0,0,1-1.115,0H34.7a8.345,8.345,0,0,1-1.62,0,3.727,3.727,0,0,1,.8-7.4H54.05Z" transform="translate(21.793 45.122)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2059" data-name="Path 2059" d="M110.941,82.556c.453-1.864.923-3.745,1.393-5.608a1.2,1.2,0,0,1,.314-.54l7.368-7.368V50H109.147c-1.428,0-2.02-.592-2.02-2.055V37.114H84.814A3.257,3.257,0,0,0,81.331,40.6V84.8a3.571,3.571,0,0,0,2.735,3.9h33.285l.54-.174a3.292,3.292,0,0,0,2.195-3.257v-2.4a4.352,4.352,0,0,0-.418.383,1.411,1.411,0,0,1-.644.383l-7.594,1.881h-.54a7.157,7.157,0,0,1-.523-.505v-.366ZM89.482,55.907a1.5,1.5,0,0,1,1.271-1.062h19.63a1.62,1.62,0,1,1,0,3.222H91.224a1.585,1.585,0,0,1-1.742-2.16Zm0,8.03a1.463,1.463,0,0,1,1.341-1.028,2.474,2.474,0,0,1,.505,0h18.881a1.6,1.6,0,0,1,1.637,2.195,1.533,1.533,0,0,1-1.6,1.028H91.085a1.585,1.585,0,0,1-1.6-2.195Z" transform="translate(59.898 27.086)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2060" data-name="Path 2060" d="M108.411,54.085a1.533,1.533,0,0,1-1.6,1.028H87.649a1.585,1.585,0,0,1-1.6-2.16,1.463,1.463,0,0,1,1.341-1.028,2.474,2.474,0,0,1,.505,0h18.881a1.6,1.6,0,0,1,1.637,2.16Z" transform="translate(63.334 38.069)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2061" data-name="Path 2061" d="M108.411,49.5a1.585,1.585,0,0,1-1.6,1.01H87.649a1.585,1.585,0,0,1-1.6-2.16,1.5,1.5,0,0,1,1.271-1.062h19.63a1.585,1.585,0,0,1,1.463,2.212Z" transform="translate(63.334 34.641)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2062" data-name="Path 2062" d="M107.771,46.747H98V37.132a1.376,1.376,0,0,1,1.237.557l6.619,6.619a17.959,17.959,0,0,1,1.271,1.306A7.21,7.21,0,0,1,107.771,46.747Z" transform="translate(72.282 27.102)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2063" data-name="Path 2063" d="M124.778,56.465l-.174.192L107.639,73.639a4.352,4.352,0,0,0-.418.383,1.411,1.411,0,0,1-.644.383l-7.524,1.881h-.54a7.157,7.157,0,0,1-.523-.505v-.366l.575-2.09c.453-1.864.923-3.745,1.393-5.608a1.2,1.2,0,0,1,.314-.54l7.368-7.368,10.085-10.1a.662.662,0,0,0,.157-.157Z" transform="translate(72.274 36.317)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2064" data-name="Path 2064" d="M117.448,56.7l-6.828-6.828c.853-.871,1.742-1.742,2.6-2.647a3.484,3.484,0,0,1,4.459,0,28.465,28.465,0,0,1,2.4,2.4,3.484,3.484,0,0,1,0,4.476C119.242,55.027,118.249,55.845,117.448,56.7Z" transform="translate(81.643 33.993)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
      <path id="Path_2065" data-name="Path 2065" d="M55.074,1.555a2.735,2.735,0,0,1-.209,1.48c-.941,2.282-1.916,4.494-2.787,6.723-1.986,4.685-4.006,9.336-5.992,14.021C41.993,33.343,37.848,42.94,33.894,52.45a3.727,3.727,0,0,1-1.916,2,4.25,4.25,0,0,1-3.484.157,3.1,3.1,0,0,1-2.264-2.543c-.923-5.87-1.916-11.722-2.874-17.592a1.2,1.2,0,0,1,.261-.836c2.717-3.187,5.487-6.375,8.221-9.562l2.822-3.362c.575-.644,1.184-1.271,1.742-1.916v-.035c-1.515,1.237-3.013,2.491-4.494,3.78l-.174.157q-5.225,4.468-10.451,9.022a1.01,1.01,0,0,1-.906.244L2.96,29.041A3.1,3.1,0,0,1,.313,25.278a4.389,4.389,0,0,1,2.822-3.727Q27.693,11.083,52.269.51C53.628-.082,54.83.371,55.074,1.555Z" transform="translate(-0.236 -0.251)" fill="none" stroke="#1a1a1a" stroke-linejoin="round" stroke-width="0.5"/>
    </g>
  </g>
</svg>
                </div>
                <h3>Edit your website from anywhere with the CMS</h3>
                <p>Sharing content, adding new articles and keeping your audience engaged is crucial for building your presence and growing your business. That’s why we love the CMS. Easy to use. Fuss-free. As it should be.</p>
            </div>

        </div>
      </section>

      <section className="steps-weeks-simple">
    <div className="heading">
        <h3>10-steps. 8 weeks. Simple</h3>
        <p>Here’s a glimpse at our proven system for high-converting websites. It’s tried. It’s tested. It works. And it’s your turn to get in on it.</p>
    </div>
    
    <div className="category">
        <StepsWeeksSimple svg={<svg xmlns="http://www.w3.org/2000/svg" id="Capa_2" data-name="Capa 2" width="94.74" height="66.71" viewBox="0 0 94.74 66.71">
  <g id="Capa_3" data-name="Capa 3">
    <circle id="Ellipse_151" data-name="Ellipse 151" cx="32.69" cy="32.69" r="32.69" transform="translate(29.36 0)" fill="#dce864"/>
    <circle id="Ellipse_152" data-name="Ellipse 152" cx="24.91" cy="24.91" r="24.91" transform="translate(0.5 16.39)" fill="none" stroke="#1a1a1a" stroke-width="1"/>
    <path id="Path_2136" data-name="Path 2136" d="M92.73,19.44A13.25,13.25,0,0,1,79.48,32.69H27.62a13.25,13.25,0,0,1,0-26.5H79.48A13.25,13.25,0,0,1,92.73,19.44Z" fill="none" stroke="#1a1a1a" stroke-width="1"/>
  </g>
</svg>} h3="Strategy workshop" p="We know you’re busy building your empire, so we’ve made this workshop quick yet thorough. In just 1 hour, we’ll run through a series of questions, designed to uncover crucial insights about your ideal customer. This is the framework for everything we do, shaping the messaging, hierarchy and more." />
        <StepsWeeksSimple svg={<svg xmlns="http://www.w3.org/2000/svg" id="Capa_2" data-name="Capa 2" width="106" height="57.917" viewBox="0 0 106 57.917">
  <g id="Capa_3" data-name="Capa 3">
    <path id="Path_2138" data-name="Path 2138" d="M106,37.879A17.919,17.919,0,0,1,88.07,55.8H17.919a17.919,17.919,0,0,1,0-35.838H88.07A17.919,17.919,0,0,1,106,37.879Z" transform="translate(0 2.118)" fill="#a489dd"/>
    <path id="Path_2139" data-name="Path 2139" d="M40.556,50.572A25.286,25.286,0,0,1,40.556,0V11.061A14.225,14.225,0,1,0,54.792,25.286H65.853A25.308,25.308,0,0,1,40.556,50.572Z" transform="translate(1.621)" fill="#1a1a1a"/>
  </g>
</svg>} h3="Customer research and competitive analysis" p="Once we know who your customers are, we’ll put ourselves in their shoes. Using the data collected from our workshop, combined with our industry research, we’ll learn how your customers think, behave and communicate – and what drives them to buy. We’ll also scope out your competitors to ensure you’re a cut above the rest." />
        <StepsWeeksSimple svg={<svg xmlns="http://www.w3.org/2000/svg" width="95.35" height="54.201" viewBox="0 0 95.35 54.201">
  <g id="Capa_2" data-name="Capa 2" transform="translate(0.031 0.036)">
    <g id="Capa_3" data-name="Capa 3">
      <path id="Path_2140" data-name="Path 2140" d="M77.19,12.1a21.08,21.08,0,0,0-16.42,4.62A8,8,0,0,1,50,16.07a21.14,21.14,0,1,0-2,31,8.14,8.14,0,0,1,11,.67A21.14,21.14,0,1,0,77.19,12.1Z" fill="#71bca1"/>
      <path id="Path_2141" data-name="Path 2141" d="M58.58,6.08a11,11,0,0,1-4.15,15L16.94,42.34A11.012,11.012,0,1,1,6.08,23.18L43.57,1.93A11,11,0,0,1,58.58,6.08Z" fill="none" stroke="#1a1a1a" stroke-width="1"/>
    </g>
  </g>
</svg>} h3="Website content strategy" p="Branding is key to a successful business. We’ll help you polish your existing brand or build a new one from the ground up, meeting you wherever you’re at in your journey. We cover everything you need to create an impact and improve your brand visibility, from logo design, to style guides and digital assets." />
        <StepsWeeksSimple svg={<svg xmlns="http://www.w3.org/2000/svg" id="Capa_2" data-name="Capa 2" width="79.98" height="56.19" viewBox="0 0 79.98 56.19">
  <g id="Capa_3" data-name="Capa 3">
    <rect id="Rectangle_206" data-name="Rectangle 206" width="55.19" height="55.19" rx="10" transform="translate(0.5 0.5)" fill="none" stroke="#1a1a1a" stroke-width="1"/>
    <circle id="Ellipse_154" data-name="Ellipse 154" cx="8.52" cy="8.52" r="8.52" transform="translate(31.04 9.73)" fill="#4061b7" stroke="#1a1a1a" stroke-width="1"/>
    <circle id="Ellipse_155" data-name="Ellipse 155" cx="8.52" cy="8.52" r="8.52" transform="translate(62.44 37.07)" fill="#4061b7" stroke="#1a1a1a" stroke-width="1"/>
    <line id="Line_50" data-name="Line 50" x1="18.55" y1="16.15" transform="translate(45.98 23.85)" fill="none" stroke="#1a1a1a" stroke-width="1"/>
  </g>
</svg>} h3="Wireframe" p="This is the blueprint for your website, to ensure everything is exactly as you expect before we begin the build. It includes the structure and order of the content, the finalised copy and the strategy behind each section." />
        <StepsWeeksSimple svg={<svg xmlns="http://www.w3.org/2000/svg" id="Capa_2" data-name="Capa 2" width="83.58" height="58.79" viewBox="0 0 83.58 58.79">
  <g id="Capa_3" data-name="Capa 3">
    <rect id="Rectangle_207" data-name="Rectangle 207" width="66.77" height="50.94" rx="10" transform="translate(0 7.85)" fill="#a489dd"/>
    <circle id="Ellipse_156" data-name="Ellipse 156" cx="25.5" cy="25.5" r="25.5" transform="translate(32.08 0.5)" fill="none" stroke="#1a1a1a" stroke-width="1"/>
  </g>
</svg>} h3="Branding guidelines" p="Branding is key to a successful business. We’ll help you polish your existing brand or build a new one from the ground up, meeting you wherever you’re at in your journey. We cover everything you need to create an impact and improve your brand visibility, from logo design, to style guides and digital assets." />
        <StepsWeeksSimple svg={<svg xmlns="http://www.w3.org/2000/svg" id="Capa_2" data-name="Capa 2" width="96.1" height="56.56" viewBox="0 0 96.1 56.56">
  <g id="Capa_3" data-name="Capa 3">
    <path id="Path_2142" data-name="Path 2142" d="M0,38.86a17.7,17.7,0,0,1,17.7-17.7H76.5a17.7,17.7,0,0,1,0,35.4H17.7A17.7,17.7,0,0,1,0,38.86Z" fill="#dce864"/>
    <path id="Path_2143" data-name="Path 2143" d="M64.82,10.51a11,11,0,0,1-4.14,15L23.19,46.77A11.012,11.012,0,1,1,12.33,27.61L49.82,6.36a11,11,0,0,1,15,4.15Z" fill="none" stroke="#1a1a1a" stroke-width="1"/>
    <rect id="Rectangle_208" data-name="Rectangle 208" width="41.33" height="41.33" rx="10" transform="translate(54.27 0.5)" fill="none" stroke="#1a1a1a" stroke-width="1"/>
  </g>
</svg>} h3="Web design" p="Branding is key to a successful business. We’ll help you polish your existing brand or build a new one from the ground up, meeting you wherever you’re at in your journey. We cover everything you need to create an impact and improve your brand visibility, from logo design, to style guides and digital assets." />
        <StepsWeeksSimple svg={<svg xmlns="http://www.w3.org/2000/svg" id="Capa_2" data-name="Capa 2" width="109.24" height="71.47" viewBox="0 0 109.24 71.47">
  <g id="Capa_3" data-name="Capa 3">
    <rect id="Rectangle_209" data-name="Rectangle 209" width="55.19" height="55.19" rx="10" transform="translate(46.83 14.59)" fill="#4061b7"/>
    <rect id="Rectangle_210" data-name="Rectangle 210" width="80.52" height="50.94" rx="10" transform="translate(28.22 0.5)" fill="none" stroke="#1a1a1a" stroke-width="1"/>
    <circle id="Ellipse_157" data-name="Ellipse 157" cx="20.91" cy="20.91" r="20.91" transform="translate(0.5 29.15)" fill="none" stroke="#1a1a1a" stroke-width="1"/>
  </g>
</svg>} h3="Website development" p="Using the Webflow CMS, we’ll develop the design and create powerful templates and component structures. These can be used by your marketing team to continue growing your website and scaling your business once our job is done." />
        <StepsWeeksSimple svg={<svg xmlns="http://www.w3.org/2000/svg" width="96.237" height="68.213" viewBox="0 0 96.237 68.213">
  <g id="Capa_2" data-name="Capa 2" transform="translate(0 1.37)">
    <g id="Capa_3" data-name="Capa 3">
      <rect id="Rectangle_211" data-name="Rectangle 211" width="59.98" height="59.98" rx="10" transform="translate(96.237 57.946) rotate(171.47)" fill="#71bca1"/>
      <path id="Path_2144" data-name="Path 2144" d="M78.86,39.64A13.25,13.25,0,0,1,65.61,52.89H13.75a13.25,13.25,0,1,1,0-26.5H65.61A13.25,13.25,0,0,1,78.86,39.64Z" fill="none" stroke="#1a1a1a" stroke-width="1"/>
    </g>
  </g>
</svg>} h3="Launch your website" p="The moment we’ve all been waiting for. We connect your domain and launch your website – it’s time to go live." />
        <StepsWeeksSimple svg={<svg xmlns="http://www.w3.org/2000/svg" width="95.159" height="64.084" viewBox="0 0 95.159 64.084">
  <g id="Capa_2" data-name="Capa 2" transform="translate(0.004 0.004)">
    <g id="Capa_3" data-name="Capa 3">
      <path id="Path_2145" data-name="Path 2145" d="M.17,24.77A16.21,16.21,0,0,1,18.57,11.1l62.74,9.23a16.2,16.2,0,0,1-4.72,32.06L13.85,43.16A16.21,16.21,0,0,1,.17,24.77Z" fill="#dce864"/>
      <circle id="Ellipse_158" data-name="Ellipse 158" cx="20.91" cy="20.91" r="20.91" transform="translate(36.83 21.76)" fill="none" stroke="#1a1a1a" stroke-width="1"/>
      <path id="Path_2146" data-name="Path 2146" d="M20.47,54A29.873,29.873,0,1,1,55.69,5.74l-6.92,9.47A18.123,18.123,0,0,0,27.39,44.48Z" fill="#1a1a1a"/>
    </g>
  </g>
</svg>} h3="Install analytics and integrations" p="We don’t just get results, we track them. We install analytics to monitor web traffic over time. We’ll also help you integrate all of your favourite tools, including Mailchimp, Hubspot, Zapier and many more." />
        <StepsWeeksSimple svg={<svg xmlns="http://www.w3.org/2000/svg" width="95.763" height="55.753" viewBox="0 0 95.763 55.753">
  <g id="Capa_2" data-name="Capa 2" transform="translate(0.003 0.023)">
    <g id="Capa_3" data-name="Capa 3">
      <path id="Path_2137" data-name="Path 2137" d="M52.06.66A20.6,20.6,0,0,0,39,11a7.79,7.79,0,0,1-10,3.46,20.66,20.66,0,1,0,9.84,28.72A7.93,7.93,0,0,1,49,39.62a20.65,20.65,0,1,0,3-39Z" fill="#a489dd"/>
      <circle id="Ellipse_153" data-name="Ellipse 153" cx="24.91" cy="24.91" r="24.91" transform="translate(45.44 5.41)" fill="none" stroke="#1a1a1a" stroke-width="1"/>
    </g>
  </g>
</svg>} h3="Analyse" p="We include training for you and your team, to ensure you’re confident keeping your website content updated. We’re not going anywhere. We’re always there to provide support after launch. No matter what you need." />
    </div>

      </section>

      <FAQ/>

      <ServiceSection/>

      <Footer/>

    </Home>
    </>
  )
}

export default WebsiteDevelopement