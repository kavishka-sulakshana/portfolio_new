import Title from "../small_comps/Title"
import { motion } from "framer-motion"
import { QuestionCircleOutlined } from '@ant-design/icons';
import SmallParticle from "../small_comps/SmallParticle";
import logo from "../../assets/images/logo.jpg"
import IconParticleComp from "../small_comps/IconParticleComp";


const AboutMe = () => {
    // const styles = {
    //     backgroundAll: {
    //         background: "linear-gradient(to right, #000, #43cea2)",  /* Chrome 10-25, Safari 5.1-6 */            /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    //     }
    // }
    return (
        <section id="about" className="md:h-screen h-auto md:px-40 sm:px-28 px-8 md:py-8 py-24 bg-fixed flex flex-row-reverse bg-gradient-to-l  from-cyan-950 to-gray-900 items-center relative">
            <SmallParticle position="md:right-20 md:bottom-20 right-5 bottom-9" />
            <SmallParticle position="md:right-32 md:bottom-20 right-6 bottom-8" />
            <IconParticleComp />
            <div className="flex flex-col md:flex-[2]">
                <div className="flex items-center mb-8">
                    <span
                    ><QuestionCircleOutlined className="text-white text-4xl mr-8"
                        style={{}} /></span>
                    <Title text="Who am I ?" />
                </div>
                <p className="text-gray-300 text-justify my-1 md:text-lg sm:text-base text-sm">
                    I have accumulated four years of
                    self-study experience in web development, which has provided me with a strong foundation
                    in various programming languages and frameworks. I enjoy solving complex challenges and
                    finding elegant solutions as a creative problem solver,
                    and I also thrive in collaborative environments and value effective communication.
                </p>
                <br />
                <p className="text-gray-200 text-justify my-1 md:text-lg sm:text-base text-sm">
                    I have some experiance in full stack web development and I am familiar with the technologies like
                    <b> React, Next.js, Node.js, MongoDB, MySQL, Postgresql, Java, Spring-Boot, Python and many more </b> You can see them in skills section.</p>
            </div>
            <div className="md:flex md:flex-col md:justify-center md:flex-[1] hidden">
                <motion.img animate={{
                    y: [0, 20, 0],
                }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    src={logo} alt="shield" className="object-cover rounded-2xl w-64 -rotate-12" />
            </div>
        </section>
    )
}

export default AboutMe