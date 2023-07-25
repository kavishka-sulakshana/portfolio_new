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
                <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Kavishka</h1>
                <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Sulakshana</h1>
                <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Siriwardhana</h1>
                <div className="mt-10 flex justify-evenly w-full flex-wrap">
                    <HomeBtn text="See more" />
                    <HomeBtn text="Contact me" transparent={true} />
                </div>
            </div>
        </section>
    )
}

export default HomeLeft