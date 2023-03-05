import styled, { createGlobalStyle } from "styled-components";

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
        --clr-accent: #02c39a;
        --clr-font: #f8f8f8;
    
        --fs-h1: 2.5rem;
        --fs-h2: 2.125rem;
        --fs-h3: 1.5rem;
        --fs-body: 1.2rem;
        
        --bs: 0.25em 0.25em 0.75em rgba(0,0,0,.25),
              0.125em 0.125em 0.25em rgba(0,0,0,.15);
    }
`

const Wrapper = styled.div`
    width: 95%;
    margin: 0 auto;
    background-color: var(--clr-background);
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
const Image = styled.img`
    margin: 0 auto;
    display: block;
    // width: 100%;
    max-height: 400px;
    object-fit: cover;
    box-shadow: var(--bs);
    margin-bottom: .5em;

    @media(min-width: 768px) {
        max-height: 600px;
    }

    @media(min-width: 1024px) {
        grid-area: img;
        min-width: 300px;
        position: relative;
        z-index: 2;
    }
`

const Title = styled.h2`
    font-size: var(--fs-h1);
    text-align: center;
    margin-top: .1em;
    padding: .1em;
    color: var(--clr-dark);

    @media(min-width: 1024px) {
        align-self: end;
    }
`

const Subtitle = styled.p`
    width: 80%;
    font-weight: var(--fw-med);
    background-color: var(--clr-dark);
    color: var(--clr-light);
    text-align: center;
    box-shadow: var(--bs);
    font-size: 1.5rem;
    padding: .2em .5em;
    margin: 0 auto .5em;

    @media (min-width: 1024px) {
        align-self: start;
        grid-column: -1 / 1;
        grid-row: 2;
        text-align: right;
        position: relative;
        left: -1.5em;
        width: calc(100% + 1.5em);
    }
`


const Paragraph = styled.p`
    font-size: var(--fs-body);
    line-height: 1.35;
    padding: .5em;
    background-color: var(--clr-light);
    color: var(--clr-dark);
    text-align: justify;

    @media (min-width: 600px) {
        font-size: 1.5rem;
    }
`

const WhatIdoWrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
`

const WhatIDo = styled.div`
    box-shadow: var(--bs);

`

const WhatIdoTitle = styled(Title) `
    margin-top: .5em;
    font-weight: var(--fw-med);
    color: var(--clr-dark);
    font-size: var(--fs-h2);
    ::after {
        content: '';
        display: block;
        width: 2em;
        height: 1px;
        margin: .3em auto .3em;
        background: var(--clr-dark);
        opacity: 0.25;
    }
`


const H3 = styled.h3`
    text-align: center;
    font-size: var(--fs-h3);
    font-weight: var(--fw-med);
    padding: .3em;
    margin: 0;
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
            <WhatIdoTitle>What I do</WhatIdoTitle>
            <WhatIdoWrapper>
                <WhatIDo>
                    <H3>Front-end Development</H3>
                    <Paragraph>
                        I have experience building responsive websites using HTML, CSS, and JavaScript, and I have completed both the Scrimba Front-End Path and the edX Skills for Life bootcamp in front-end development. I am proficient with popular front-end frameworks such as Bootstrap and React, and I am constantly learning and improving my skills.
                    </Paragraph>
                </WhatIDo>
                <WhatIDo>
                    <H3>React Development</H3>
                    <Paragraph>
                        I am familiar with React and have completed projects using React Hooks and React Router 6. I am committed to learning more about this powerful front-end framework and staying up-to-date with the latest trends and best practices.
                    </Paragraph>
                </WhatIDo>
                <WhatIDo>
                    <H3>Node.js Development</H3>
                    <Paragraph>
                        I have basic knowledge of Node.js from completing the edX Skills for Life bootcamp in front-end development. I am excited to continue building my skills in server-side development and explore the possibilities of building full-stack web applications with Node.js and integrating it with front-end technologies.
                    </Paragraph>
                </WhatIDo>
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