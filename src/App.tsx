import Navbar from "./components/Navbar/Navbar"
import AboutMe from "./components/aboutMe/AboutMe"
import Home from "./components/home/Home"
import MyWorks from "./components/works/MyWorks"

const App = () => {
  return (
    <div className="">
      <Navbar buttonSize={20} color="#7EFFF7" />
      <div className="flex flex-col justify-center z-0">
        <Home />
        <AboutMe />
        <MyWorks />
      </div>
    </div>
  )
}

export default App