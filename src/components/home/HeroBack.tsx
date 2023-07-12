import backVideo from "../../assets/videos/back.mp4"

const HeroBack = () => {
    return (
        <div className='w-screen h-screen fixed top-0 left-0 -z-10'>
            <video autoPlay loop muted className="-z-10 w-full h-full object-cover">
                <source src={backVideo} type='video/mp4' />
            </video>
        </div>
    )
}

export default HeroBack