import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const sytles = {
    background: {
        backgroundColor: 'green'
    }

}

function Header() {
    return (
        <>
            <Navbar collapseOnSelect sticky="top" expand="md" style={sytles.background}>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav variant="pills">
                        <Nav.Item>
                            <Nav.Link>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header;