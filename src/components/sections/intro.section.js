import React from 'react'
import Heading from '../heading.compoenent'
import animation from '../../animations/heading-1.json'

const Intro = () => {
  return (
    <div className="intro">
        <Heading  class="intro__heading" trigger='.intro__heading' animation={animation}  />
    </div>
  )
}

export default Intro