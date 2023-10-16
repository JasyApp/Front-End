import React from "react";
import { MesaggeContext } from "../context/MessageContext";
import { useEffect, useContext, useState } from "react";

function ProyectosPage() {
  const context = useContext(MesaggeContext);
  const [mesagge, setMesagge] = context;

  return (
    <div className="text-white">
      <div className="w-full h-[400px] overflow-hidden">
        <img className="w-full" src={mesagge.imagen} alt="" />
      </div>
    </div>
  );
}

export default ProyectosPage;
