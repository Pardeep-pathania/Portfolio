import About from "./components/About"
import Contactpic from "./components/Contactpic"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Project/Projects"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar/>
      <Home/>
      <About/>
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

    {
      path:"/projects",
      element: <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar/>
      <Projects/>
      <Footer/>
    </div>
    },

    {
      path:"/footer",
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
