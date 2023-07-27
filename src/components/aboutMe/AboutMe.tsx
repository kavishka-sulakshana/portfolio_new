import Title from "../small_comps/Title"
import { motion } from "framer-motion"
import { QuestionCircleOutlined } from '@ant-design/icons';
import SmallParticle from "../small_comps/SmallParticle";
import shield from "../../assets/images/shield.jpg"
import IconParticleComp from "../small_comps/IconParticleComp";

const AboutMe = () => {
    const styles = {
        backgroundAll: {
            background: "linear-gradient(to right, #000, #43cea2)",  /* Chrome 10-25, Safari 5.1-6 */            /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
    }
    return (
        <section className="md:h-screen h-auto md:px-40 px-28 md:py-8 py-24 bg-fixed flex flex-row-reverse bg-gradient-to-l from-cyan-950 to-gray-900 items-center relative">
            <SmallParticle position="right-20 bottom-20" />
            <SmallParticle position="right-32 bottom-20" />
            <IconParticleComp />
            <div className="flex flex-col md:flex-[2]">
                <div className="flex items-center mb-8">
                    <motion.span
                        animate={{
                            scale: [1, 1.3, 1],
                            borderRadius: ["0%", "50%", "0%"],
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    ><QuestionCircleOutlined className="text-white text-4xl mr-8"
                        style={{}} /></motion.span>
                    <Title text="Who am I ?" />
                </div>
                <p className="text-gray-300 text-justify my-1 text-lg">
                    I am an undergraduate computer science student and Web Developer specializing in full
                    stack web development. This is my portfolio; So you can see my information and what have I done since 2020...
                </p>
                <p className="text-gray-200 text-justify my-1 text-lg">
                    I am an undergraduate computer science student and Web Developer specializing in full
                    stack web development. This is my portfolio; So you can see my information and what have I done since 2020...
                </p>
                <p className="text-gray-100 text-justify my-1 text-lg">
                    I am an undergraduate computer science student and Web Developer specializing in full
                    stack web development. This is my portfolio; So you can see my information and what have I done since 2020...
                </p>
            </div>
            <div className="md:flex md:flex-col md:justify-center md:flex-[1] hidden">
                <img src={shield} alt="shield" className=" object-cover rounded-2xl m-10 w-64" />
            </div>
        </section>
    )
}

export default AboutMe