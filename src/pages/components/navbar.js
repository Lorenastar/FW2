import {Container, Nav, Navbar} from 'react-bootstrap';
import style from "@/styles/Navbar.module.css"

export default function Menu() {
  return (
  <Container>
    <Navbar expand="sm" bg="dark" className={`${style.degrademenu} p-2 border border-2 border-primary rounded-2`}>
        <Navbar.Brand href="/">6V</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/lista">Lista</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  </Container>
  );
}