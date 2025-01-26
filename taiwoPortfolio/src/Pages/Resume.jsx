import React from 'react'

const Resume = () => {
  return (
    <div className='bg-white py-14'>
      
      <div>
        {/* Header */}
          <div className='text-center py-4 border border-b-black text-black bg-white' >
              <h1 className='font-extrabold text-[25px] '>Kolapo Faith Taiwo</h1>
              <h1 className='font-bold'>Frontend Web Developer</h1>
                {/* contact details */}
              <div className='grid grid-cols-3 py-2 font-medium'>
                <p className=''>Email: taiwopersonal24@gmail.com</p>
                <p className=''>Phone: +234 90 632 88467</p>
                <p className=''>Port-Harcourt Rivers State</p>
              </div>
                {/* Contact details ends here */}
          </div>
          {/* Header Ends Here */}

          {/* Career Objective starts here */}
          <div className='div bg-white py-4 mx-10 border-black border-b'>
            <h1 className='font-bold  '> Career Objective</h1>
            <p className='font-thin text-[18px] '>Dedicated and detail-oriented Frontend Web Developer with a strong foundation in web development and a passion for creating user-friendly, innovative solutions. Seeking an opportunity to apply and grow technical skills in a challenging Frontend Web Development role.</p>
          </div>
          {/* Career Objective Ends Here */}

{/* skills starts here */}
<div className='border-black border-b mx-10 div'>
<h1 className='font-bold'>Skils</h1>
<ol className='font-thin text-[18px] '>
  <li>•	Programming Languages & Frameworks: HTML5, CSS3, JavaScript, React
</li>
  <li>•	Web Development: Frontend development, responsive design, and user experience optimization</li>
  <li>•	Soft Skills: Problem-solving, adaptability, and collaboration</li>
</ol>
</div>
{/* skills ends here */}
{/* Projects starts here */}

<div className='mx-10 border-b border-black div'>
  <h1 className='font-bold'>E-Commerce Website</h1>
  <p className='para'>•	Designed and developed a functional e-commerce website to showcase products and facilitate seamless transactions.</p>
  <p className='para'>•	Implemented interactive and responsive layouts using HTML5, CSS3, and JavaScript.</p>
  <p className='para'>•	Integrated React to enhance user interface components for a better user experience.

</p>
</div>

{/* Projects ends here */}


{/* Exra-Curricular Activiteies starts here */}
<div className='mx-10 border-b border-black div'>
<h1 className='font-bold'>Extracurricular Activities</h1>
<p className='para'> •	Member of a student developers’ community to collaborate and share knowledge.</p>
</div>
{/* Extra activities Ends here */}

<div className='mx-10 border-b border-black div'>
  <h1 className='font-bold'>Hobbies And Interests</h1>
  <p className='para'>•	Passionate about fashion design and sewing, combining creativity with technical problem-solving</p>
  <p className='para'>•	Enthusiastic about staying updated with industry trends in technology and fashion.
</p>

</div>
      </div>
    </div>
  )
}

export default Resume
