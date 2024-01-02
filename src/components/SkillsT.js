import React from 'react'
import { SectionT } from './SectionT'
import SkillsCards from './SkillsCards'
import { skills } from '../data/newNavbar'

export const SkillsT = () => {
  return (
    <section className=' py-25 mx-auto max-w-7xl px-8 ;' id='skills'>

    <SectionT text='Tech Stack'/>
    
    <div className='py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
      
        {skills.map((skill)=> {
            return <SkillsCards key={skill.id} {...skill}/>

        })}

    </div>
    
</section>
  )
}
