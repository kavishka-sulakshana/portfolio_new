import { motion } from "framer-motion"

const HomeBtn = ({ text, transparent = false, active = false }: { text: string, transparent?: boolean, active?: boolean | undefined }) => {
    return (
        <span className="m-1">
            <motion.button disabled={active} whileHover={{ scale: 1.1 }} type="button" className={"inline-flex items-center rounded-md px-3 py-3 text-sm  shadow-sm  focus-visible:outline focus-visible:outline-2 font-semibold focus-visible:outline-offset-2 "
                + (transparent ? "border-2 border-cyan-400 text-cyan-400 hover:text-black hover:bg-cyan-400 bg-gray-950" : "border-2 border-cyan-400 bg-cyan-400 text-black hover:text-cyan-400 hover:bg-gray-950")}>
                {text}
            </motion.button>
        </span>
    )
}

export default HomeBtn