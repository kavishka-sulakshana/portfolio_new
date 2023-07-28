const Title = ({ text, colour }: { text: String, colour?: String }) => {
    return (
        <h2 className="text-cyan-200 text-3xl" style={{ color: `${colour}` }}>
            {text}
        </h2>
    )
}

export default Title