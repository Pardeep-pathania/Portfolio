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

const AllSkillsSM = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
      {skills.map((item, index)=>{
        return (<div key={index} className='flex flex-col items-center'>
            <item.icon className='text-7xl text-orange-400'/>
            <p className='text-center mt-4 text-white'>{item.skill}</p>
            </div>
        );
      })}
    </div>
    
  )
}

export default AllSkillsSM
