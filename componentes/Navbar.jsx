import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import axios from "axios";
import { useRouter } from "next/router";

export default function BarraNav() {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/auth/logout");
    } catch (error) {
      console.error(error.message);
    }
    router.push("/login");
  }; 
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Idea Computacion</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/nuevo">Nuevo</Nav.Link>
            <NavDropdown title="Acciones" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">Accion 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Accion 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Accion 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Accion 4</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#" onClick={() => logout()}>Salir</Nav.Link>           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
