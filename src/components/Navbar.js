import * as React from 'react';
import logo from '../images/Your paragraph text.png'
import { useNavigate } from 'react-router-dom';

import navData from '../data/NavbarData';
import {links} from '../data/newNavbar'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import profileImg from '../images/profileimg.jpeg';



function Navbar() {

  const navigate = useNavigate();

  const profilePage = ()=> {
    navigate("/addTodo")
  }

  const imgaeClick = ()=>{
    navigate("/display")  
  }

  const aboutClick = ( )=> {
    navigate("/about")
  }
 
  return (
   <nav className='bg-emerald-100'>
    <div className='mx-auto max-w-7xl px-8 py-4 flex felx-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8' >
       <h2 className='text-3xl font-bold'>
             Hello<span className='text-emerald-600'> People</span>

        </h2>
       <div className='flex gap-x-3'> 
           {links.map((link) => {
            const {id,href,text} = link;
            return(
              <a key={id} href={href} className='capitalize text-lg tracking-wide hover:text-emerald-600 duration-300'>
                {text}
              </a>
            );
           })}
        </div>
    </div>
   </nav>
  );
}
export default Navbar;
