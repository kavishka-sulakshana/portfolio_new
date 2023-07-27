import NavButton from "./NavButton"
import { useState } from "react"
import { DownCircleOutlined, BulbFilled, EyeFilled, ProjectFilled, CodeFilled, GithubFilled, LinkedinFilled } from "@ant-design/icons"
import NavSection from "./NavSection"
import { motion } from "framer-motion"

const Navbar = ({ buttonSize, color }: { buttonSize: number, color: string }) => {
  const [toggle, setToggle] = useState(false);


  return (
    <div className="flex justify-center flex-col fixed inset-y-0 left-0 z-50" >

      <div className="flex flex-col justify-center my-2 rounded-lg relative">
        <motion.div className="my-2 text-cyan-400 text-center"
          animate={{
            transition: {
              duration: 0.5,
              ease: "easeInOut",
            },
            opacity: toggle ? 0 : 1,
          }}
        >MENU</motion.div>
        <DownCircleOutlined style={{ fontSize: `40px`, color: `${color}`, transform: !toggle ? "rotate(180deg)" : "", transition: "all 0.5s ease" }} onClick={() => { setToggle(toggle => !toggle); console.log(toggle) }} />
      </div>

      <motion.nav className="flex flex-col p-4  w-fit rounded-r-lg justify-evenly content-center transition duration-100 hover:opacity-100 opacity-30"
        animate={{
          opacity: toggle ? 1 : 0,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
          height: toggle ? "auto" : 0,
        }}
      >

        <NavSection toggle={toggle}>
          <NavButton toggle={toggle}>
            <EyeFilled style={{ fontSize: `${buttonSize}px`, color: `${color}` }} />
          </NavButton>
          <NavButton toggle={toggle}>
            <ProjectFilled style={{ fontSize: `${buttonSize}px`, color: `${color}` }} />
          </NavButton>
          <NavButton toggle={toggle}>
            <BulbFilled style={{ fontSize: `${buttonSize}px`, color: `${color}` }} />
          </NavButton>
          <NavButton toggle={toggle}>
            <CodeFilled style={{ fontSize: `${buttonSize}px`, color: `${color}` }} />
          </NavButton>
        </NavSection>
        <NavSection toggle={toggle}>
          <NavButton toggle={toggle}>
            <GithubFilled style={{ fontSize: `${buttonSize}px`, color: `${color}` }} />
          </NavButton>
          <NavButton toggle={toggle}>
            <LinkedinFilled style={{ fontSize: `${buttonSize}px`, color: `${color}` }} />
          </NavButton>
        </NavSection>
      </motion.nav>
    </div>
  )
}

export default Navbar