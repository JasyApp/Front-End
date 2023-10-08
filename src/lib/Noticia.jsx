import React from 'react'

function Noticia({data}) {
    console.log(data)
  return (
    <a href={data.source} className='w-[400px] relative Z-200000 p-4 h-[400px] m-2 text-white bg-[#38393D] overflow-hidden  rounded-xl flex flex-col justify-between items-center'>
        
        <div className='relative z-20 text-2xl text-center'>
            {data.titulo}
        </div>
        <div className='overflow-hidden h-[400px] relative z-10 justify-center flex items-center mt-6 m-2'>
            <img className='h-full rounded-xl' src={data.img} alt="" />
        </div>
        <div className='flex justify-start items-start w-full'>
            <div className='w-full font-thin ml-4 '>{data.fecha}</div>
        </div>
    </a>
  )
}

export default Noticia