import axios from "axios";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Message_data } from "../context/context";
import { useContext } from "react";

export default function Tarjeta({ articulos }) {
  const router = useRouter();
  const { message, setMessage } = useContext(Message_data);

  async function handleDelete(e) {
    const result = await axios.delete(`/api/${e.target.id}`);
    toast.success(`Ha sido eliminado el registro ${e.target.id}`, {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    setMessage(null);
    router.push("/");
  }

  async function handleUpdate(e) {
    setMessage(null);
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
