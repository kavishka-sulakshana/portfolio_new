import SkillBar from "./SkillBar"
import { colors } from "../../RawData.ts"

type skillDataType = {
    skillData:
    {
        label: string
        percentage: number
    }[]
}

const SkillSet = ({ skillData }: skillDataType) => {
    // const SkillSet = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col w-[300px] bg-black rounded-lg justify-center items-center">
            {skillData.map((skill, index) => (<SkillBar label={skill.label} percentage={skill.percentage} color={colors[index]} />))
            }
        </div>
    )
}

export default SkillSet