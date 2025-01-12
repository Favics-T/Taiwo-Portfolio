import React from "react";


function Nav(){

return(
    <>
{/* Nav Div */}
    <div className="px-10 py-10 grid grid-cols-3 gap-20 font-bodyFont mx-40 ">

            {/* Logo Starts Here */}
        <div>
            <h2>TAIWO KOLAPO</h2>
        </div>
        {/* Logo Ends Here */}

<div>
    <ul className="flex gap-10">
        <li>Home</li>
        <li>About</li>
        <li>CV</li>
    </ul>
</div>

<div>
    <h1>Connect Me</h1>
</div>




    </div>

    
    </>
)

}

export default Nav