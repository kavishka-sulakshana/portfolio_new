import HomeTitle from "../small_comps/HomeTitle"
import HomeBtn from "./HomeBtn"

const HomeLeft = () => {
    return (
        // <div classNameName="font-poppins text-white flex flex-col items-start justify-center text-left px-20">
        //     <h2 classNameName="text-[25px] mb-7 text-cyan-200">Hello I'm</h2>
        //     <div classNameName="text-[40px] m-1 tracking-wider">Kavishka</div>
        //     <div classNameName="text-[40px] m-1 tracking-wider">Sulakshana</div>
        //     <div classNameName="text-[40px] m-1 tracking-wider">Siriwardhana</div>
        //     <div classNameName="mt-10 flex justify-evenly w-full">
        //         <HomeBtn text="See more" />
        //         <HomeBtn text="Contact me" transparent={true} />
        //     </div>
        // </div>
        <section className="mx-auto">
            <div className="py-8 px-4 mx-auto max-w-screen-xl md:text-left text-center lg:py-16">
                <h2 className="text-[25px] mb-7 text-cyan-200">Hello I'm</h2>
                <HomeTitle delay={1}> Kavishka </HomeTitle>
                <HomeTitle delay={1.5}>Sulakshana</HomeTitle>
                <HomeTitle delay={2}>Siriwardhana</HomeTitle>
                <div className="mt-10 flex justify-evenly w-full flex-wrap">
                    <a href="#projects"><HomeBtn text="See Projects" /></a>
                    <a href="https://www.linkedin.com/in/kavishka-sulakshana" target="_blank" ><HomeBtn text="Contact Me" transparent={true} /></a>
                </div>
            </div>
        </section>
    )
}

export default HomeLeft