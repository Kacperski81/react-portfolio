import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const styles = {
    toggle: {
        marginTop: "1rem",
    }
}

function Header() {
    return (
        <header>
            <Navbar collapseOnSelect sticky="top" expand="md">
                <Navbar.Brand className="brand"><Link to="/">&lt;devKacper /&gt;</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
        </header>
    )
}

export default Header;