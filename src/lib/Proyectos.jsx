import React from "react";
import { useState, useEffect } from "react";
import Card from "../lib/Card";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

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
    <div className="flex justify-start items-center w-screen flex-col  ">
      <div className="flex w-full xl:flex-row flex-col ">
        <div className="text-white flex justify-around w-full items-center xl:items-start">
          <div className="w-auto xl:w-[30%]">
            <div className="text-4xl w-3/3 xl:1/4 mt-20 font-bold ">Proyectos</div>
            <div className="flex gap-4">
              <span
                className="cursor-pointer"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </span>
              <span>
                {" "}
                <IoIosArrowForward className="w-4" />{" "}
              </span>
              <span className="cursor-pointer underline">Proyectos</span>
            </div>
          </div>

          <div className="mt-24">
            <div
              onClick={() => {
                navigate("/añadir");
              }}
              className="text-white bg-[#2f5aa8] text-sm text-center px-4 py-2  rounded-3xl cursor-pointer "
            >
              <h1 className="w-full">Subir Proyecto</h1>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-2 w-2/3 m-10 rounded-xl" />
      <div className="flex-wrap flex w-screen justify-center ">
        {proyectos.map((proyecto, i) => {
          return <Card data={proyecto} />;
        })}
      </div>
    </div>
  );
}

export default Proyectos;
