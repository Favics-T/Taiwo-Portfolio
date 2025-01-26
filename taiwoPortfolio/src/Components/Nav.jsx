import React from "react";
import { Link } from "react-router-dom";


function Nav(){

return(
    <>
{/* Nav Div */}
    <div className="px-10 py-10 text-white sticky top-0 grid grid-cols-3 gap-20 font-bodyFont mx-40 ">

            {/* Logo Starts Here */}
        <div>
           <Link to='/home'><h2 className="font-bodyFont text-[20px] font-extrabold text-[#E85C0D]  ">TAIWO KOLAPO</h2></Link> 
        </div>
        {/* Logo Ends Here */}

<div>
    <ul className="flex gap-10">
       <Link to='/home'><li className="lists">Home</li></Link> 
       <Link to='/about'><li className="lists">About</li></Link> 
       <Link to='/resume'><li className="lists">Resume</li></Link> 
    </ul>
</div>

<div className="w-28">
   <Link to='hireme'>
   <h1 className="bg-white text-blue-900
     px- py- text-center rounded-xl ">Hire Me</h1>
   </Link>
</div>




    </div>

    
    </>
)

}

export default Nav