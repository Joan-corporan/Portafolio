"use client"
import React from 'react'
import { AnimatedImage } from './AnimatedImage'
import { AnimateTextJB } from './AnimateTextJB'

export const AboutMe = () => {
  const textAbout='Hola, soy Joan , un desarrollador web y diseñador UI/UX apasionado por crear experiencias digitales hermosas, funcionales y centradas en el usuario. Siempre estoy buscando formas nuevas e innovadoras de hacer realidad las visiones de mis clientes.'
  return (
    <>
         <div className="flex flex-col   w-full items-center mt-3   ">
          <h1 className="mb-5 p-5 text-5xl font-bold  bg-gradient-to-br from-white to-amber-400 text-transparent text-center bg-clip-text  m-5  flex justify-center items-center ">
            Pasión por la innovación
          </h1>
          <div className="flex flex-col items-center xl:flex xl:justify-center  w-full xl:flex-row  xl:items-start  ">
            <div className="xl:w-1/2 w-full  flex justify-center items-start">
            
             <AnimatedImage className="w-7/12 h-8/12 rounded  " src={'https://res.cloudinary.com/dfxpgwzls/image/upload/v1696218308/3D_Animation_Style_crear_persona_trabajando_en_el_computador_e_3_fig5zr.jpg'}/>
            </div>
            <div className="xl:w-1/2 w-full flex flex-col  items-center xl:mr-[100px]  ">
              <h3 className="text-amber-400 font-bold text-2xl" >BIOGRAFIA</h3>
             
              <AnimateTextJB className=" xl:text-left text-center px-3 text-white mb-[50px] text-2xl"  text={textAbout}/>

              <h3 className="text-amber-400 font-bold text-2xl" >Skills</h3>
              <div className='flex justify-center gap-4 flex-wrap w-full mb-[200px] p-7 h-[200px]'>
                <article className='circle bg-[url(https://res.cloudinary.com/dfxpgwzls/image/upload/v1696306140/html-5-svgrepo-com_udnd00.svg)] bg-cover bg-center animate-bounce hover:animate-spin-slow'>
                  
                </article>
                <article className='circle bg-[url(https://res.cloudinary.com/dfxpgwzls/image/upload/v1696306367/css-3-svgrepo-com_nhlege.svg)] bg-cover bg-center animate-bounce hover:animate-spin-slow'>
                
                </article>
                <article className='circle bg-[url(https://res.cloudinary.com/dfxpgwzls/image/upload/v1696306526/js-official-svgrepo-com_ql7rqd.svg)] bg-cover bg-center animate-bounce hover:animate-spin-slow'>
                
                </article>
                <article className='circle bg-[url(https://res.cloudinary.com/dfxpgwzls/image/upload/v1696306541/bootstrap-svgrepo-com_flhclj.svg)] bg-cover bg-center animate-bounce hover:animate-spin-slow'>
                
                </article>
                <article className='circle bg-[url(https://res.cloudinary.com/dfxpgwzls/image/upload/v1696306738/react-1-logo-svgrepo-com_ylnge4.svg)] bg-cover bg-center animate-bounce hover:animate-spin-slow'>
               
                </article>
                <article className='circle bg-[url(https://res.cloudinary.com/dfxpgwzls/image/upload/v1696307128/nodejs-svgrepo-com_tzlwlk.svg)] bg-cover bg-center animate-bounce hover:animate-spin-slow'>
                
                </article>
                <article className='circle bg-[url(https://res.cloudinary.com/dfxpgwzls/image/upload/v1696307286/mongodb-svgrepo-com_s5jsoh.svg)] bg-cover bg-center animate-bounce hover:animate-spin-slow'>
                
                </article>
                <article className='circle bg-[url(https://res.cloudinary.com/dfxpgwzls/image/upload/v1696307352/firebase-svgrepo-com_yybdji.svg)] bg-cover bg-center animate-bounce hover:animate-spin-slow'>
                
                </article>
                <article className='circle bg-[url(https://res.cloudinary.com/dfxpgwzls/image/upload/v1696307619/tailwind-css-svgrepo-com_ezyrsd.svg)] bg-cover bg-center animate-bounce hover:animate-spin-slow'>
                
                </article>
                <article className='circle bg-[url(https://res.cloudinary.com/dfxpgwzls/image/upload/v1696310807/nextjs-svgrepo-com_2_qxbhgg.svg)] bg-cover bg-center animate-bounce hover:animate-spin-slow'>
                
                </article>
                
               
               
              </div>
             
              
            </div>
            
          </div>
        </div>
    </>
  )
}
