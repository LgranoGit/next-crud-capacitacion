import axios from "axios";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Tarjeta({ articulos }) {
  const router = useRouter();

  async function handleDelete(e) {
    const result = await axios.delete(`/api/${e.target.id}`);
    toast(`Ha sido eliminado el registro ${e.target.id}`);
    router.push("/");
  }

  async function handleUpdate(e) {
    router.push(`/edit/${e.target.id}`);
  }

  return (
    <>
      <Row xs={1} md={4} className="g-4 mt-5">
        {articulos.map((art) => (
          <Col key={art.id}>
            <Card>
              <Card.Img variant="top" src="/logo_idea.png" />
              <Card.Body>
                <Card.Title>{art.nombre}</Card.Title>
                <Card.Text>{art.precio}</Card.Text>
                <Card.Text>{art.actualizo}</Card.Text>
                <Card.Footer>
                  <div className="d-flex justify-content-around">
                    <Button
                      variant="primary"
                      id={art.id}
                      onClick={handleUpdate}
                    >
                      Modificar
                    </Button>
                    <Button variant="danger" id={art.id} onClick={handleDelete}>
                      Eliminar
                    </Button>
                  </div>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <ToastContainer />
    </>
  );
}
