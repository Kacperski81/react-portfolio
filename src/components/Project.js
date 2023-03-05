import styled, {createGlobalStyle} from "styled-components";

const GlobalSyle = createGlobalStyle`
    :root {
        --ff-primary: 'Source Sans Pro', sans-serif;
        --ff-secondary: 'Source Code Pro', monospace;
    
        --fw-reg: 300;
        --fw-med: 600;
        --fw-bold: 900;
    
        --clr-background: #eef0f2;
        --clr-light: #eef0f2;
        --clr-dark: #011638;
        --clr-accent: #104547;
        --clr-font: #f8f8f8;
    
        --fs-h1: 2.5rem;
        --fs-h2: 2.125rem;
        --fs-h3: 1.5rem;
        --fs-body: 1.2rem;
        
        --bs: 0.25em 0.25em 0.75em rgba(0,0,0,.25),
              0.125em 0.125em 0.25em rgba(0,0,0,.15);
    }
`

const ProjectCard = styled.div`
    background-color: var(--clr-light);
    color: var(--clr-dark);
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    padding: .2em 0;
    border-radius: 5px;
    box-shadow: var(--bs);
    margin-bottom: .6em;
    
    // :not(:last-child) {
    //     margin-bottom: .6em;
    // }

    @media(min-width: 768px) {
        flex: 1 500px;
    }
`

const CardTitle = styled.h3`
    flex: 1;
    font-size: var(--fs-h3);
    font-weight: var(--fw-med);
    text-align: center;
`

const CardImage = styled.img`
    flex: 1;
    margin: 0 auto;
    box-shadow: var(--bs);
`

const ProjectLinks = styled.div`
    display: flex;
    justify-content: space-around;
`

const UrlLink = styled.a`
    font-family: var(--ff-secondary);
    font-size: 1rem;
    text-decoration: none;
    color: var(--clr-font);
    padding: .3em .6em;
    background: var(--clr-dark);
    border-radius: 5px;
    margin: .5em 0;
    cursor: pointer;
    box-shadow: var(--bs);
    
    :hover {
        background-color: var(--clr-font);
        color: #000;
        font-weigth: var(--fw-bold);
        text-decoration: none;
        transition: 
   
    }
`

const GitHubLink = styled(UrlLink)`

`

function Project(props) {
    
    return (
        <>
        <GlobalSyle />
        <ProjectCard>
            <CardTitle>{props.projectData.title}</CardTitle>
            <CardImage src={props.projectData.image} />
            <ProjectLinks>
                <UrlLink href={props.projectData.linkToDeployed} target="_blank">View app</UrlLink> 
                <GitHubLink href={props.projectData.linkToGitHub} target="_blank">GitHub</GitHubLink>
            </ProjectLinks>
        </ProjectCard>
        </>
    )
}

export default Project;