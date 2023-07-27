import { motion } from "framer-motion"

const HomeTitle = ({ children, delay }: { children: React.ReactNode, delay: number }) => {
    return (
        <motion.h1
            animate={{
                color: ["#ffffff", "rgb(34 211 238)", "#fff"],
                x: [0, 4, 0],
                borderRadius: ["0%", "50%", "0%"],
            }}
            transition={{
                duration: 1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 4,
                delay: delay
            }}
            className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            {children}
        </motion.h1>
    )
}

export default HomeTitle