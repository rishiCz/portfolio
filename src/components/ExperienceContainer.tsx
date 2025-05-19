import { useState } from "react";
import { motion } from "motion/react"
import { MdExpandCircleDown } from "react-icons/md";
import GradientText from "./GradientText";

type Experience = {
    company: string;
    role: string;
    location: string;
    duration: string;
    responsibilities: string[];
};

type Props = { experience: Experience }


export const ExperienceContainer = ({ experience }: Props) => {
    const { company, role, location, duration, responsibilities } = experience;
    const [expand, setexpand] = useState(false)
    const toggle = () => {
        setexpand(prev => !prev)
    }
    return (
        <div className="group shadow dark:border-2 border border-[#cbcbcb66] dark:border-[#242424] rounded-xl">
            <div className="p-3">
                <h2 className="text-2xl">{company}</h2>
                <p className=" gradient-text dark:text-[#858585]! font-semibold tracking-wide">{role}</p>
                <p className="text-[#757575]">{duration}</p>
                <p className="text-[#757575]">{location}</p>

                <motion.div initial={{ height: '0' }} animate={{ height: expand ? 'auto' : '0' }} className={`overflow-hidden`}>
                    {responsibilities.map((res, i) => <GradientText text={res} key={i}/>)}
                </motion.div>
            </div>

            <button onClick={toggle} className="border-t border-[#cacaca] dark:border-[#4f4f4f] flex items-center gap-5 p-1 px-3 w-full text-start">
                <motion.div initial={{rotate:-90}} animate={{rotate : expand ? -180 : -90}}>
                    <MdExpandCircleDown size={20}/>
                </motion.div>
                {expand ? 'Collapse' : 'Expand'}
                
                
            </button>

        </div>
    )
}
