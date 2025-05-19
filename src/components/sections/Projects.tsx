import { projects } from "../../constnats/data"
import ProjectContainer from "../ProjectContainer"

const Projects = () => {
    return (
        <div className="py-5 w-full min-h-[100svh] flex justify-center">
            <div className=" w-full max-w-[1300px]">
                <h1 className="text-3xl font-bold text-center">Projects</h1>
                <div className="min-h-[50svh] mt-10 gap-5 items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project,i) => <ProjectContainer key={i} project={project}/>)}
                </div>
            </div>
        </div>
    )
}

export default Projects