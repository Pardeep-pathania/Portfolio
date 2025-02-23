import React from 'react'
import news from "../../assets/news.jpeg";
import paste from "../../assets/paste.png";
import Spotify from "../../assets/Spotify.png";
import ProjectCard from './ProjectCard'

function Project() {

  const gitRepoNews = "https://github.com/Pardeep-pathania/Newsly";
  const gitRepoSpotify = "https://github.com/Pardeep-pathania/Spotify-clone";
  const gitRepoPaste = "https://github.com/Pardeep-pathania/Paste-App";


  return (
    <div id='Projects' className='max-sm:mt-10 sm:mt-10 p-10 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
      <ProjectCard
       title="News App" 
       imageUrl={news}
       main="This is a News App whose name Newsly created in React Js and Bootstrap by using API key to fetch data from the server."
       gitRepoUrl={gitRepoNews}
       />
      
      <ProjectCard
      title="Paste App" 
      imageUrl={paste}
      main="This is a Paste App which is used to save the data or task with their title in the local storage of the app
      and can be view, copy, delete and update from the app. Created in React Js and styling using Tailwind CSS and made it full responsive."
      gitRepoUrl={gitRepoPaste}
      />
      
      <ProjectCard 
      title="Spotify Clone" 
      imageUrl={Spotify}
      main="This is a Spotify Clone in which the feature will be added to play and access the song from the folder 
      which can be play, pause, next and previous song."
      gitRepoUrl={gitRepoSpotify}/>
    </div>
    </div>
  )
}

export default Project
