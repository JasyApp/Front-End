import React from "react";
import { useState, useEffect } from "react";
import Card from "../lib/Card";

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

  return (
    <div className="flex justify-start items-center mt-10  flex-col m-10 ">
      <div className="text-white text-4xl font-bold">
        Explore todos los proyectos.
      </div>
      <hr className="border-2 w-1/3 m-9 rounded-xl" />
      <div className="flex-wrap flex w-screen " >
        {proyectos.map((proyecto, i) => {
          return <Card data={proyecto} />;
        })}
      </div>
    </div>
  );
}

export default Proyectos;
