import React, { useState } from 'react'
import { NavbarData } from "../data/Navbar";
import { NavLink } from "react-router-dom";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";


function Navbar() {
  const [menu, setMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div>
      <nav className='flex flex-wrap justify-between md:items-center bg-[#171d32] text-white px-10 pt-6
      md:px-20 border-b-2 border-slate-950 fixed w-full'>
        <span className='text-2xl font-bold tracking-wide'>Pardeep's Portfolio</span>


        <ul className={` ${menu ? "block" : "hidden"}  mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none
            text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>


        {NavbarData.map((link, idx) => (
          <li key={idx}>
        <NavLink
         
         to={link.path}
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-semibold text-xl"
              :"text-white font-medium text-xl hover:text-blue-400 hover:text-[22px] transition duration-200"
          }
        >
          {link.title}
        </NavLink>
        </li>
      ))}

      </ul>

        {showMenu ? (
          <RiMenu2Line size={30} className='md:hidden absolute right-10 top-6 transition-all duration-300' onClick={() => {
            setMenu(!menu); setShowMenu(!showMenu)
          }} />
        ) : (
          <RiCloseLine size={30} className='md:hidden right-10 top-6 transition-all duration-300'
            onClick={() => { setMenu(!menu); setShowMenu(!showMenu) }} />
        )}

      </nav>
    </div>
  )
}
export default Navbar