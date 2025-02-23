import React from 'react'
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaGithub } from "react-icons/fa";
// import { SiRadis } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

function Experience() {
  return (
    <div id='Experience' className='max-sm:mt-10 sm:mt-10 p-10 md:p-24'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Experience</h1>
      <div className='flex flex-wrap items-center justify-around'>
        <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaHtml5 color='#E34F26' size={50}/>
            </span>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaCss3 color='#1572b6' size={50}/>
            </span>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaJs color='#F7DF1E' size={50}/>
            </span>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaReact color='#61DAFB' size={50}/>
            </span>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaGithub color='#ffffff' size={50}/>
            </span>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaFigma color='#F24E1E' size={50}/>
            </span>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <SiMongodb color='#47A248' size={50}/>
            </span>
            {/* <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <SiRadis color='#FF4438' size={50}/>
            </span> */}
            </div>

            <div>

            <div className='flex gap*-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4  items-center'>
                <span className='text-white '>
                    <h2 className='leading-tight'>Python Developer, Future Finders</h2>
                    <p className='text-sm leading-tight font-thin'>July 2023 - August 2023 </p>
                    <ul className='text-sm p-2'>
                        <li>Work as a Python Developer</li>
                        <li>As a Intern</li>
                    </ul>
                </span>
            </div>

            <div className='flex gap*-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4  items-center'>
                <span className='text-white '>
                    <h2 className='leading-tight'>MERN STACK Developer, ThinkNext</h2>
                    <p className='text-sm leading-tight font-thin'>Feb 2025 - Present </p>
                    <ul className='text-sm p-2'>
                        <li>Work as a MERN STACK Developer</li>
                        <li>As a Intern</li>
                    </ul>
                </span>
            </div>
            </div>
      </div>
    </div>
  )
}

export default Experience
