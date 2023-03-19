import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Formulario() {
  const router = useRouter();
  const [id, setId] = useState(0);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id == 0) {
      //insertar
      const resul = await axios.post("/api/", { nombre, precio });
      toast("Insertado");      
      router.push("/");  
    } else {
      //updatear
      const resul = await axios.put("/api/" + id, { id, nombre, precio });
      toast("Modificado el registro" + id);
      router.push("/");        
    }
  };

  function handleChangeN(e) {
    setNombre(e.target.value);
  }

  function handleChangeP(e) {
    setPrecio(e.target.value);
  }

  useEffect(() => {
    const obtenerProduct = async () => {
      const { data } = await axios.get("/api/" + router.query.id);
      setId(data[0].id);
      setNombre(data[0].nombre);
      setPrecio(data[0].precio);
    };

    if (router.query.id) {
      obtenerProduct();
    }
  }, []);

  return (
    <div className="mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            value={nombre}
            placeholder="Ingrese un nombre"
            onChange={handleChangeN}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="text"
            name="precio"
            value={precio}
            placeholder="Ingrese un precio"
            onChange={handleChangeP}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          {id === 0 ? "insertar" : "updatear"}
        </Button>
      </Form>      
    </div>
  );
}
