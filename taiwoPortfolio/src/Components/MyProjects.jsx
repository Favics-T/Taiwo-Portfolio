import React from "react";
import { MdWebhook } from "react-icons/md";
import Geeks from '../assets/Geeks.png'
import Digital from '../assets/digital.png'
import { Link } from "react-router-dom";
import Password from '../assets/Password.png'
import Age from '../assets/AgeCalculator.png'


const ProjectCard = ({ link, imgSrc, click, bgColor, title, description }) => {
    return (
      <div className={`rounded-3xl p-10 h-96 text-white ${bgColor}`}>
                {imgSrc && (
          <Link to={link}>
            <img src={imgSrc} className="h-44 mx-auto text-center text-[40px]" alt=" " />
          </Link>
        )}
        <div className="text-center">
          <p className="text-[9px] ">{click}</p>
        <h1 className="text-[30px]">{title}</h1>
        <h2 className="py-4 mt-1 text-white font-bodyFont">{description}</h2>
        </div>
       
      </div>
    );
  };


function MyProjects (){
   
    return(
        <div className="mb-10">
          <div className="">

        <div className="w-96 text-white font-thin text-[40px]  top-[90px] ">
          <h1 className="text-orange-700 ml-10">My Projects</h1>
        </div>






          <div className="grid grid-cols-4 py-9   ">
            <div className="bg-white h-96 mx-4 ">
              <ProjectCard 
              bgColor='bg-[#1A1A1D] '
              click='click on image to view website'
              link='https://favics-t.github.io/Geeks-Store/'
              imgSrc={Geeks}
              description='This is an E-Commerce Website Built With React js and Tailwindcss, data was fetched from Fake Store Api, and was queried with Tanstack Query.'
              
              />
            </div>
            <div className="bg-white ">
            <ProjectCard 
            bgColor='bg-black'
            click='click on image to view website'
            link='https://taiwo-digital-clock.vercel.app/'
            imgSrc={Digital}
            description='This is a digital Clock Built with javascript and css'
            />
            </div>
            <div className="bg-white h-96 mx-4">
              <ProjectCard
              bgColor='bg-black'
              imgSrc={Password}
              description='password Generator created with javascript, it helps users create random password'
              />

            </div>
            <div className="bg-white h-96 w-96">
            <ProjectCard
            imgSrc={Age} 
            bgColor='bg-black'
            title='Project 4'
            />

            </div>

          </div>
          </div>
         



                </div>
            
      
    )

}

export default MyProjects