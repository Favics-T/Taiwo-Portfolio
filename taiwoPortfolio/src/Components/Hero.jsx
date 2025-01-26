import React from "react";
import image from '../assets/port3-removebg-preview-oris.png'
import image1 from '../assets/myProfile.jpg'

/*
 <div className="flex justify-center items-center lg:ml-20">
        <img
          src={image}
          className="h-60 w-60 lg:h-96 lg:w-96 rounded-full border-4 border-teal-400"
          alt="Profile picture of Taiwo"
        />
      </div>
*/

function Hero(){
return(
    <div>
   
    <div className="flex flex-col lg:flex-row mb-40 lg:mx-20 text-white mx-20 my-10 font-bodyFont tracking-wide ">

        <div className=" mt-20 w-[56%]">
            <h1 className="text-[30px] ">Hello,</h1>
            <h1 className="text-[50px]">I'm Taiwo</h1>
            <h1 className="text-[35px]">Frontend Web Developer</h1>
            <p className="text-[] ">I am a Dedicated and detail-oriented Frontend Web Developer with a strong foundation in web development and a passion for creating user-friendly, innovative solutions. Seeking an opportunity to apply and grow technical skills in a challenging Frontend Web Development role.
            </p>
        </div>

        {/* image area */}
        <div className="ml-24 border border-orange-400 rounded-full ">
        <img src={image1} 
        className="border rounded-full  h-96"
        alt="Taiwo Profile Picture" />

        </div>
       
    </div>
    

    </div>
)
}

export default Hero