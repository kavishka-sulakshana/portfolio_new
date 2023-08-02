import { motion } from "framer-motion"

const NavButton = ({ children, toggle, section, newpage = undefined }: { children: React.ReactNode, toggle: boolean, section: string, newpage?: string | undefined }) => {
    return (
        <a href={section} target={newpage}>
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
        </a>
    )
}

export default NavButton