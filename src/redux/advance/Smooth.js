import { useEffect } from "react";
import  Scrollbar  from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll"
import { gsap ,Power4,TweenMax,Power3,TweenLite } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


var overscrollOptions = {
    enable:true,
    effect:"bounce",
    damping:0.15,
    maxOverscroll:150
}

var options = {
    damping: 0.07,
    plugins: {
        overscroll : {...overscrollOptions}
    }
}


const Scroll = () =>{


    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        const scroller = document.querySelector('.scroller');
        // Scrollbar.use(OverscrollPlugin)
        // Scrollbar.init(document.body,options)




        const bodyScrollBar = Scrollbar.init(scroller, options);

ScrollTrigger.scrollerProxy(".scroller", {
scrollTop(value) {
  if (arguments.length) {
    bodyScrollBar.scrollTop = value;
  }
  return bodyScrollBar.scrollTop;
}
});

bodyScrollBar.addListener(ScrollTrigger.update);

ScrollTrigger.defaults({ scroller: scroller });


  gsap.registerPlugin(ScrollTrigger);
    gsap.timeline({
      scrollTrigger: {
          trigger: "footer",
          start: "top 70px", // top pasun bottom
          end: "top bottom",
          scrub:  1,
          // markers:true
      }
  })


  .to(".logo svg", {
      fill:"#fff"
  })
  gsap.timeline({
    scrollTrigger: {
      trigger: ".our-process",
      start: "top top", // top pasun bottom
      end:"+=2000",
      scrub:  1,
      pin:true,
      // markers:true
    }
  })
  
.to(".our-process .sm-container", {
  left:"-100%",
  ease:Power4
})

 
if (document.querySelector('.gsap-marker-scroller-start')) {    
const markers = gsap.utils.toArray('[class *= "gsap-marker"]'); 

bodyScrollBar.addListener(({ offset }) => {  
  gsap.set(markers, { marginTop: -offset.y })
});
}





    // magnetic button
    var magnetss = document.querySelectorAll('.bt')

    var strengths = 50
    magnetss.forEach( (magneti) => {
    magneti.addEventListener('mousemove', moveMagnet );
    magneti.addEventListener('mouseout', function(event) {
      TweenMax.to( event.currentTarget, 4, {x: 0, y: 0, ease: Power4.ease})
    } );
    });
    
    function moveMagnet(event) {
    var magnetButtons = event.currentTarget
    var bounding = magnetButtons.getBoundingClientRect()
    TweenMax.to( magnetButtons, 1, {
      x: ((( event.clientX - bounding.left)/magnetButtons.offsetWidth) - 0.5) * strengths,
      y: ((( event.clientY - bounding.top)/magnetButtons.offsetHeight) - 0.5) * strengths,
      ease: Power4.easeOut
    })
    }
    
    // magnetic button end

    gsap.set(".img", {y: 100});

ScrollTrigger.batch(".img", {
  onEnter: batch => gsap.to(batch, {opacity: 1, y:0, stagger: {each: 0.15, grid: [1, 3]}, overwrite: true}),
  onLeave: batch => gsap.set(batch, {opacity: 0,y:-200, overwrite: true}),
  onEnterBack: batch => gsap.to(batch, {opacity: 1,y:0, stagger: 0.15, overwrite: true}),
  onLeaveBack: batch => gsap.set(batch, {opacity: 0, y:200, overwrite: true})
});
ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".img", {y: 0}));




        return () =>{
            if (Scrollbar) Scrollbar.destroy(document.body);
        }


    },[])

    return null;

}


export default Scroll