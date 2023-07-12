const Title = ({ text, colour }: { text: String, colour?: String }) => {
    return (
        <h2 className="text-[25px] mb-7 text-cyan-200" style={{ color: `${colour}` }}>
            {text}
        </h2>
    )
}

export default Title