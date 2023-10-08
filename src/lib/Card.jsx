import { useEffect, useState } from "react";
import { BiSolidHeart } from "react-icons/bi";
import React from "react";

function Card({ data }) {
  console.log(data);

  return (
    <div
      key={data.id}
      className="bg-[#38393D] rounded-lg  h-[500px]  w-[300px] m-2 text-white flex justify-center gap-4 items-center flex-col"
    >
      <div className="flex justify-center items-center rounded-full bg-black overflow-hidden h-[250px] w-[220px]  mt-2 ">
        <img className="h-full" src={data.imagen} alt="" />
      </div>

      <div className="flex justify-center gap-2 w-full">
        <div
          className="flex justify-between  items-start w-full gap-4 font-bold"
          style={{ fontFamily: "Poppins" }}
        >
          <a
            className="pl-6 flex flex-col"
            href={data.autor.perfil}
            target="blank"
          >
            {data.titulo}
            <span className="text-sm font-thin">- {data.autor.nombre[0]}</span>
          </a>
        </div>

        <div className="w-1/2 pl-2 flex gap-2 items-center">
          <div className="flex">
            <BiSolidHeart className="h-6 text-[#ff3040]" />
          </div>
          <div className="flex">{data.likes} Likes</div>
        </div>
      </div>

      <div
        style={{ textOverflow: "ellipsis" }}
        className="text-sm h-[100px] m-2 overflow-hidden"
      >
        {data.descripcion}
      </div>
      <div
        style={{ fontFamily: "Poppins" }}
        className="flex h-[100px] flex-wrap gap-3 mx-4 mb-3 text-[12px]"
      >
        {data.etiquetas.map((etiqueta) => (
          <div
            className="bg-white text-black rounded-full px-2 flex items-center h-8"
            key={etiqueta}
          >
            {etiqueta}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
