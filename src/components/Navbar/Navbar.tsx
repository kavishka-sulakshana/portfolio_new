import NavButton from "./NavButton"
import { HomeFilled, BulbFilled, EyeFilled, ProjectFilled, CodeFilled, GithubFilled, LinkedinFilled } from "@ant-design/icons"

const Navbar = ({ buttonSize, color }: { buttonSize: number, color: string }) => {
  return (
    <div className="flex items-center fixed inset-y-0 left-0">
      <nav className="mx-2 flex flex-col p-2 bg-gray-700 w-fit rounded-lg justify-evenly content-center">
        <div className="flex flex-col my-2 bg-gray-950 rounded-lg">
          <NavButton>
            <HomeFilled style={{ fontSize: `${buttonSize}px`, color: `${color}` }} />
          </NavButton>
        </div>
        <div className="flex flex-col my-2 bg-gray-950 rounded-lg">
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
        <div className="flex flex-col my-2 bg-gray-950 rounded-lg">
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