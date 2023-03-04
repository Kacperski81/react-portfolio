import styled from "styled-components";

const FooterDiv = styled.footer`
box-shadow: 0.25em 0.25em 0.75em rgba(0,0,0,.25),
            0.125em 0.125em 0.25em rgba(0,0,0,.15);
`

function Footer() {
    return (
        <FooterDiv>
            <p>&copy;Marcin Kacperski</p>
        </FooterDiv>
    )
}

export default Footer;