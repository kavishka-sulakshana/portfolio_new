import { motion } from "framer-motion"

const SmallParticle = ({ position }: { position: string }) => {
    return (
        <motion.div
            className={`absolute z-40 lg:w-5 lg:h-5 md:w-3 md:h-3 w-5 h-5 bg-cyan-400/50 rounded-sm ${position}`}
            animate={{
                rotate: [0, 180, 360],
                borderRadius: ["0%", "50%", "0%"],
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1
            }}
        >

        </motion.div>
    )
}

export default SmallParticle