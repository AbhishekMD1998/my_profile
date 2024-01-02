import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { Profile } from './Profile'
import { About } from './About'

import { SkillsT } from './SkillsT'



export const Home = () => {
  return (
    <div>
    <Navbar/>
    <About/>
    <SkillsT/>
    <Outlet/>
    </div>
  )
}
