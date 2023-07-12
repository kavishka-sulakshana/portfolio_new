import HomeBtn from "./HomeBtn"

const HomeLeft = () => {
    return (
        <div className="font-poppins text-white flex flex-col items-start justify-center text-left px-20">
            <h2 className="text-[25px] mb-7 text-cyan-200">Hello I'm</h2>
            <div className="text-[40px] m-1 tracking-wider">Kavishka</div>
            <div className="text-[40px] m-1 tracking-wider">Sulakshana</div>
            <div className="text-[40px] m-1 tracking-wider">Siriwardhana</div>
            <div className="mt-10 flex justify-evenly w-full">
                <HomeBtn text="See more" />
                <HomeBtn text="Contact me" transparent={true} />
            </div>
        </div>
    )
}

export default HomeLeft