import { findLastIndex } from "lodash";

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        // border: "1px solid black",
        padding: "10px",
        margin: "40px 10px",
        // borderRadius: "50px",
        background: "#ffffff",
        boxShadow: "5px 5px 10px #f0f0f0, -5px -5px 10px #f0f0f0",
    },
    containerItem: {
        flex: "1",
    }
}

function Project(props) {
    
    return (
        <div style={styles.container}>
            <img style={styles.containerItem} src={props.projectData.image} />
            <h3 style={styles.containerItem}>{props.projectData.title}</h3>
            <p style={styles.containerItem}><strong>URL:</strong> <a href={props.projectData.linkToDeployed} target="_blank">{props.projectData.linkToDeployed}</a></p>
            <p style={styles.containerItem}><strong>GitHub repository:</strong> <a href={props.projectData.linkToGitHub} target="_blank">{props.projectData.linkToGitHub}</a></p>
        </div>
    )
}

export default Project;