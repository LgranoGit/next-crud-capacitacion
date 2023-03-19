import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BarraNav from "./Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";

function Layout({children}) {
  const router = useRouter();
  //console.log(router)
  
  return (
    <Container>
      <BarraNav />
      <Row>
        <Col>{children}</Col>
      </Row>
      <ToastContainer />
    </Container>
  );
}

export default Layout;