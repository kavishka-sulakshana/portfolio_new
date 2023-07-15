const SkillBar = ({ color, label, percentage }: { color: string, label: string, percentage: number }) => {
    return (
        <div className="flex flex-col w-full p-3">
            <div className="flex justify-between mb-1">
                <span className={`text-base font-medium dark:text-white`} style={{ color: color }}>{label}</span>
                <span className={`text-sm font-medium`} style={{ color: color }}>{percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className={`h-2.5 rounded-full`} style={{ width: `${percentage}%`, backgroundColor: color }} ></div>
            </div>
        </div>
    )
}

export default SkillBar