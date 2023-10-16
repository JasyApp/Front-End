import React from "react";
import { MesaggeContext } from "../context/MessageContext";
import { useEffect, useContext, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function ProyectosPage() {
  let navigate = useNavigate();
  const context = useContext(MesaggeContext);
  const [mesagge, setMesagge] = context;
  console.log(mesagge);

  return (
    <div className="text-white">
      <header className="flex w-full h-[400px] justify-between bg-[#27282D]">
        <div className="text-white flex flex-col overflow-hidden xl:w-1/2   w-full">
          <div className="flex items-center justify-start  text-xl m-4 xl:m-10 gap-4 text-center ">
            <img
              className="w-10"
              src="https://cdn.discordapp.com/attachments/749326094800519179/1160283731148410900/image_2023-10-07_152630746-removebg-preview.png?ex=6534196e&is=6521a46e&hm=3611b1a767f7696464a479e93978c56954186f38f2d9b34cc4a1e236f64993fe&"
              alt=""
            />
            <div
              onClick={() => {
                navigate("/");
              }}
              className="underline cursor-pointer"
            >
              Home
            </div>
            <IoIosArrowForward className="w-4" />
            <div
              onClick={() => {
                navigate("/proyectos");
              }}
              className="underline cursor-pointer"
            >
              Proyectos
            </div>
            <IoIosArrowForward className="w-4" />
            <div>{mesagge.titulo}</div>
          </div>
          <h1 className="text-5xl font-extrabold ml-10 mt-10">
            {mesagge.titulo}
          </h1>
        </div>
        <div className="xl:h-full h-0 overflow-hidden">
          <img className="xl:h-full h-0" src={mesagge.imagen} alt="" />
        </div>
      </header>
      <div className="flex w-full justify-center pb-24 text-3xl flex-wrap bg-[#38393D] ">
        <div className="flex w-2/2 xl:w-3/4 flex-col">
          <h2 className="my-10 mx-6 font-extrabold">Sobre el proyecto</h2>
          <h4 className="mx-6 text-lg">{mesagge.descripcion}</h4>
        </div>
        <div className=" w-2/2 xl:w-1/4 flex items-end flex-col justify-between">
          <div className="flex justify-start items-center  m-2 gap-4 border-2  flex-col">
            <h2 className="text-center font-extrabold mt-4">
              Informacion del proyecto
            </h2>
            <h3 className="text-2xl font-bold">Integrantes del equipo</h3>
            <div className="text-sm font-normal flex flex-col">
              {mesagge.autor.nombre.map((e)=>(
                <div key={e}>°{e}</div>
              ))}
            </div>
            <h3 className="text-2xl font-bold">Etiquetas del proyecto</h3>
            <div
              style={{ fontFamily: "Poppins" }}
              className="flex h-[100px]  flex-wrap gap-3 mx-4 mb-3 text-[12px]"
            >
              {mesagge.etiquetas.map((etiqueta) => (
                <button
                  onClick={() => {
                    handleSubmit(etiqueta);
                  }}
                  className="bg-white hover:border-gray-700 hover:underline border-2 border-white text-black rounded-full px-2 flex items-center h-8"
                  key={etiqueta}
                >
                  {etiqueta}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProyectosPage;
