import HomeBtn from "../home/HomeBtn"

const WorkCard = ({ title, subTitle, status, link, technologies = [], image }: { title: string, subTitle: string, status: string, link?: string, technologies?: Array<string>, image: string }) => {
    return (
        <div className="flex font-serif bg-slate-900 my-6 rounded-lg">
            <div className="flex-none w-52 relative">
                <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
            </div>
            <form className="flex-auto p-4">
                <div className="flex flex-wrap items-baseline">
                    <h1 className="w-full flex-none mb-3 text-xl leading-none text-gray-100">
                        {title}
                    </h1>
                    <div className="flex-auto text-base font-medium text-gray-300">
                        {subTitle}
                    </div>
                    <div className="text-xs leading-6 font-medium uppercase text-gray-400">
                        {status}
                    </div>
                </div>
                <div className="flex items-baseline mt-2 mb-3 pb-3 border-b border-slate-200">
                    {(!!technologies.length) && technologies.map((tech: string, index: number) =>
                    (
                        <div id={`${index}`}>
                            {tech}
                            <br />
                        </div>
                    )
                    )}
                </div>
                <div className="flex space-x-3 mb-5 text-xs font-small">
                    <a href={link} className="flex-auto flex space-x-4">
                        <HomeBtn text="See Project" transparent={true} />
                    </a>
                    <button className="flex-none flex items-center justify-center text-slate-300" type="button" aria-label="Like">
                        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default WorkCard