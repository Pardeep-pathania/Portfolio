import About from "./components/About"
import Experience from "./components/Experience"
import Home from "./components/Home"
import Navbar from "./components/Navbar"


function App() {
  

  return (
  <div className="bg-[#171d32] h-auto w-full overflow-hidden">
   <Navbar/>
   <Home/>
   <About/>
   <Experience/>
  </div>
)} 
export default App
