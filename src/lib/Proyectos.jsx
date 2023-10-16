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
    <div className="flex justify-start items-center mt-10  flex-col m-10 ">
      <div className="flex w-full xl:flex-row flex-col ">
        <div className="w-1/3 hidden xl:flex"></div>

        <div className="text-white flex flex-col w-full items-center xl:items-start">
          <div className="text-4xl w-3/3 xl:1/3  font-bold ">Proyectos</div>
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
        <div className="w-3/3 ml-6 mt-8 xl:1/3 flex justify-center items-center">
          <div
            onClick={() => {
              navigate("/añadir");
            }}
            className="text-white bg-[#2f5aa8] h-10  px-6 py-4 flex justify-center items-center rounded-3xl cursor-pointer mr-6"
          >
            Subir Proyecto{" "}
          </div>
        </div>
      </div>

      <hr className="border-2 w-2/3 m-9 rounded-xl" />
      <div className="flex-wrap flex w-screen justify-center ">
        {proyectos.map((proyecto, i) => {
          return <Card data={proyecto} />;
        })}
      </div>
    </div>
  );
}

export default Proyectos;
