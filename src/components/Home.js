import styled, { createGlobalStyle } from "styled-components";

const GlobalSyle = createGlobalStyle`
    :root {
        
    }
`

const Wrapper = styled.div`
    width: 95%;
    margin: 0 auto;
    background-color: #eef0f2;
`

const Intro = styled.div`
    // border: 1px solid;
    position: relative;
    @media (min-width: 1024px) {
        display: grid;
        width: min-content;
        margin: 0 auto;
        grid-column-gap: 1em;
        grid-template-areas:
            "img title"
            "img subtitle";
        grid-template-columns: min-content max-content;
    }
`

const Title = styled.h2`
    font-size: 2.5rem;
    text-align: center;
    margin-top: .1em;
    padding: .1em;
    // background-color: #273e47;
    background-color: eef0f2;
    color: #011638;
    // box-shadow: 0.25em 0.25em 0.75em rgba(0,0,0,.25),
        //    0.125em 0.125em 0.25em rgba(0,0,0,.15);
    
    @media(min-width: 600px) {
        align-self: end;
        font-size: 2.5rem;
    }
`

const Subtitle = styled.p`
    // display: inline-block;
    background-color: #011638;
    color: #f8f8f8;
    text-align: center;
    box-shadow: 0.25em 0.25em 0.75em rgba(0,0,0,.25),
    0.125em 0.125em 0.25em rgba(0,0,0,.15);
    font-size: 1.5rem;
    padding: .2em;
    
    @media(min-width: 600px) {
        align-self: start;
        grid-column: -1 / 1;
        grid-row: 2;
        text-align: right;
        position: relative;
        left: -1.5em;
        width: calc(100% + 1.5em);
        font-size: 2rem;
    }
`

const Image = styled.img`
    border: 1px solid;
    margin: 0 auto;
    display: block;
    max-height: 300px;
    object-fit: cover;
    box-shadow: 0.25em 0.25em 0.75em rgba(0,0,0,.25),
                0.125em 0.125em 0.25em rgba(0,0,0,.15);
    margin-bottom: .5em;

    @media (min-width: 450px) {
        object-fit: cover;
        min-height: 500px;
        min-width: 500px;
    }

    @media (min-width: 600px) {
        grid-area: img;
        // min-width: 250px;
        position: relative;
        z-index: 2;
    }

    @media (min-width: 768px) {
        background-color: #273e47;
    }
`

const Paragraph = styled.p`
    // border: 1px solid;
    font-size: 1.125rem;
    line-height: 1.35;
    padding: .5em;
    background-color: #273e47;
    color: #eef0f2;
    box-shadow: 0.25em 0.25em 0.75em rgba(0,0,0,.25),
                0.125em 0.125em 0.25em rgba(0,0,0,.15);
    text-align: justify;

    @media (min-width: 600px) {
        font-size: 1.5rem;
    }
`

const WhatIdoWrapper = styled.div`

`

const WhatIdoTitle = styled(Title) `
    margin-top: .5em;
    font-weight: 600;
    color: #011638;
    font-size: var(--font-size);
    ::after {
        content: '';
        display: block;
        width: 2em;
        height: 1px;
        margin: .3em auto .3em;
        background: #011638;
        opacity: 0.25;
    }
`

function Home() {
    return (
        <>
        <GlobalSyle />
        <Wrapper>
            <Intro>
                <Title>Hi I'm <strong>Marcin Kacperski</strong></Title>
                <Subtitle>front-end developer</Subtitle>
                <Image src="../images/me2.png" />
            </Intro>
            <WhatIdoWrapper>
                <WhatIdoTitle>What I do</WhatIdoTitle>
                <div class="column">
                    <h3>Front-end Development</h3>
                    <Paragraph>
                        I have experience building responsive websites using HTML, CSS, and JavaScript, and I have completed both the Scrimba Front-End Path and the edX Skills for Life bootcamp in front-end development. I am proficient with popular front-end frameworks such as Bootstrap and React, and I am constantly learning and improving my skills.
                    </Paragraph>
                </div>
                <div class="column">
                    <h3>React Development</h3>
                    <Paragraph>
                        I am familiar with React and have completed projects using React Hooks and React Router 6. I am committed to learning more about this powerful front-end framework and staying up-to-date with the latest trends and best practices.
                    </Paragraph>
                </div>
                <div class="column">
                    <h3>Node.js Development</h3>
                    <Paragraph>
                        I have basic knowledge of Node.js from completing the edX Skills for Life bootcamp in front-end development. I am excited to continue building my skills in server-side development and explore the possibilities of building full-stack web applications with Node.js and integrating it with front-end technologies.
                    </Paragraph>
                </div>
            </WhatIdoWrapper>
            {/* <Paragraph>High-energy and innovative front-end developer looking to leverage training to design and
                deliver fully functional, visually appealing, and responsive websites with full compatibility across PC,
                mobile, and tablet devices. Offering transferable soft skills in time management, communications,
                and project support gained from 10 years in a fast-paced and quality-focused work environment,
                often balancing competing deadlines and priorities. Strong focus on user-prioritised development and
                a willingness to put user experience at the forefront of all projects. Prior experience as a member of
                collaborative teams, going above and beyond job requirements as a true team player to ensure the
                completion of projects and assigned tasks in line with schedules.
            </Paragraph> */}
        </Wrapper>
        </>

    )
}

export default Home;