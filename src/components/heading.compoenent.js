import React,{ useEffect,useState } from 'react'
import Lottie from "react-lottie";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const Heading = (props) => {
        
  const [isStopped,setIsStopped] = useState(false)

  const optionsData = {
    loop:false,
    autoplay:true,
    animationData: props.animation
  }
  
  useEffect(()=>{
    gsap.to(props.trigger, {
      onUpdate: () => setIsStopped(true),
      scrollTrigger:{
        trigger: props.trigger, 
        pin: false, 
        start: "-300px", 
        end:"0", 
        markers:true,
        onLeaveBack: self => self.disable()
      }
    });
  },[isStopped])
  return (
    <div className={props.class}>
      {isStopped && <Lottie options={optionsData} isStopped={isStopped} isPaused={true} segments={[0,120]}/>}
    </div>
  )
}

export default Heading