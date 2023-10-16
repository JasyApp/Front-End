import React from "react";

function Noticia({data}) {
  
  return (
    <a
      href={data.source}
      className="relative Z-200000 p-2 w-[80%]  xl:w-[70%]    my-[1px] border-[#232325] text-white bg-[#38393D] overflow-hidden  border--2 flex justify-between items-center  "
    >
      <div className="overflow-hidden h-[200px] relative z-10 justify-center flex items-center  w-[250px]  m-2">
        <img className="h-1/1 w-full rounded-xl" src={data.img} alt="" />
      </div>
      <div className="flex flex-col gap-4 w-full p-4">
        <div className="relative z-20 text-lg xl:text-2xl flex text-left font-semibold">
          {data.titulo}
        </div>
        <div className="flex text-sm xl:text-xl text-left">{data.descripcion}</div>
        <div className="flex justify-start items-start w-full">
          <div className="w-full font-thin ml-4 text-slate-200 ">
            {data.fecha}
          </div>
        </div>
      </div>
    </a>
  );
}

export default Noticia;
