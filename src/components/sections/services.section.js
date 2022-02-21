import React from 'react'
import Heading from '../heading.compoenent'
import animation from '../../animations/heading-2.json'

const Services = () => {
  return (
    <div className="services">
        <Heading  class="services__heading" trigger='.services__heading' animation={animation}  />
    </div>
  )
}

export default Services