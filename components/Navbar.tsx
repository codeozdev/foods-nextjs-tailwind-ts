'use client'

import React, { FC, useState } from 'react'

import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'
import PaddingContainer from './layout/padding-container'

const Navbar: FC = () => {
  const [nav, setNav] = useState<boolean>(false)

  return (
    <PaddingContainer>
      {/* left side */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <div className='cursor-pointer hidden sm:flex' onClick={() => setNav(!nav)}>
            <AiOutlineMenu size={30} />
          </div>
          <h1 className='px-2 text-2xl sm:text-3xl lg:text-4xl'>
            Best <span className='font-bold'>East</span>
          </h1>
          <div className='hidden items-center rounded-full bg-gray-200 p-1 text-[14px] lg:flex'>
            <p className='rounded-full bg-black p-2 text-white'>Delivery</p>
            <p className='p-2'>Pickup</p>
          </div>
        </div>

        {/* search input */}
        <div className='flex w-[200px] items-center rounded-full bg-gray-200 px-2 sm:w-[400px] lg:w-[500px]'>
          <AiOutlineSearch size={25} />
          <input
            className='w-full bg-transparent p-2 focus:outline-none'
            type='text'
            placeholder='Search foods'
          />
        </div>

        {/* basket button */}
        <button className='hidden items-center rounded-full bg-black py-2 text-white duration-300 md:flex'>
          <BsFillCartFill className='mr-2' size={20} /> Cart
        </button>

        {/* mobil menu && overlay*/}
        {nav ? (
          <div className='fixed left-0 top-0 z-10 h-screen w-full bg-black/80'></div>
        ) : (
          ''
        )}

        {/* side drawer menu */}
        <div
          className={
            nav
              ? 'fixed left-0 top-0 z-10 h-screen w-[300px] bg-white'
              : 'fixed left-[-100%] top-0 z-10 h-screen w-[300px] bg-white'
          }>
          <AiOutlineClose
            size={30}
            className='absolute right-4 top-4 cursor-pointer'
            onClick={() => setNav(!nav)}
          />
          <h2 className='p-4 text-2xl'>
            Best <span className='font-bold'>East</span>
          </h2>
          <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
              <li className='flex items-center p-4 text-xl'>
                <TbTruckDelivery size={25} className='mr-4' />
                Orders
              </li>
              <li className='flex items-center p-4 text-xl'>
                <MdFavorite size={25} className='mr-4' />
                Favories
              </li>
              <li className='flex items-center p-4 text-xl'>
                <FaWallet size={25} className='mr-4' />
                Wallet
              </li>
              <li className='flex items-center p-4 text-xl'>
                <MdHelp size={25} className='mr-4' />
                Help
              </li>
              <li className='flex items-center p-4 text-xl'>
                <AiFillTag size={25} className='mr-4' />
                Promotions
              </li>
              <li className='flex items-center p-4 text-xl'>
                <BsFillCartFill size={25} className='mr-4' />
                Best Ones
              </li>
              <li className='flex items-center p-4 text-xl'>
                <FaUserFriends size={25} className='mr-4' />
                Invite Friends
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </PaddingContainer>
  )
}
export default Navbar
