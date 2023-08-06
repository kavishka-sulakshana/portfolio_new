import Title from "../small_comps/Title"
import WorkCard from "./WorkCard"
import SmallParticle from "../small_comps/SmallParticle"
import works from "../../data/works"

const MyWorks = () => {
    return (
        <section id="projects" className="relative py-16 md:px-20 sm:px-20 px-8 flex flex-col justify-center bg-gradient-to-t from-[#00000080] from-10% via-[#00000090] via-20% to-[#0F0F0F] to-80%">
            <div className="flex justify-center mb-8 mt-4">
                <Title text="P R O J E C T S" />
            </div>
            <div className="flex mx-auto">
                {/* <div className="flex-1 flex justify-center items-center text-lg text-white" style={{ writingMode: "vertical-rl", textOrientation: "upright" }}>
                    PROJECTS
                </div> */}
                <div className=" flex-[5] w-4/5 mx-auto sm:w-5/6 md:w-5/6 lg:w-4/5 xl:w-4/5">
                    {works.map((work, index) => (
                        <WorkCard
                            key={index}
                            title={work.title}
                            subTitle={work.subTitle}
                            status={work.status}
                            image={work.image}
                            technologies={work.technologies}
                            link={work.link}
                            description={work.description} />
                    ))}
                </div>
            </div>
            <SmallParticle position="md:right-20 md:bottom-20 right-5 bottom-9" />
            <SmallParticle position="md:right-32 md:bottom-20 right-6 bottom-8" />
            <SmallParticle position="md:left-20 md:bottom-20 left-5 bottom-9" />
            <SmallParticle position="md:left-32 md:bottom-20 left-6 bottom-8" />
            <a className="flex justify-center mb-4 mt-8 text-white"
                target="_blank"
                href="https://github.com/kavishka-sulakshana?tab=repositories">
                See GitHub for more projects &rarr;
            </a>
        </section>
    )
}

export default MyWorks