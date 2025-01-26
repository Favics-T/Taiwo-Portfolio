import React from 'react'




function About() {
    const skills =[
        {skill: 'HTML', percentage:90},
        {skill: 'CSS3', percentage:60},
        {skill: 'JAVASCRIPT', percentage:60},
        {skill: 'REACT', percentage:70},
        {skill: 'EXPRESS JS', percentage:1},
        {skill: 'MONGODB', percentage:1},
    ]

   
    
  return (
    <div className=' px-4 py-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 mt-8 text-white'>



{/* Left Div Starts here */}
       <div className='px-10 w-full py-10 '>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>

    

            <div className='mr-16'>
            <h2><span className='about'>Name:</span>Kolapo Faith Taiwo</h2>
            <h2><span className='about'>Email:</span>taiwopersonal24@gmail.com</h2>
            <h2><span className='about'>Number:</span>+2349063288467</h2>
            <h2><span className='about'>Profile:</span>Web Developer</h2>
            </div>
           
        </div>

       <div className='mt-10 text-orange-600'>
       <h1 className='border text-white w-44 font-bold text-center p-1 rounded-xl'>Skill</h1>

       </div>
        
        <div className='bg-white text-orange-600 grid grid-rows-6 gap-20 py-20 px-10 h-[550px] mt-10 rounded-2xl'>

        
       

            <div className='text-orange-600'>
                <h2 className='font-bold'>HTML</h2>
                <h2 className='font-medium'>90%</h2>
                <div className='w-76 bg-orange-600 h-2'></div>
            </div>

            <div>
                <h2>CSS3</h2>
                <h2 className='font-medium'>60%</h2>
                <div className='w-[280px] bg-orange-600 h-2'></div>
            </div>

            <div>
                <h2>JAVASCRIPT</h2>
                <h2 className='font-medium'>60%</h2>
                <div className='w-[280px] bg-orange-600 h-2'></div>
            </div>

            <div>
                <h2>REACT</h2>
                <h2 className='font-medium'>80%</h2>
                <div className='w-96 bg-orange-600 h-2'></div>
            </div>

            <div>
                <h2>EXPRESS JS</h2>
                <h2 className='font-medium'>1%</h2>
                <div className='w-4 bg-orange-600 h-2'></div>
            </div>

            <div>
                <h2>MONGODB</h2>
                <h2 className='font-medium'>1%</h2>
                <div className='w-4 bg-orange-600 h-2'></div>
            </div>

        </div>

       </div> 
       {/* Left Div Ends Here */}

{/* right div starts here */}
       <div className='w-[90%] ml-10 text-justify font-serif '>
<div>
    <h2 className='text-center text-[20px] underline ring-offset-4'>ABOUT ME</h2>
</div>

       <p className='my-8'>
                    My Name is Kolapo Faith Taiwo, a Software Engineering Student in NIIT Port Harcourt,
                    I lead a Fashion Brand 'Favics', Favics is a brand commited to excellence and creative wears.
                    Favics Focus on mainly street wears outfit.
                    My role as the creative director of FAVICS HUB, has given me the oppurtunity to manage 
                    human relationship , as i have been open to interact with humans from different
                    understanding and Temperament.
                </p>

                <p className='my-8'>
                    As a Frontend Developer, i am commited to continous learning and open to projects,
                     that help braoden my knowledge and gain more expertise.
                     i look forward to delivering excellence on any project, i lay my hand on. 
                </p>

                <p>I am a good communicator and a great listener, i adapt easily..and make my way around tussles by always wearing a happy face.
                    </p>
       </div>

       {/* right div ends here */}


    </div>
  )
}

export default About
