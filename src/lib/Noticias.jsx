import React from "react";
import { useState, useEffect } from "react";
import Noticia from "../lib/Noticia";
import Noticia2 from "./Noticia";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

function Noticias() {
  const [noticias, setNoticias] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchproyecto = async () => {
      try {
        const api = await fetch("https://jasyapp.onrender.com/noticias")
          .then((response) => response.json())
          .then((data) => setNoticias(data));
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchproyecto();
  }, []);

  return (
    <div className="bg-black w-screen flex justify-start items-center flex-col">
      {/* <img
          className="fixed z-1 left-1 "
          src="https://cdn.discordapp.com/attachments/749326094800519179/1160364125680046131/file.png?ex=6534644e&is=6521ef4e&hm=d9573c014332390a791af30756c7b8ba0c5e0010a1b74da63f4d23412d978660&"
          alt=""
        /> */}
      <div className="text-white flex flex-col w-[70%] items-center xl:items-start">
        <h1 className=" text-4xl mt-20 relative text-center font-bold z-200">
          Noticias
        </h1>
        <div className="flex gap-4">
          <span className="cursor-pointer underline"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </span>
          <span> <IoIosArrowForward className="w-4"/>  </span>
          <span className="cursor-pointer ">Noticias</span>
        </div>
      </div>

      <hr className="border-2 w-2/3 m-10 rounded-xl relative  z-200" />
      <div className="flex flex-col justify-center items-center flex-wrap ">
        {noticias.map((noticia) => (
          <Noticia key={noticia.descripcion} data={noticia}></Noticia>
        ))}
      </div>
    </div>
  );
}

export default Noticias;
