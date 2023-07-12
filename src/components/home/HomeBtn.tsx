const HomeBtn = ({ text, transparent = false }: { text: string, transparent?: Boolean }) => {
    return (
        <span className="m-1">
            <button type="button" className={"inline-flex items-center rounded-md px-3 py-2 text-sm  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                + (transparent ? "border-2 border-cyan-400 text-cyan-400 hover:text-black hover:bg-cyan-400 bg-gray-950" : "border-2 border-cyan-400 bg-cyan-400 text-black hover:text-cyan-400 hover:bg-gray-950")}>
                {text}
            </button>
        </span>
    )
}

export default HomeBtn