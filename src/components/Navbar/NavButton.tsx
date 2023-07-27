import { motion } from "framer-motion"

const NavButton = ({ children, toggle }: { children: React.ReactNode, toggle: boolean }) => {
    return (
        <motion.div
            className="flex my-1 p-2 justify-center content-center"
            whileHover={{ scale: 1.1, shadow: "0px 0px 8px 2px rgb(21 94 117)" }}
            animate={{
                opacity: toggle ? 1 : 0,
                transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                },
                scale: toggle ? 1 : 0,
            }}
        >
            {children}
        </motion.div>
    )
}

export default NavButton