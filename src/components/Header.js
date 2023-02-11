import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

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
                            <Link to="/">Home</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/projects">Projects</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/contact">Contact</Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header;