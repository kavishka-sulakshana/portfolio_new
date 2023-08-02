import SkillBar from "./SkillBar"
import { motion } from "framer-motion"

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
        <motion.div
            whileHover={{ scale: 1.2, zIndex: 20 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col w-[300px] bg-black/30 rounded-lg justify-center items-center backdrop-blur-sm p-3 m-4">
            {skillData.map((skill, index) => (<SkillBar key={index} label={skill.label} percentage={skill.percentage} color="cyan" />))
            }
        </motion.div>
    )
}

export default SkillSet