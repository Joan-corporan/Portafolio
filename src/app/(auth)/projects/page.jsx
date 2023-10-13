import { Images } from "@/components/Images";
import React from "react";
export const metadata={
  title:'Projects',
  description:'Projects Joan Coporan Hernandez'
}

const page = () => {
  return (
    <div className="md:mx-16 xl:ml-20 xl:mr-40 mx-[16px] h-full flex-col  justify-around pb-[100px] items-center ">
      <div className=" w-full xl:flex  xl:justify-around md:flex md:justify-center mb-3  xl:m-3   md:m-3 ">
        <div className="rounded text-gray-800 bg-slate-100/70 w-full xl:w-1/2  md:w-1/2 p-3 xl:m-3 md:m-3 shadow-lg  mb-3 ">
          <div >
            <a className="flex justify-center  " href="https://effulgent-cobbler-7da35b.netlify.app/" target={"_blank"}>
              <Images  src="https://res.cloudinary.com/dfxpgwzls/image/upload/v1696529693/Captura_de_Pantalla_2023-10-05_a_la_s_15.14.18_z8ihe0.png" />
            </a>
          </div>
          <div>
            <h1 className="text-2xl py-2">Ecommerce App</h1>
            <p className="text-lg">
              App Juguetería .<br /> tecnologías: <br /> 
              <span className="text-red-700"> HTML</span>,
              <span className="text-cyan-600">CSS</span>,
              <span className="text-yellow-400">JS</span>,
              <span className="text-pink-600"> Bootstrap</span>,
              <span className="text-green-400">React</span>,
              <span className="text-cyan-600">React Router</span>,
              <span className="text-green-400">Node.js</span>,
              <span className="text-red-600">Express</span>,
              <span className="text-green-700">MongoDb</span>
              
            </p>
          </div>
        </div>

        <div className="rounded text-gray-800 bg-slate-100/70 w-full xl:w-1/2  md:w-1/2 p-3 xl:m-3 md:m-3 shadow-lg  ">
          <div >
            <a className="flex justify-center " target={"_blank"}href="alejandroarafi.github.io/proyecto3/">
              <Images src="https://res.cloudinary.com/dfxpgwzls/image/upload/v1696528486/Captura_de_Pantalla_2023-10-05_a_la_s_14.54.00_vdqmmz.png" />
            </a>
          </div>
          <div>
            <h1 className="text-2xl py-2">Aplicación Dashboard</h1>
            <p className="text-lg">
            La API de Búsqueda de Personas es una herramienta poderosa para buscar y visualizar información de personas en una interfaz amigable.<br /> tecnologías: <br /> 
              <span className="text-red-700"> HTML</span>,
              <span className="text-cyan-600">CSS</span>,
              <span className="text-yellow-400">JS</span>
              <span className="text-pink-600"> Bootstrap</span>
              <span className="text-yellow-600"> Chart.js </span>.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full xl:flex  xl:justify-around md:flex md:justify-center  xl:m-3    md:m-3  ">
        <div className="rounded text-gray-800 bg-slate-100/70 w-full xl:w-1/2  md:w-1/2 p-3 xl:m-3 md:m-3 shadow-lg mb-3">
          <div className="">
            <a className="flex justify-center" target={"_blank"} href="joan-corporan.github.io/CRUD/">
              <Images src="https://res.cloudinary.com/dfxpgwzls/image/upload/v1697205322/Captura_de_Pantalla_2023-10-13_a_la_s_10.54.13_esq1v6.png" />
            </a>
          </div>
          <div>
            <h1 className="text-2xl py-2">Landing page</h1>
            <p className="text-lg">
            Este es un prototipo basado en un ecommerce.<br /> tecnologías: <br /> 
              <span className="text-red-700">HTML</span>,
              <span className="text-cyan-600">BOOTSTRAP</span>,
              <span className="text-amber-600">JS</span>,
              
            </p>
          </div>
        </div>

        <div className="rounded text-gray-800 bg-slate-100/70 w-full xl:w-1/2  md:w-1/2 p-3 xl:m-3 md:m-3 shadow-lg  mb-3 ">
          <div className="flex justify-center">
            <a href="https://proyecto4-react.netlify.app/" target={"_blank"}>
              <Images src="https://res.cloudinary.com/dfxpgwzls/image/upload/v1696524105/Captura_de_Pantalla_2023-10-05_a_la_s_13.34.16_mchoyt.png" />
            </a>
          </div>
          <div>
            <h1 className="text-2xl py-2">Restaurant App</h1>
            <p className="text-lg">
              Una aplicación de reservas para restaurant .<br /> tecnologías: <br /> 
              <span className="text-green-700">React</span>,
              <span className="text-cyan-600">React Router</span>,
              <span className="text-yellow-600">FireBase</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
