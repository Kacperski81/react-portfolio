import { getProject } from "../data/data";


function Project({image}) {
    const project = getProject(1);
    return (
        <>
            <h1>{project.title}</h1>
            <img src={image} />
        </>
    )
}

export default Project;