import {  useContext} from "react";
import { BiSolidHeart } from "react-icons/bi";
import React from "react";
import { MesaggeContext } from "../context/MessageContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Card({ data }) {
  console.log(data);
  const context = useContext(MesaggeContext);
  const [mesagge, setMesagge] = context;
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    navigate("/categorias");
    setMesagge(e);
  };
  const [counter, setCounter] = useState(0)
  const handleProyect = (e) => {
    navigate("/proyectpage");
    setMesagge(e);
  };
  
 
  

  function handleLove(data) {
    setCounter(counter + 1)
  }

  return (
    <div onClick={()=>{handleProyect(data)}}
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
            <BiSolidHeart onClick={()=>{handleLove(data)}} className="h-6 text-[#ff3040]" />
          </div>
          <div className="flex">{counter} Likes</div>
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
          <button  onClick={()=>{handleSubmit(etiqueta)}}
            className="bg-white text-black rounded-full px-2 flex items-center h-8"
            key={etiqueta}
          >
            {etiqueta}
          </button >
        ))}
      </div>
    </div>
  );
}

export default Card;
