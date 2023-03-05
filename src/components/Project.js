import styled from "styled-components";

const ProjectCard = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    border-radius: 5px;
    box-shadow: 0.25em 0.25em 0.75em rgba(0,0,0,.25),
                0.125em 0.125em 0.25em rgba(0,0,0,.15);
    
    :not(:last-child) {
        margin-bottom: .6em;
    }
`

const CardTitle = styled.h3`
    flex: 1;
    font-size: 1.5rem;
    text-align: center;
`

const CardImage = styled.img`
    flex: 1;
    box-shadow: 0.25em 0.25em 0.75em rgba(0,0,0,.25),
                0.125em 0.125em 0.25em rgba(0,0,0,.15);
`

const UrlLink = styled.a`
    text-decoration: none;
`

const GitHubLink = styled(UrlLink)`

`

function Project(props) {
    
    return (
        <ProjectCard>
            <CardTitle>{props.projectData.title}</CardTitle>
            <CardImage src={props.projectData.image} />
            <UrlLink href={props.projectData.linkToDeployed} target="_blank">WWW</UrlLink> 
            <GitHubLink href={props.projectData.linkToGitHub} target="_blank">GitHub</GitHubLink>
        </ProjectCard>
    )
}

export default Project;