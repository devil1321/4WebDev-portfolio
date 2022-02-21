import React from 'react'
import Heading from '../heading.compoenent'
import animation from '../../animations/heading-3.json'

const Projects = () => {
  return (
    <div className="projetcs">
        <Heading  class="projetcs__heading" trigger='.projetcs__heading' animation={animation}  />
    </div>
  )
}

export default Projects