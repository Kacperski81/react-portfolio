import projectData from "../data/data"
import Project from "./Project";


function Projects() {
    return (
        <>
            {projectData.map(project => (
                <Project key={project.id} projectData={project}/>
            ))}          
        </>
    )
}

export default Projects;