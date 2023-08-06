import HomeBtn from "../home/HomeBtn"
import { motion } from "framer-motion"
import { useState } from "react"
import { InfoCircleOutlined } from '@ant-design/icons';

const WorkCard = ({ title, subTitle, status, link = "", technologies = [], image, description = "" }: { title: string, subTitle: string, status: string, link?: string, technologies?: Array<string>, image: string, description: string }) => {
    const [toggle, setToggle] = useState(false);
    return (
        <motion.div
            onClick={() => setToggle(!toggle)}
            // onHoverStart={() => setToggle(true)}
            // onHoverEnd={() => setToggle(false)}
            className="flex font-serif backdrop-blur-md border-2 border-gray-900/40 bg-gray-900/50 my-6 rounded-lg sm:flex-row flex-col">
            <div className="flex-none">
                <img src={image} alt="" className="w-full h-48 sm:h-full sm:w-48 object-cover rounded-lg" loading="lazy" />
            </div>
            <div className="flex-auto p-4">
                <div className="flex flex-wrap items-baseline sm:flex-row flex-col">
                    <h1 className="w-full flex mb-3 text-xl leading-none text-gray-100 justify-between">
                        {title}
                        <button className="flex-none flex items-center justify-center text-slate-300" type="button" aria-label="Like">
                            <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                            </svg>
                        </button>
                    </h1>
                    <div className="flex-auto text-base font-medium text-cyan-300">
                        {subTitle}
                    </div>
                    <div className="text-xs leading-6 font-medium uppercase text-gray-400">
                        {status}
                    </div>
                </div>
                <div className="select-none flex items-baseline mt-2 mb-3 pb-3 border-b border-slate-200 flex-row text-xs font-semibold flex-wrap">
                    {(!!technologies.length) && technologies.map((tech: string, index: number) =>
                    (
                        <div id={`${index}`} className="px-1 bg-white m-1 rounded-md">
                            {tech}
                            <br />
                        </div>
                    )
                    )}
                </div>
                <motion.h1
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: toggle ? "auto" : 0, opacity: toggle ? 1 : 0 }}
                    className="flex text-justify items-baseline mt-2 mb-3 pb-3 sm:flex-row text-sm flex-col flex-wrap text-gray-400 sm:max-w-md">
                    {description}
                </motion.h1>
                <motion.div
                    initial={{ height: 0, opacity: 0, zIndex: -10 }}
                    animate={{ height: toggle ? "auto" : 0, opacity: toggle ? 1 : 0, zIndex: toggle ? 10 : -10 }}
                    className="flex space-x-3 my-1 text-xs font-small sm:justify-end justify-center items-center">
                    <a href={link} target="_blank" className="flex space-x-4 sm:justify-end justify-center items-center">
                        <HomeBtn text="See Project" transparent={false} active={!toggle} />
                    </a>
                </motion.div>
                <motion.div
                    onClick={() => setToggle(!toggle)}
                    initial={{ height: "auto", opacity: 1, zIndex: 10 }}
                    animate={{ height: !toggle ? "auto" : 0, opacity: !toggle ? 1 : 0, zIndex: !toggle ? 10 : -10 }}
                    className="flex items-center justify-start select-none text-white cursor-pointer">
                    <InfoCircleOutlined />
                    <div className="text-xs font-medium mx-2 text-gray-400">see more</div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default WorkCard