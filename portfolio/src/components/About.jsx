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
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend Developer</h1>
                <p className='text-sm md:text-md leading-tight'>
                  Hello! I’m a Front-End Developer with a passion for creating visually stunning and user-friendly
                   web applications. With a strong foundation in HTML, CSS, and JavaScript, I specialize in building 
                   responsive and interactive interfaces that enhance user experience.
                </p>
              </span>

            </div>

            <div className='flex gap-3 py-4'>
              <IoArrowForward size={30} className="mt-1" />

              <span className='w-96'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend Developer</h1>
                <p className='text-sm md:text-md leading-tight'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellat accusamus sunt blanditiis,
                  illo nihil aliquam harum deserunt quisquam laboriosam excepturi facere porro nisi a alias quis,
                  impedit praesentium libero!
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
