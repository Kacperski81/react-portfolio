import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

const styles = {
    toggle: {
        marginTop: "1rem",
    }
}

function Header() {
    return (
        <>
            <Navbar collapseOnSelect sticky="top" expand="md" className="header">
                <Navbar.Brand className="brand"><Link to="/">&lt;devKacper /&gt;</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Hamburger />
                <Navbar.Collapse style={styles.toggle} id="responsive-navbar-nav">
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