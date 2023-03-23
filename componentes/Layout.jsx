import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BarraNav from "./Navbar";


function Layout({ children }) {
  

  return (
    <Container>
      <BarraNav />
      <Row>
        <Col>{children}</Col>
      </Row>
      
    </Container>
  );
}

export default Layout;
