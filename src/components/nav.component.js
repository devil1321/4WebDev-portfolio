import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div class="nav">
        <div class="nav__list">
            <Link to="#" class="nav__link">Home</Link>
            <Link to="#" class="nav__link">Services</Link>
            <Link to="#" class="nav__link">Awards</Link>
            <Link to="#" class="nav__link">Contact</Link>
        </div>
    </div>
  )
}

export default Nav