import { useEffect , useState} from "react"
import React  from 'react'


function Card({data}) {
    console.log(data)
   

  return (
    <div  key={data.id} className='bg-[#38393D] rounded-lg  h-[500px]  w-1/4 m-3 text-white flex justify-center gap-4 items-center flex-col'>
        <div className="flex justify-center items-center rounded-full bg-black  h-1/2 w-[220px] overflow-hidden mt-2 ">
            <img className="h-full"  src={data.imagen} alt="" />
        </div>
        <div className="flex justify-center gap-2 w-full">
            <div className="flex justify-center  items-start w-full gap-4 font-bold" style={{fontFamily: 'Poppins'}}>
            <a className="w-1/2" href={data.autor.perfil} target="blank">{data.titulo}</a>
            
            </div>
            <div className="w-1/2 text-end">Likes</div>
        </div>
        
        <div className="text-sm m-2" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum reiciendis dolore laudantium modi. Asperiores molestias cum numquam perferendis commodi voluptatum.
        </div>
        <div style={{fontFamily: 'Poppins'}} className="flex flex-wrap gap-3 mx-4 mb-3 text-[12px]">
            {data.etiquetas.map((etiqueta)=>(
                <div  className="bg-white text-black rounded-full px-2 py-1" key={etiqueta}>{etiqueta}</div>
            ))}
        </div>
        
    </div>
  )
}

export default Card