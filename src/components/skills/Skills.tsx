import Title from "../small_comps/Title"
import SkillSet from "./SkillSet"
import { skills1, skills2, skills3 } from '../../RawData.ts'

const Skills = () => {
    return (
        <section className="flex flex-col lg:h-screen py-16 h-auto bg-black px-40 bg-fixed items-start justify-center w-full">
            <Title text="Skills" />
            <div className="flex p-3 justify-around w-full items-center flex-wrap">
                <SkillSet skillData={skills2} />
                <SkillSet skillData={skills1} />
                <SkillSet skillData={skills3} />
            </div>
        </section>
    )
}

export default Skills