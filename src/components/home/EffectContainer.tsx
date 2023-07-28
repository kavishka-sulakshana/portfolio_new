import Profile from '../../assets/images/kavishka.png';
import { useRef } from 'react';
import SlickSection from '../SmallComps/SlickSection';
import { motion } from 'framer-motion';

const EffectContainer = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const styles = {
    background: {
      background: "radial-gradient(circle, rgba(0,212,255,0.2) 0%, rgba(9,9,121,0) 95%)"
    },

  }
  return (
    <motion.div className="relative lg:w-96 md:w-64 rounded-xl border-2 border-cyan-500/10 backdrop-blur-sm mx-auto flex justify-center content-end transition-all duration-500 hover:transform hover:-translate-x-2 hover:translate-y-15"
      style={styles.background}
      animate={{ scale: 1, x: 0 }}
      initial={{ scale: 0, x: 100 }}
      transition={{ ease: "easeOut", duration: 0.5, type: "spring", bounce: 1 }}
    >
      <img src={Profile} className='lg:w-64 md:w-48 object-cover rounded-xl' loading='lazy' />
      <div className='flex flex-col justify-center text-center font-semibold bg-cyan-800 py-1 rounded-xl mx-auto my-4 absolute lg:w-80 md:w-36 left-0 right-0 bottom-0 opacity-100' ref={divRef}>
        <SlickSection list={["Full Stack Developer", "Undergraduate Student", "Video Editor", "Member of ISACA"]} />
      </div>
      {/* <div className='absolute w-56 h-56 bg-white rounded-full -bottom-20'>

      </div> */}
    </motion.div>
  )
}

export default EffectContainer