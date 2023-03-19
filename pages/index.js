import Tarjeta from "@/componentes/Tarjeta";
import axios from "axios";
import Layout from "@/componentes/Layout";

export default function Home({ articulos }) {
  //console.log(articulos);
  
  return (
    <Layout>
      <Tarjeta className="mt-5" articulos={articulos} />      
    </Layout>
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
