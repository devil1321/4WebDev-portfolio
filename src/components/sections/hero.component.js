import React from 'react'

const Hero = () => {
  return (
    <div class="hero">   
        <div class="hero__video-wrapper">
            <video class="hero__video" autoPlay muted="true" >
                <source src="/assets/hero.mp4"type="video/mp4" />
            </video>                   
        </div>
    </div>

  )
}

export default Hero