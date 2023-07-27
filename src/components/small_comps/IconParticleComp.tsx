import { motion } from "framer-motion"
import icon1 from "../../assets/icons/js.png"
import icon2 from "../../assets/icons/ts.png"
import icon3 from "../../assets/icons/framer.png"
import icon4 from "../../assets/icons/react.png"


const IconParticleComp = () => {
    return (
        <div className="relative">
            <img src={icon1} className="w-10 absolute left-30" alt="" />
            <img src={icon2} className="w-10 absolute left-40" alt="" />
            <img src={icon3} className="w-10 absolute " alt="" />
            <img src={icon4} className="w-10 absolute -left-30" alt="" />
        </div>
    )
}

export default IconParticleComp