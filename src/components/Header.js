import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";

const styles = {
    navLink: {
        fontSize: "1.2rem",
        marginRight: ".5rem",
        textAlign: "center"
    }
}

function Header() {
    return (
        <>
            <Navbar collapseOnSelect sticky="top" expand="md" className="nav">
                <Navbar.Brand className="brand"><Link to="/">&lt;devKacper /&gt;</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="nav-hamburger">
                    <Nav variant="pills" className="nav-items">
                        <Nav.Item>
                            <NavLink style={styles.navLink} className={({isActive}) => isActive ? 'active-link' : null }to="/">Home</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink style={styles.navLink} className={({isActive}) => isActive ? 'active-link' : null } to="/projects">Projects</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink style={styles.navLink} className={({isActive}) => isActive ? 'active-link' : null } to="/contact">Contact</NavLink>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header;