import React from 'react'
import aboutpic from "../assets/aboutpic.jpg"
import { IoArrowForward } from "react-icons/io5";


function About() {
  return (
    <div className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black
 shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 md:pt-35 max-md:pt-20'>

      <div>
        <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className=' mt-10 md:h-80' src={aboutpic} alt="" />

          <ul className='px-6'>
            <div className='flex gap-3 py-4'>
              <IoArrowForward size={30} className="mt-1" />

              <span className='w-96'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal hover:text-blue-600'>Frontend Developer</h1>
                <p className='text-sm md:text-md leading-tight'>
                As a passionate Frontend Developer with a strong focus on React.js, I specialize in creating
                 dynamic and responsive user interfaces that deliver exceptional user experiences. My expertise
                  in modern JavaScript, HTML, CSS and Tailwind combined with my proficiency in React, allows me to build 
                  scalable and maintainable web applications.<br/> My experience with popular libraries and tools such as Redux,
                   React Router, and styled-components enhances my ability to create seamless and interactive applications.
                </p>
              </span>

            </div>

            <div className='flex gap-3 py-4'>
              <IoArrowForward size={30} className="mt-1" />

              <span className='w-96'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal hover:text-blue-600'>Backend Developer</h1>
                <p className='text-sm md:text-md leading-tight'>
                I specialize in building robust and scalable server-side applications that power dynamic
                web and mobile experiences. With a strong foundation in programming languages such as Node.js,ExpressJs
                JavaScript, I excel in designing RESTful APIs, managing databases using MongoDB, and ensuring seamless
                data flow between the server and client.
                </p>
              </span>

            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
