import React from 'react'
import pic from "../assets/pic.jpg"
import TextChange from '../TextChange'
// import Paredeep_Resume from '..assets/Paredeep_Resume.pdf'

function Home() {

    // method to call 

    const phoneNumber = '9797607301'; 

    const handleCall = () => {
         // Open the phone Number in a new tab
        window.location.href = `tel:${phoneNumber}`;
    };


    // method to download resume

    const handleDownload = () => {
        const resumeUrl = "https://drive.google.com/file/d/1Nf8TlM2tw5S6i07AtVFpugnVtgXLjm8i/view?usp=sharing"; 

        // Open the resume link in a new tab
        window.open(resumeUrl, '_blank');
    };



    return (
        <div className='text-white flex w-full justify-between items-start p-15 md:p-20 max-sm:block'>
            <div className='md:w-2/4 md:pt-10'>
                <h1 className='min-h-15 md:min-h-27 max-sm:min-h-15 sm:min-h-15 sm:relative md:relative text-3xl md:text-4xl lg:pb-9 lg:text-5xl font-bold flex leading-normal tracking-tighter'><TextChange /></h1>
                <p className=' text-sm md:text-2xl tracking-tight'> I am a Full-Stack Developer specializing in the MERN stack, with
                    a passion for building scalable web applications. My experience spans both front-end and back-end development,
                     allowing me to create seamless user experiences and robust server-side logic. I am dedicated to writing clean,
                     maintainable code and continuously improving my skills.</p>
                     <div>
                <button onClick={handleCall} className='mt-5 md:m-8 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:bg-blue-800
                duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#455697]'>Contact Me</button>
                <button onClick={handleDownload} className='mt-5 max-sm:ml-3 sm:ml-3 md:m-2 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:bg-blue-800
                duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#455697]'>Download Resume</button>
                </div>
            </div>
            <div><img className='mt-7 md:w-90 lg:w-150 lg:mt-15 md:p-5 md:mt-15' src={pic} alt="" /></div>
        </div>
    )
}

export default Home
