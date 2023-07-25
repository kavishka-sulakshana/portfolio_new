import Title from "../small_comps/Title"
import WorkCard from "./WorkCard"
import Image1 from '../../assets/images/mentor.jpg'

const MyWorks = () => {
    return (
        <section className=" py-16 px-20 flex flex-col justify-center bg-gradient-to-t from-[#00000080] from-10% via-[#00000090] via-20% to-[#0F0F0F] to-80%">
            <div className="flex justify-between">
                <Title text="My Works" />
                <h2 className="text-white underline">See all...</h2>
            </div>
            <div className="flex mx-auto">
                {/* <div className="flex-1 flex justify-center items-center text-lg text-white" style={{ writingMode: "vertical-rl", textOrientation: "upright" }}>
                    PROJECTS
                </div> */}
                <div className=" flex-[5] w-4/5 mx-auto sm:w-5/6 md:w-5/6 lg:w-4/5 xl:w-4/5">
                    <WorkCard title="Mentor" subTitle="Learning management System" status="Completed" image={Image1} />
                    <WorkCard title="PaperMarker" subTitle="Sample App" status="Developing" image={Image1} />
                    <WorkCard title="PaperMarker" subTitle="Sample App" status="Developing" image={Image1} />
                    <WorkCard title="PaperMarker" subTitle="Sample App" status="Developing" image={Image1} />
                </div>
            </div>
        </section>
    )
}

export default MyWorks