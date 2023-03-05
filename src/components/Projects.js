import projectData from "../data/data"
import Project from "./Project";
import styled from "styled-components";

const ProjectsWrapper = styled.div`
    @media(min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        gap: .5em;
        margin: 0 auto;
    }
    
`

function Projects() {
    return (
        <ProjectsWrapper>
            {projectData.map(project => (
                <Project key={project.id} projectData={project}/>
            ))}          
        </ProjectsWrapper>
    )
}

export default Projects;