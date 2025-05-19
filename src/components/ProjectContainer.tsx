import { motion } from "framer-motion";
import { IoMdGitBranch, IoMdOpen } from "react-icons/io";
import GradientText from "./GradientText";

type Project = {
    title: string;
    techUsed: string[];
    description: string;
    images: string[];
    liveLink?: string;
    codeLink?: string;
};

type Props = { project: Project }

const ProjectContainer = ({ project }: Props) => {
    // const [expand, setexpand] = useState(false)
    const { title, techUsed, description, images, liveLink, codeLink } = project
    return (
        <motion.div 
            className=" dark:bg-[#1c1c1c] group w-full rounded-xl cursor-pointer overflow-hidden hover:scale-[1.02] transition-all h-[500px] flex flex-col shadow-xl relative">
            <img src={images[0]} className=" object-cover aspect-video w-full group-hover:scale-105 transition-all duration-300" />
            <motion.div className={`p-3 flex flex-col h-full justify-between`}>
                <div className="">
                    <h2 className="text-2xl font-semibold">{title}</h2>
                    <div className="flex my-2 flex-wrap gap-2">
                        {techUsed.map((tech, i) => <label key={i}
                            className="text-sm rounded opacity-70 px-2 py-1 bg-black text-white dark:bg-white dark:text-black ">
                            {tech}</label>)}
                    </div>
                    <motion.div className=" overflow-hidden">
                        <GradientText text={description} />
                    </motion.div>
                </div>

                <div className="flex gap-2">
                    {codeLink && <a href={codeLink} target="_" className="hover:text-[#5200ff] dark:hover:text-[#3F7C90] flex gap-1 items-center">
                        <IoMdGitBranch size={20} /> Source
                    </a>}

                    {liveLink && <a href={liveLink} target="_" className="hover:text-[#5200ff] dark:hover:text-[#3F7C90] flex gap-2 items-center border-l pl-2">
                        <IoMdOpen size={20} /> Open
                    </a>}
                </div>
            </motion.div>


        </motion.div>
    )
}

export default ProjectContainer