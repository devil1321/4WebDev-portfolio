import React from 'react'
import '../styles/theme/theme.scss'
import Nav from '../components/nav.component'
import Hero from '../components/sections/hero.component'
import Intro  from '../components/sections/intro.section'
import Services  from '../components/sections/services.section'
import Projects  from '../components/sections/projects.section'
import Tools  from '../components/sections/tools.section'
import Awards  from '../components/sections/awards.section'

const HomePage = () => {
  return (
    <div className="container">
        <Nav />
        <Hero />
        <Intro />
        <Services />
        <Projects />
        <Tools />
        <Awards />
    </div>
  )
}

export default HomePage