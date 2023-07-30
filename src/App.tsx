import Navbar from "./components/Navbar/Navbar"
import AboutMe from "./components/aboutMe/AboutMe"
import Home from "./components/home/Home"
import Skills from "./components/skills/Skills"
import MyWorks from "./components/works/MyWorks"
import './App.css'
import ContactMe from "./components/Footer/ContactMe"

const App = () => {
  return (
    <div className="">
      <Navbar buttonSize={20} color="#7EFFF7" />
      <div className="flex flex-col justify-center z-0">
        <Home />
        <AboutMe />
        <MyWorks />
        <Skills />
        <ContactMe />
        <div className="bg-black/80 p-2 text-center text-white text-xs">
          © 2023 - Designed & Developed by Kavi$ul@
        </div>
      </div>
    </div>
  )
}

export default App