import { skills } from "../../constnats/data"
import SkillContainer from "../SkillContainer"

const About = () => {
    return (
        <div className="py-5 w-full min-h-[100svh] flex justify-center ">
            <div className=" w-fit">
                <h1 className="text-3xl font-bold text-center">About me</h1>
                <br />
                <div className="max-w-[1000px] shadow-xl dark:bg-[#141414] p-5">
                    <p className="text-lg">
                        Software Engineer with 2+ years of experience designing and building scalable, user-centric web applications using React, TypeScript, Next.js, and Tailwind CSS.
                        Skilled in delivering full-stack solutions in agile teams, with expertise in MongoDB, Node.js, and cloud integrations like Oracle Integration Cloud. Passionate about writing clean, maintainable code, solving complex problems, and continuously improving through learning and collaboration.
                    </p>
                </div>
                <br />
                <h2 className="text-3xl pt-5 font-bold text-gray-400 dark:text-gray-700">Technical skills</h2>
                <div className="flex gap-5 flex-wrap justify-center mt-3">
                    {skills.map(s => <SkillContainer skill={s} />)}
                </div>
                <h2 className="text-3xl pt-5 font-bold text-gray-400 dark:text-gray-700">Education</h2>
                <div className=" border mt-3 border-[#e7e7e7] dark:border-[#303030]  shadow-lg p-3 rounded-lg flex justify-between items-center">
                    <div>
                        <h1 className="text-xl font-semibold mb-2">Chandigarh Engineering College</h1>
                        <h2 className="ms-1 text-[#767676]">Bachelors of Technology</h2>
                        <h3 className="ms-1 text-[#767676]">2019 - 2023</h3>
                    </div>
                    <h3 className="gradient-text text-2xl font-semibold text-center">7.8 CGPA</h3>

                </div>


            </div>
        </div>
    )
}

export default About