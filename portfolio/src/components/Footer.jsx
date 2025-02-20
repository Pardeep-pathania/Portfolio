import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";


function Footer() {
  return (
    <div id='Footer' className='flex justify-around bg-[#2f3859] text-[#c3bfbf] p-10 md:p-12 items-center'>
      <div>
        <h2 className='text-2xl md:text-5xl font-bold mb-1.5'>Contact</h2>
        <h3 className='text-sm md:text-2xl font-normal'>Feel Free to reach out</h3>
      </div>

      <ul className='text-sm md:text-xl'>
        <li className='flex gap-2 items-center pt-2'>
            <MdOutlineEmail size={25}/>
            pardeep.pathania145@gmail.com
        </li>
        <li className='flex gap-2 items-center pt-2'>
            <FaLinkedin size={25}/>
            <a href='https://www.linkedin.com/in/pardeep-pathania-55ab31235' target='_blank'>https://www.linkedin.com/in/pardeep-pathania-55ab31235</a>
        </li>
        <li className='flex gap-2 items-center pt-2'>
        <FaGithub size={25}/>
        <a href='https://github.com/Pardeep-pathania'target='_blank'>https://github.com/Pardeep-pathania</a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
