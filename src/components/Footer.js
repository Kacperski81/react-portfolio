import styled from "styled-components";
import { FaLinkedin, FaGithub } from 'react-icons/fa';


const FooterWrapper = styled.footer`
    height: 60px;
    margin-top: .5em;
    font-size: 1.25rem;
    box-shadow: 0.25em 0.25em 0.75em rgba(0,0,0,.25),
                0.125em 0.125em 0.25em rgba(0,0,0,.15);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

function Footer() {
    return (
        <FooterWrapper>
            <p>&copy;kacperski81@gmail.com</p>
            <a href="https://www.linkedin.com/in/marcinkacperski" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/Kacperski81" target="_blank"><FaGithub /></a>
        </FooterWrapper>
    )
}

export default Footer;