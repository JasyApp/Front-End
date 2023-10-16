import React, { useState } from "react";
import { api } from "../utils/api";
import { useNavigate } from "react-router-dom";

function Form() {
  let navigate = useNavigate()
    const [titleInput, setTitleInput] = useState("")
    const [nameInput, setNameInput] = useState("")
    const [profileURLInput, setProfileURLInput] = useState("")
    const [descriptionInput, setDescriptionInput] = useState("")
    const [imageURLInput, setImageURLInput] = useState("")

    async function handleForm(e) {
        e.preventDefault()

        console.log({
            titulo: titleInput,
            descripcion: descriptionInput,
            imagen: imageURLInput,
            nombre: nameInput,
            perfil: profileURLInput
        })
        const response = await api.post("/proyecto/add", {
            id: 16,
            titulo: titleInput,
            descripcion: descriptionInput,
            autor: {
                nombre: [nameInput],
                perfil: profileURLInput
            },
            etiquetas: [],
            imagen: imageURLInput,
            urlPost: "asdfasdf",
            mostrar: true

        })

        
        navigate("/proyectos")
    }

  return (
    <div className=" text-white flex justify-center items-center">
      <div>
        <form
            onSubmit={handleForm}
            className="flex justify-center border-2 items-center  flex-col flex-wrap rounded-lg gap-2 mt-8 p-4 "
        //   action="http://jasyapp.onrender.com/proyecto/add"
        //   method="post"
        >
          <div className="px-4 py-2 border-2 rounded-xl">Formulario</div>
          <div className="flex gap-2 flex-wrap justify-center items-center">
            <div className="flex flex-col gap-4">
              <div>
                <h4>Titulo</h4>
                <div className="bg-white px-4">
                  <input
                    className=" text-black outline-none"
                    type="text"
                    name="titulo"
                    value={titleInput}
                    onChange={e => setTitleInput(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <h4>Descripcion</h4>
                <div className="bg-white px-4">
                  <textarea
                    className="text-black outline-none w-full h-20"
                    type="text"
                    name="descripcion"
                    value={descriptionInput}
                    onChange={e => setDescriptionInput(e.target.value)}
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div >
                <h4>Nombre</h4>
                <div className="bg-white px-4">
                  <input
                    className="text-black outline-none"
                    type="text"
                    name="nombre"
                    value={nameInput}
                    onChange={e => setNameInput(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <h4>Url del perfil</h4>
                <div className="bg-white px-4">
                  <input
                    className="text-black outline-none"
                    type="text"
                    name="perfil"
                    value={profileURLInput}
                    onChange={e => setProfileURLInput(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <h4>Url imagen</h4>
                <div className="bg-white px-4">
                  <input
                    className="text-black outline-none"
                    type="text"
                    name="imagen"
                    value={imageURLInput}
                    onChange={e => setImageURLInput(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-2 bg-[#2f5aa8] rounded-xl mt-8 cursor-pointer font-bold">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
