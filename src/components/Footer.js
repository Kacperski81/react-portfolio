import styled from "styled-components";

const FooterWrapper = styled.footer`
    height: 60px;
    margin-top: .5em;
    box-shadow: 0.25em 0.25em 0.75em rgba(0,0,0,.25),
                0.125em 0.125em 0.25em rgba(0,0,0,.15);
`

function Footer() {
    return (
        <FooterWrapper>
            <p>&copy;Marcin Kacperski</p>
        </FooterWrapper>
    )
}

export default Footer;