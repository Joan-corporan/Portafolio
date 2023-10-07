import Image from 'next/image'
import React from 'react'

export const Images = ({src}) => {
  return (
    <div>
        <Image
        className='hover:scale-105 transition ease-in-out rounded  '
        
        src={src}
        width={500}
        height={500}
        alt=''
        />
    </div>
  )
}
