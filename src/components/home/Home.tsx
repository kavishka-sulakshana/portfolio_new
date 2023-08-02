import SmallParticle from "../small_comps/SmallParticle"
import HeroBack from "./HeroBack"
import HomeLeft from "./HomeLeft"
import HomeRight from "./HomeRight"

const Home = () => {
    return (
        <section id="home" className="md:h-screen h-auto w-full flex items-center justify-center md:px-40 sm:16 px-8 bg-gradient-to-b md:bg-gradient-to-r from-[#0F0F0F] from-50% via-[#00000080] via-80% to-transparent to-90%">
            <HeroBack />
            <div className="flex md:flex-row justify-center items-center align-top w-full bg-fixed flex-col mx-auto">
                <SmallParticle position="md:left-20 md:top-20 left-5 top-5" />
                <SmallParticle position="md:left-32 md:top-20 left-6 top-6" />
                <SmallParticle position="md:right-20 md:bottom-20 right-5 bottom-9" />
                <SmallParticle position="md:right-32 md:bottom-20 right-6 bottom-8" />
                <HomeLeft />
                <HomeRight />
            </div>
        </section>
    )
}

export default Home