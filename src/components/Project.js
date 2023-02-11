
function Project(props) {
    
    return (
        <>
            <h3>Project title: {props.projectData.title}</h3>
            <p>url: {props.projectData.linkToDeployed}</p>
            <p>git: {props.projectData.linkToGitHub}</p>
            <img src={props.projectData.image} />
        </>
    )
}

export default Project;