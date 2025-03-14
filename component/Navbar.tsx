"use client"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary mb-3">
            <Container>
                <Navbar.Brand href="#home"><img src="/img/logo.jpg" alt="logo" className="img-fluid rounded-circle " width={120} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="/" className="fw-bold">Accueil</Nav.Link>
                        <Nav.Link href="/about" className="fw-bold">A propos</Nav.Link>
                        <Nav.Link href="#mes creation" className="fw-bold">mes création</Nav.Link>
                        <Nav.Link href="#competence" className="fw-bold">Competence</Nav.Link>
                        <Nav.Link href="#contact" className="fw-bold">Contact</Nav.Link>
                    </Nav>
                    <Nav.Link href="/img/ElvisCV.pdf" className="btn  vert text-dark  p-2 m-2 ">Voir Mon CV</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;