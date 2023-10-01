import Image from 'next/image'
import React from 'react'

export const ImageBg = ({src}) => {
  return (
    <div>
        <Image src={ src} width={500} height={500}/>
    </div>
  )
}
