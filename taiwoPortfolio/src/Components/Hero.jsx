import React from "react";
import image from '../assets/port3-removebg-preview.png'


function Hero(){
return(
    <div>
   
    <div className="flex text-white mx-20 my-20 font-bodyFont tracking-wide bg-black">

        <div className=" mt-20 w-[56%]">
            <h1 className="text-[30px] ">Hello,</h1>
            <h1 className="text-[50px]">I'm Taiwo</h1>
            <h1 className="text-[35px]">Frontend Web Developer</h1>
            <p className="text-[] ">i am skilled and passionate about web development
                i am skilled in skills like HtML, CSS, JavaSCript, TailwindCSS and React
            </p>
        </div>

        <div className="  w-[50%]   ">
            <img src={image} className="-mt-28 ml-52 w-
              opacity-80  " alt="" />
        </div>

    </div>
    

    </div>
)
}

export default Hero