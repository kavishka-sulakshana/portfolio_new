import Title from "../small_comps/Title"
import SkillSet from "./SkillSet"
import { skills1, skills2, skills3 } from '../../RawData.ts'
import background from '../../assets/images/tt.jpg'
import { motion, useScroll } from "framer-motion"

const Skills = () => {
    const { scrollYProgress } = useScroll()
    return (
        <section className=" overflow-x-hidden relative flex flex-col py-20 h-auto px-40 bg-fixed items-start justify-center w-full bg-gradient-to-l  from-cyan-950 to-gray-900">
            <Title text="S K I L L S" />
            <div className="flex px-3 pt-10 justify-around w-full items-center flex-wrap z-10">
                <SkillSet skillData={skills2} />
                <SkillSet skillData={skills1} />
                <SkillSet skillData={skills3} />
            </div>
            <motion.img
                style={{ scale: scrollYProgress }}
                className="absolute w-full h-full opacity-10 z-0 object-cover left-0" src={background} alt="" />
        </section>
    )
}

export default Skills