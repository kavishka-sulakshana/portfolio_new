import Title from "../small_comps/Title"
import { MailOutlined, LinkedinOutlined, GithubOutlined, YoutubeOutlined, SendOutlined } from '@ant-design/icons';
import logo from "../../assets/images/logo.jpg"
import { Canvas } from "@react-three/fiber"
import { Model } from "../../assets/3DModels/Lap.jsx"
import { Suspense } from "react"
import { Environment, OrbitControls } from '@react-three/drei'

const ContactMe = () => {
    return (
        <section id="contact" className="h-auto md:px-40 sm:px-28 px-5 md:py-8 pt-28 pb-16 bg-fixed flex flex-col bg-gray-900 justify-center relative">
            <Title text="C O N T A C T" />
            <div className="flex md:flex-wrap md:justify-between items-center justify-center flex-wrap-reverse" >
                <div className="flex flex-col my-10">
                    <div className="flex flex-row flex-wrap text-gray-300 my-2 items-center">
                        <MailOutlined />
                        {/* <p className="ml-1">Email : </p> */}
                        <p className="ml-2">kavisulakshana2000@gmail.com</p>
                    </div>
                    <div className="flex flex-row flex-wrap text-gray-300 my-2 items-center">
                        <LinkedinOutlined />
                        {/* <p className="ml-1">LinkedIn : </p> */}
                        <a href="https://www.linkedin.com/in/kavishka-sulakshana/" target="_blank">
                            <p className="ml-2"> Kavishka Sulakshana</p>
                        </a>
                    </div>
                    <div className="flex flex-row flex-wrap text-gray-300 my-2 items-center">
                        <GithubOutlined />
                        {/* <p className="ml-1">LinkedIn : </p> */}
                        <a href="https://github.com/kavishka-sulakshana" target="_blank">
                            <p className="ml-2"> kavishka-sulakshana</p>
                        </a>
                    </div>
                    <div className="flex flex-row flex-wrap text-gray-300 my-2 items-center">
                        <YoutubeOutlined />
                        {/* <p className="ml-1">LinkedIn : </p> */}
                        <a href="https://www.youtube.com/channel/UCSK1jdAlzH_uO5FV73_tkDQ" target="_blank">
                            <p className="ml-2"> @kavishkasulakshana9848</p>
                        </a>
                    </div>
                    <div className="flex flex-row flex-wrap text-gray-300 my-2 items-center">
                        <SendOutlined />
                        {/* <p className="ml-1">LinkedIn : </p> */}
                        <a href="https://t.me/Kavishkasula" target="_blank">
                            <p className="ml-2"> @Kavishkasula</p>
                        </a>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap text-gray-300 md:mt-2 mt-5 sm:w-auto sm:h-full w-full">
                    {/* <img src={logo} alt="" className=" max-w-xs w-40 h-40 rounded-full" /> */}
                    <Canvas camera={{ position: [-15, 0, -15], fov: 55, rotation: [0, 0, 0] }} className="h-40">
                        <pointLight position={[20, 20, 20]} intensity={2} />
                        <Suspense fallback={null}>
                            <Model />
                        </Suspense>
                        <Environment preset="city" />
                        <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
                    </Canvas>
                </div>
            </div>

        </section>
    )
}

export default ContactMe