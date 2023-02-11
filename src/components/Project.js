
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        padding: "0.2rem",
        margin: "1.4rem .7rem",
        borderRadius: "5px",
        // background: "#ffffff",
        boxShadow: "0.25rem 0.25rem 0.50rem #f0f3bd, -0.25rem -0.25rem 0.50rem #f0f3bd",
        // border: "1px solid"
    },
    containerItemTitle: {
        flex: "1",
        fontSize: "1.5rem",
        textAlign: "center",
    },
    containerItemImage: {
        flex: "1",
        border: "1px solid #f0f0f0",
        marginBottom: ".8rem",
        // boxShadow: "1px 1px 1px #f0f0f0, -1px -1px 1px #f0f0f0",
    },
    containerItem: {
        flex: "1",
        fontSize: "1rem",
        padding: ".1rem .5rem",
        marginBottom: ".1rem",
        // border: "1px solid",
        textAlign: "center"
    },
    link: {
        textDecoration: "none",
    }
}

function Project(props) {
    
    return (
        <div style={styles.container} className="projectCard">
            <h3 style={styles.containerItemTitle}>{props.projectData.title}</h3>
            <img style={styles.containerItemImage} src={props.projectData.image} />
            <p><a style={styles.link} href={props.projectData.linkToDeployed} target="_blank">Click here</a> and go to the deployed version.</p> 
            <p><a style={styles.link} href={props.projectData.linkToGitHub} target="_blank">Click here</a> and go to the GitHub repository.</p>
        </div>
    )
}

export default Project;