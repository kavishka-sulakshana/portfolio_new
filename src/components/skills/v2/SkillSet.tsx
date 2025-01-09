import skills from "../../../data/Skills";

const SkillSet = () => {
    return (
        <section className="container mx-auto px-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skills.map(skill => (
                    <div
                        key={skill.name}
                        className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10  text-cyan-100
                     shadow-lg hover:shadow-xl transition-all duration-300
                     hover:bg-white/5"
                    >
                        <div className="flex items-top gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-semibold">{skill.name}</h3>
                        </div>

                        <hr className="mb-4" />

                        <div className="grid grid-cols-2 gap-4">
                            {skill.tools.map(tool => (
                                <div
                                    key={tool.name}
                                    className="flex items-center gap-2 p-2 bg-transparent rounded-lg  transition-colors"
                                >
                                    {tool.imageSrc}
                                    <span className="text-sm font-medium text-gray-50">
                                        {tool.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SkillSet