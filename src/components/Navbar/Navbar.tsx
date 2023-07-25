import NavButton from "./NavButton"
import { useState } from "react"
import { DownCircleOutlined, HomeFilled, BulbFilled, EyeFilled, ProjectFilled, CodeFilled, GithubFilled, LinkedinFilled } from "@ant-design/icons"

const Navbar = ({ buttonSize, color }: { buttonSize: number, color: string }) => {
  const [toggle, setToggle] = useState(false);
  const styles = {
    display: toggle ? "flex" : "none"
  };
  const transitionStyles = {
    alignItems: !toggle ? "start" : "center",
    transition: "all 1s ease"
  }

  return (
    <div className="flex items-center fixed inset-y-0 left-0" >
      <nav className="flex flex-col p-2 bg-gray-700 w-fit rounded-r-lg justify-evenly content-center transition duration-100 hover:opacity-100 opacity-30" style={{ opacity: !toggle ? "100%" : "" }}>
        <div className="flex flex-col my-2 rounded-lg">
          <DownCircleOutlined style={{ fontSize: `${buttonSize}px`, color: `${color}`, transform: !toggle ? "rotate(180deg)" : "", transition: "all 0.5s ease" }} onClick={() => { setToggle(toggle => !toggle); console.log(toggle) }} />
          {/* <HomeFilled style={{ fontSize: `${buttonSize}px`, color: `${color}` }} /> */}
        </div>
        <div className="flex flex-col my-2 bg-gray-950 rounded-lg transition duration-100" style={styles}>
          <NavButton>
            <EyeFilled style={{ fontSize: `${buttonSize}px`, color: `${color}` }} />
          </NavButton>
          <NavButton>
            <ProjectFilled style={{ fontSize: `${buttonSize}px`, color: `${color}` }} />
          </NavButton>
          <NavButton>
            <BulbFilled style={{ fontSize: `${buttonSize}px`, color: `${color}` }} />
          </NavButton>
          <NavButton>
            <CodeFilled style={{ fontSize: `${buttonSize}px`, color: `${color}` }} />
          </NavButton>
        </div>
        <div className="flex flex-col my-2 bg-gray-950 rounded-lg transition duration-100" style={styles}>
          <NavButton>
            <GithubFilled style={{ fontSize: `${buttonSize}px`, color: `${color}` }} />
          </NavButton>
          <NavButton>
            <LinkedinFilled style={{ fontSize: `${buttonSize}px`, color: `${color}` }} />
          </NavButton>
        </div>
      </nav>
    </div>
  )
}

export default Navbar