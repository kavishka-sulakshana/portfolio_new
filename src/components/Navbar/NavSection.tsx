import { motion } from "framer-motion"

const NavSection = ({ toggle, children }: { toggle: boolean, children: React.ReactNode }) => {
    const styles = {
        // display: toggle ? "flex" : "none"
    };
    return (
        <motion.div
            className="flex flex-col my-2 bg-gray-800 rounded-lg transition duration-100"
            style={styles}
            animate={{
                opacity: toggle ? 1 : 0,
                transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                },
                scaleY: toggle ? 1 : 0,
            }}
        >
            {children}
        </motion.div>
    )
}

export default NavSection