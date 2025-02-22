import React from 'react'
import { FaCss3Alt, FaHtml5, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { SiRedux, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import SingleSkills from './SingleSkills';

const skills = [
    {
        skill: 'HTML',
        icon:   FaHtml5,
    },
    {
        skill: 'CSS',
        icon:   FaCss3Alt,
    },
    {
        skill: 'JavaScript',
        icon:   FaJs,
    },
    {
        skill: 'ReactJS',
        icon:   FaReact,
    },
    {
        skill: 'Redux',
        icon:   SiRedux,
    },
    {
        skill: 'Mongodb',
        icon:   SiMongodb,
    },
    {
        skill: 'TailwindCSS',
        icon:   RiTailwindCssFill,
    },
    {
        skill: 'Github',
        icon:   FaGithub,
    },
]

const AllSkills = () => {
  return (
    <div>
      <div className='flex items-center justify-center relative gap-2 max-w-[1200px]'>
        {skills.map((item, index)=>{
            return <SingleSkills key={index} text={item.skill} imgSvg = {<item.icon/>}/>
        })}
      </div>
    </div>
  )
}

export default AllSkills
