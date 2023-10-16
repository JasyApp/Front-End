import React from "react";
import { useState, useEffect } from "react";
import Card from "../lib/Card";
import { useNavigate } from "react-router-dom";

function Proyectos() {
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

  const navigate = useNavigate();

  return (
    <div className="flex justify-start items-center mt-10  flex-col m-10 ">
      <div className="flex w-full xl:flex-row flex-col "> 
        <div className="w-1/3 hidden xl:flex"></div>
        <div className="text-white text-4xl w-3/3 xl:1/3 mb-4 font-bold text-center">
          Explore todos los proyectos
        </div>
        <div className="w-3/3 ml-6 xl:1/3 flex justify-center items-center" onClick={() => {
            navigate("/añadir")
        }}>
            <div className="text-white bg-[#2f5aa8] h-10  px-6 py-4 flex justify-center items-center rounded-3xl cursor-pointer mr-6">Subir Proyecto </div>
        </div>
      </div>

      <hr className="border-2 w-1/2 m-9 rounded-xl" />
      <div className="flex-wrap flex w-screen justify-center ">
        {proyectos.map((proyecto, i) => {
          return <Card data={proyecto} />;
        })}
      </div>
    </div>
  );
}

export default Proyectos;
