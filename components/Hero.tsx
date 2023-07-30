import Image from 'next/image'
import React, { FC, useState } from 'react'
import PaddingContainer from './layout/padding-container'

const Hero: FC = () => {
  return (
    <PaddingContainer>
      <div className='relative max-h-[500px]'>
        {/* overlay */}
        <div className='absolute flex h-full max-h-[500px] w-full flex-col justify-center bg-black/40 text-gray-200'>
          <h1 className='px-4 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl'>
            The <span className='text-orange-500'>Best</span>
          </h1>
          <h1 className='px-4 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl'>
            <span className='text-orange-500'>Foods</span> Devlivered
          </h1>
        </div>

        <Image
          src='https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='img'
          width={1640}
          height={500}
          className='max-h-[500px] w-full object-cover'
        />
      </div>
    </PaddingContainer>
  )
}
export default Hero
