import {Nav, Navbar} from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar sticky collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="home">Home Burger</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="menu">Menu</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;