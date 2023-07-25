import Title from "../small_comps/Title"

const AboutMe = () => {
    return (
        <section className="md:h-screen h-auto bg-black md:px-40 px-28 md:py-8 py-24 bg-fixed flex items-center">
            <div className="flex flex-col md:flex-[2]">
                <Title text="Who am I ?" />
                <p className="text-gray-300 text-justify my-1">
                    I am an undergraduate computer science student and Web Developer specializing in full
                    stack web development. This is my portfolio; So you can see my information and what have I done since 2020...
                </p>
                <p className="text-gray-400 text-justify my-1">
                    I am an undergraduate computer science student and Web Developer specializing in full
                    stack web development. This is my portfolio; So you can see my information and what have I done since 2020...
                </p>
                <p className="text-gray-500 text-justify my-1">
                    I am an undergraduate computer science student and Web Developer specializing in full
                    stack web development. This is my portfolio; So you can see my information and what have I done since 2020...
                </p>
            </div>
            <div className="md:flex md:flex-col md:flex-[1] hidden">

            </div>
        </section>
    )
}

export default AboutMe