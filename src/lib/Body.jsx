import React from "react";
import { useEffect, useState } from "react";
import "../letter.css";
import Card from "../lib/Card";
import { Outlet, Link } from "react-router-dom";
import Noticia from "../lib/Noticia";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Proyectos from "./Proyectos";

function Body() {
  const [proyectos, setproyecto] = useState([]);

  useEffect(() => {
    const fetchproyecto = async () => {
      try {
        const api = await fetch("https://jasyapp.onrender.com/proyectos")
          .then((response) => response.json())
          .then((data) => setproyecto(data));
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchproyecto();
  }, []);

  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const fetchproyecto = async () => {
      try {
        const api = await fetch("http://192.168.88.184:5000/articulos")
          .then((response) => response.json())
          .then((data) => setNoticias(data));
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchproyecto();
  }, []);

  return (
    <div className="bg-black z-20 relative overflow-hidden">
      <div className="bg-black w-screen h-[700px] xl:h-[600px] flex justify-center items-center bg-repeat  ">
        <img
          className="fixed w-2/2 z-1 bottom-0 left-0 "
          src="https://cdn.discordapp.com/attachments/749326094800519179/1160364125680046131/file.png?ex=6534644e&is=6521ef4e&hm=d9573c014332390a791af30756c7b8ba0c5e0010a1b74da63f4d23412d978660&"
          alt=""
        />
        <div>
          <div className=" w-screen xl:w-1/3 ml-4 h-full z-20 relative ">
            <div class="wrapper">
              <svg>
                <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                  Jasy App
                </text>
              </svg>
            </div>
            <div style={{ fontFamily: "Poppins" }} className="p-6 text-white">
              Nuestro foro astronómico es un espacio virtual para apasionados
              del cosmos. Explora las maravillas del espacio, desde galaxias
              hasta eclipses, comparte observaciones, discute descubrimientos y
              conecta con la comunidad astronómica.
            </div>
          </div>
          <div className="w-1 xl:w-2/3 h-full"></div>
        </div>
        {/* <img class="absolute h-full bg-repeat z-10" src="https://cdn.discordapp.com/attachments/749326094800519179/1160270294695555072/WhatsApp_Image_2023-10-07_at_14.39.22.jpeg?ex=65340ceb&is=652197eb&hm=3fc0e6de4b78f4798e17c0f407c6162962cf1923ca2f84edbdda15b56307bf33&" alt="" /> */}
      </div>
      <div className="h-auto w-screen bg-[#27282D] relative z-10  shadow-2xl  rounded-3xl flex justify-center flex-col items-center">
        <div className="py-1 px-4 m-12">
          <h2
            style={{ fontFamily: "Poppins" }}
            className="m-4 text-3xl font-bold text-white"
          >
            Descubra Proyectos
          </h2>

          <hr className="border-2 w-full m-2 rounded-xl" />
        </div>
        <div className="flex justify-center  flex-wrap items-center">
          {proyectos.map((proyecto, i) => {
            if (i < 3) {
              return <Card data={proyecto} />;
            }
          })}

          <div className="bg-[#38393D] rounded-lg  h-[500px]  w-[300px] m-2 text-white flex justify-center gap-4 items-center flex-col">
            <Link to="proyectos">
              <div className="text-xl">Explore mas proyectos </div>
              <AiOutlinePlusCircle className="h-8" />
            </Link>
          </div>
        </div>
        <hr className="border-2 w-2/3 m-9 rounded-xl" />
        
      </div>
    </div>
  );
}

export default Body;
