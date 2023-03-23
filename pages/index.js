import Tarjeta from "@/componentes/Tarjeta";
import axios from "axios";
import Layout from "@/componentes/Layout";
import { Message_data } from "../context/context";
import { useContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home({ articulos }) {
  //console.log(articulos);
  const { message, setMessage } = useContext(Message_data);
  if (message != undefined) {
    //console.log(message);
    toast.success(message, {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  }

  return (
    <>
      <Layout>
        <Tarjeta className="mt-5" articulos={articulos} />
      </Layout>
      <ToastContainer />
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    //const resp = await axios.get("http://localhost/2base/_proyectos_web/proyecto46/api_rest_php/");
    //const { data } = await axios.get("https://nextjs.2base.com.ar/api");
    //const { data } = await axios.get("http://localhost:3000/api");
    //const { data } = await axios.get("https://api.2base.com.ar/");
    const { data } = await axios.get(process.env.URL_API);
    //console.log(data);
    //console.log(process.env.URL_API);
    return {
      props: {
        articulos: data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
}
