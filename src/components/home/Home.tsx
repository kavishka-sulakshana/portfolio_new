import HeroBack from "./HeroBack"
import HomeLeft from "./HomeLeft"
import HomeRight from "./HomeRight"

const Home = () => {
    return (
        <section className="md:h-screen h-auto w-full flex items-center justify-center md:px-40 px-20 bg-gradient-to-b md:bg-gradient-to-r from-[#0F0F0F] from-50% via-[#00000080] via-80% to-transparent to-90%">
            <HeroBack />
            <div className="flex flex-col-reverse md:flex-row justify-between align-top w-full bg-fixed">
                <HomeLeft />
                <HomeRight />
            </div>
        </section>
    )
}

export default Home