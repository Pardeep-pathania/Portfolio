import React from 'react'
import pic from "../assets/pic.jpg"
import TextChange from '../TextChange'

function Home() {

    const phoneNumber = '9797607301'; 

    const handleCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    };


    return (
        <div className='text-white flex w-full justify-between items-start p-15 md:p-20'>
            <div className='md:w-2/4 md:pt-10'>
                <h1 className='min-h-15 md:min-h-27 max-sm:min-h-15 sm:min-h-15 sm:relative md:relative text-3xl md:text-4xl lg:pb-9 lg:text-5xl font-bold flex leading-normal tracking-tighter'><TextChange /></h1>
                <p className=' text-sm md:text-2xl tracking-tight'> I am a Full-Stack Developer specializing in the MERN stack, with
                    a passion for building scalable web applications. My experience spans both front-end and back-end development,
                     allowing me to create seamless user experiences and robust server-side logic. I am dedicated to writing clean,
                     maintainable code and continuously improving my skills.</p>
                <button onClick={handleCall} className='mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85
                duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#455697]'>Contact Me</button>
            </div>
            <div><img className='mt-7 md:w-90 lg:w-150 lg:mt-15 md:p-5 md:mt-15' src={pic} alt="" /></div>
        </div>
    )
}

export default Home
