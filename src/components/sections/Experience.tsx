import { experience } from "../../constnats/data"
import { ExperienceContainer } from "../ExperienceContainer"

const Experience = () => {
    return (
        <div className="py-5 w-full min-h-[100svh] flex justify-center">
            <div className=" w-fit">
                <h1 className="text-3xl font-bold text-center">Professional Experience</h1>
                <div className="min-h-[50svh] flex items-center">
                    <div className="flex sm:gap-5">
                        <div className="flex flex-col">
                            <div className={` hidden sm:flex my-[94px] mt-[174px] h-full flex-col justify-between w-[3px] bg-[#6600ff]`}/>
                        </div>
                        <div className="flex flex-col gap-5 flex-wrap justify-center mt-20">
                            {experience.map((e, i) =>
                                <div key={i} className="relative">
                                    <div className={`size-3 rounded-full theme-gradient absolute  ${i == experience.length-1 ? 'bottom-[90px]' : 'top-[92px]'}  -left-7`} />
                                    <ExperienceContainer experience={e} />
                                </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience