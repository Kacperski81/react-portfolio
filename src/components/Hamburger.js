import {useState} from "react"
import styled from "styled-components";

const HamburgerWrapper = styled.div`
    display: inline-block;
    cursor: pointer;
    padding: .625rem 1rem;
    // background-color: #000;
`

const TopLine = styled.span`
    display: block;
    height: 2px;
    width: 20px;
    background-color: #273e47;
    margin-bottom: .2rem;
    transition: transform 0.3s ease-out;
    border-radius: 2px;
`

const MiddleLine = styled(TopLine) `

`

const BottomLine = styled(TopLine) `

`



export default function Hamburger() {
    const [isActive,setIsActive] = useState(false);
    
    const handleClick = () => {
        setIsActive(!isActive)
        console.log(isActive)
    };

    return (
        <HamburgerWrapper onClick={handleClick}>
            <TopLine />
            <MiddleLine />
            <BottomLine />
        </HamburgerWrapper>
    )
}
