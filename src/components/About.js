import React from 'react'
import profileImg from '../images/NewProfile.jpeg'
import { Box, Container } from '@mui/material'
import { FaGithubSquare, FaInstagram, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

export const About = () => {
  return (
    
       <div className='bg-emerald-100 py-24'>
        <div className='mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8'>
          <article>
            <h1 className='text-7xl font-bold tracking-wider'>
              I'm Abhishek
            </h1>
            <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
              Software Developer
            </p>
            <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
              turning ideas into interatctive reality
            </p>
            <div className='mt-4 flex gap-x-4 '>
              <a href='https://github.com/AbhishekMD1998'>
                <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300'/>
              </a>
              <a href='https://www.linkedin.com/in/abhishek-rao-b8322416b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'>
                <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300'/>
              </a>
              <a href='#'>
                <FaTwitterSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300'/>
                
              </a>
              <a href='#'>
                <FaInstagram className='h-8 w-8 text-slate-500 hover:text-black duration-300'/>
              </a>

            </div>
          </article>
          <article >
            <img src={profileImg} className='h-80 lg:h-96'/>

          </article>

        </div>

       </div>
  )
}
