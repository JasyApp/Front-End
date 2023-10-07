import React from 'react'
import "../font.css";


function Header() {
  return (
    <div>
        <div className="bg-[#0B3E91] w-screen p-2 flex justify-center items-center text-white relative z-20">Welcome to the new NASA website. We’re working to continuously improve your web experience. If you don't find what you are looking for, give feedback.</div>
    <div className = " bg-[#000000] h-20 w-screen flex justify-center items-center gap-2 relative z-20">
    <div className=" h-full w-1/3 flex justify-start mx-5 items-center">
    <div >
        <div>
            <div class=" border-2 flex items-center">
                <input type="text" id="search" name="search" class="w-full py-1 px-4 bg-inherit border-4 border-white border-hidden text-gray-500 focus:outline-none focus:border-blue-500" placeholder="Search"/>
                <button class="border-l-2 inset-y-0 right-0 px-4 py-2 bg-[#000] text-white font-semibold border-white">Buscar</button>
            </div>
        </div>
    </div>

    </div>
    <div className=" flex items-center w-1/3 h-full justify-center">
        <div className="flex h-20">
        <img src="https://cdn.discordapp.com/attachments/749326094800519179/1160283731148410900/image_2023-10-07_152630746-removebg-preview.png?ex=6534196e&is=6521a46e&hm=3611b1a767f7696464a479e93978c56954186f38f2d9b34cc4a1e236f64993fe&" />
        
        </div>
        
           
    </div>
    <div className="flex h-full w-1/3 text-white">
        <div className=" flex justify-center items-center text-center border-[#000] border-4 p-4 hover:border-b-white cursor-pointer">Noticias</div>
        <div className=" flex justify-center items-center text-center border-[#000] border-4 p-4 hover:border-b-white cursor-pointer">Twets AEP</div>
        <div className=" flex justify-center items-center text-center border-[#000] border-4 p-4 hover:border-b-white cursor-pointer">Acerca de Nosotros</div>
    </div>
    </div>
    </div>
    
  )
}

export default Header