
type SkillType = { category: string, list: string[] }
type Props = { skill: SkillType }

const SkillContainer = ({ skill }: Props) => {
    const { category, list } = skill;
    return (
        <div className="border-gray-200 border-l-[#5200ff] dark:border-[#141414] border-2 p-10 max-w-[310px] rounded-xl">
            <h3 className="text-center text-2xl font-semibold tracking-wide gradient-text ">{category}</h3>
            <div className="flex justify-center items-center h-full">
                <p className="text-center ">
                    {list.map((item, idx) => (
                        <label key={idx}>{item}, </label>
                    ))}
                </p>
            </div>
        </div>
    );
}

export default SkillContainer