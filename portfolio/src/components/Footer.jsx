import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";


function Footer() {


  const email = "pardeep.pathania145@gmail.com"; // Replace with the recipient's email
  // const subject = "Subject Here"; // Replace with your subject
  // const body = "Message body goes here."; // Replace with your message body

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;


  return (
    <div id='Footer' className='flex justify-around bg-[#2f3859] text-[#c3bfbf] p-10 md:p-12 items-center max-sm:p-4'>
      <div>
        <h2 className='text-2xl md:text-5xl font-bold mb-1.5'>Contact</h2>
        <h3 className='text-sm md:text-2xl font-normal'>Feel Free to reach out</h3>
      </div>

      <ul className='text-sm md:text-xl'>
        <li className='flex gap-2 items-center pt-2'>
            <MdOutlineEmail size={25}/>
            <a href={gmailLink} target="_blank" rel="noopener noreferrer" className='pointer hover:text-blue-500'>
            pardeep.pathania145@gmail.com</a>
        </li>
        <li className='flex gap-2 items-center pt-2'>
            <FaLinkedin size={25}/>
            <a href='https://www.linkedin.com/in/pardeep-pathania-55ab31235' target='_blank' className='pointer hover:text-blue-500'>
            https://www.linkedin.com/in/pardeep-pathania-55ab31235</a>
        </li>
        <li className='flex gap-2 items-center pt-2'>
        <FaGithub size={25}/>
        <a href='https://github.com/Pardeep-pathania'target='_blank' className='pointer hover:text-blue-500'>
        https://github.com/Pardeep-pathania</a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
