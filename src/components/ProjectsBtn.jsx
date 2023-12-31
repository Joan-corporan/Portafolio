"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RowRight } from './Icons'

export const ProjectsBtn = () => {
  return (
    <div className='mx-auto xl:mx-0 mb-[75px] '>
      <Link href={'/projects'} className='relative w-[185px] h-[185px] flex justify-center items-center  bg-cover bg-center '>
      <Image src={'https://res.cloudinary.com/dfxpgwzls/image/upload/v1696696241/rounded-text_xze9yp.png'}
      width={100}
      height={100}
      alt=''
      className='animate-spin-slow  max-w-[141px] max-h-[148px] '/>
      <RowRight className="absolute text-sm text-white animate-bounce  "/>
      </Link>
    </div>
  )
}
