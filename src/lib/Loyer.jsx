import React from "react";
import { useEffect, useContext, useState } from "react";
import { MesaggeContext } from "../context/MessageContext";
import Card from "../lib/Card";

function layer() {
  const [proyectos, setproyecto] = useState([]);

  useEffect(() => {
    const fetchproyecto = async () => {
      try {
        const api = await fetch(
          "https://jasyapp.onrender.com/proyecto/" + mesagge
        )
          .then((response) => response.json())
          .then((data) => setproyecto(data));
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchproyecto();
  }, []);

  const context = useContext(MesaggeContext);
  const [mesagge, setMesagge] = context;
  console.log(mesagge);
  return (
    <div className="flex justify-center items-center flex-wrap flex-col">
      <h1 className="text-white text-4xl m-6 font-bold">Estos son los proyectos sobre <h6 className="text-[#2f5aa8]">"{mesagge}"</h6></h1>
      <div className="flex flex-wrap justify-center items-center  ">
        {proyectos.map((proyecto) => {
          return <Card data={proyecto} />;
        })}
      </div>
    </div>
  );
}

export default layer;
