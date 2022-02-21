import React from 'react'
import Heading from '../heading.compoenent'
import animation from '../../animations/heading-4.json'

const Tools = () => {
  return (
    <div className="tools">
        <Heading  class="tools__heading" trigger='.tools__heading' animation={animation}  />
    </div>
  )
}

export default Tools