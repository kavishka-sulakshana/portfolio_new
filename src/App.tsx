import Navbar from "./components/Navbar/Navbar"
import AboutMe from "./components/aboutMe/AboutMe"
import Home from "./components/home/Home"
import Skills from "./components/skills/Skills"
import MyWorks from "./components/works/MyWorks"
import './App.css'

const App = () => {
  return (
    <div className="">
      <Navbar buttonSize={20} color="#7EFFF7" />
      <div className="flex flex-col justify-center z-0">
        <Home />
        <AboutMe />
        <MyWorks />
        <Skills />
      </div>
    </div>
  )
}

export default App