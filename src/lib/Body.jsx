import React from 'react'
import "../letter.css"

function Body() {
  return (
    <div className=" w-screen h-screen flex justify-center items-center overflow-hidden bg-repeat" style={{backgroundSize: "90%" ,backgroundRepeat: "repeat" ,  backgroundImage: 'url("https://i.pinimg.com/originals/9b/0b/ce/9b0bcea455a6f7b301cf3f070ae42738.png")' }}>
        <div className="w-screen">
        <div className="w-1/3 h-full z-20 relative">
            <div class="wrapper">
	        <svg>
		        <text x="50%" y="50%" dy=".35em" text-anchor="middle">
			        Jasy App
		        </text>
	        </svg>
            </div>
            <div className="p-6 text-white">
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est nisi architecto molestias eveniet! Sint accusamus rerum commodi libero earum neque repellat nobis exercitationem quis totam recusandae ea, voluptatem necessitatibus distinctio? 
            </div> 
        </div>
        <div className="w-2/3 h-full">

        </div>         
        </div>  
            {/* <img class="absolute h-full bg-repeat z-10" src="https://cdn.discordapp.com/attachments/749326094800519179/1160270294695555072/WhatsApp_Image_2023-10-07_at_14.39.22.jpeg?ex=65340ceb&is=652197eb&hm=3fc0e6de4b78f4798e17c0f407c6162962cf1923ca2f84edbdda15b56307bf33&" alt="" /> */}
        </div>
  )
}

export default Body