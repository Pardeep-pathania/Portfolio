import React from 'react'

function ProjectCard({title, main, imageUrl, gitRepoUrl}) {


  const imageStyle = {
    width: '250px', 
    height: '125px', 
    objectFit: 'contain', 
  };

  const handleOpenRepo = () => {
    window.open(gitRepoUrl, "_blank"); // Opens the URL in a new tab
  };


  return (
    <div className='p-3 md:p-6 flex flex-col w-80 bg-[#030626] inset-shadow-slate-900 rounded-2xl'>
      <img className='p-4' src={imageUrl} alt="" style={imageStyle}/>
      <h3 className='px-4 text-xl md:text-2xl font-bold leading-normal'>
        {title}
      </h3>
      <p className='px-4 text-sm md:p-4 flex gap-2 md:gap-4'>{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        <button className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85
        duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]' onClick={handleOpenRepo}>Demo</button>
        <button className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85
        duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]' onClick={handleOpenRepo}>Source Code</button>
      </div>
    </div>
  )
}

export default ProjectCard
