import React from 'react'
import Heading from '../heading.compoenent'
import animation from '../../animations/heading-5.json'

const Awards = () => {
  return (
    <div className="awards">
        <Heading  class="awards__heading" trigger='.awards__heading' animation={animation}  />
    </div>
  )
}

export default Awards