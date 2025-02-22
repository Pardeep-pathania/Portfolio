import About from "./components/About"
import Contactpic from "./components/Contactpic"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Project/Projects"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SkillsMain from "./components/skillsSection/SkillsMain"

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar/>
      <Home/>
      <About/>
      <SkillsMain/>
      <Experience/>
      <Projects/>
      <Footer/>
     </div>
    },
    {
      path:"/about",
      element: <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar/>
      <About/>
    </div>
    },
    {
      path:"/skillsSection/SkillsMain",
      element: <div className="bg-[#171d32] h-auto w-full ">
      <Navbar/>
      <SkillsMain/>
    </div>
    },

    {
      path:"/experience",
      element: <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar/>
      <Experience/>
      <Footer/>
    </div>
    },

    {
      path:"/project/projects",
      element: <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar/>
      <Projects/>
      <Footer/>
    </div>
    },

    // {
    //   path:"/projects",
    //   element: <div className="bg-[#171d32] h-auto w-full overflow-hidden">
    //   <Navbar/>
    //   <Projects/>
    //   <Footer/>
    // </div>
    // },

    {
      path:"/contact",
      element: <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar/>
      <Contactpic/>
      <Footer/>
    </div>
    },
  
  ]
)

function App() {
  

  return (
  
  <div className="bg-">
    <RouterProvider router={router}/>
  </div>
)} 
export default App
