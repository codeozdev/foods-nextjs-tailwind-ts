'use client'

import { data } from '@/data/data'
import React, { FC, useState } from 'react'
import PaddingContainer from './layout/padding-container'
import Image from 'next/image'

const Food: FC = () => {
  const [foods, setFoods] = useState(data)

  //filter type burgers/pizza/salads/chicken
  const filterType = (product: string) => {
    setFoods(data.filter((item) => item.category === product))
  }

  //filter by price
  const filterPrice = (price: string) => {
    setFoods(data.filter((item) => item.price === price))
  }

  return (
    <PaddingContainer>
      <div className='py-12'>
        <h1 className='pb-5 text-center text-4xl font-bold text-orange-600'>
          Top Rated Menu Items
        </h1>

        {/* filter row */}
        <div className='flex flex-col justify-between lg:flex-row'>
          {/* filter type */}
          <div>
            <p className='ml-2 font-bold text-gray-700'>Filter Type</p>
            <div className='grid sm:flex sm:items-center sm:justify-between'>
              {/* burada butun verileri gostermek adina filterType fonksiyonunu kullanmadik */}
              <button
                className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                onClick={() => setFoods(data)}>
                All
              </button>
              <button
                className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                onClick={() => filterType('burger')}>
                Burgers
              </button>
              <button
                className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                onClick={() => filterType('pizza')}>
                Pizza
              </button>
              <button
                className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                onClick={() => filterType('salad')}>
                Salads
              </button>
              <button
                className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                onClick={() => filterType('chicken')}>
                Chicken
              </button>
            </div>
          </div>
          {/* flex items-center justify-between */}
          {/* filter price */}
          <div>
            <p className='ml-2 pt-5 font-bold text-gray-700'>Filter Price</p>
            <div className='grid w-full sm:flex sm:max-w-[390px] sm:items-center sm:justify-between'>
              <button
                className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                onClick={() => filterPrice('10.99$')}>
                10.99$
              </button>
              <button
                className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                onClick={() => filterPrice('11.99$')}>
                11.99$
              </button>
              <button
                className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                onClick={() => filterPrice('12.99$')}>
                12.99$
              </button>
              <button
                className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                onClick={() => filterPrice('13.99$')}>
                13.99$
              </button>
            </div>
          </div>
        </div>

        {/* display foods */}
        <div className='grid grid-cols-2 gap-6 pt-4 lg:grid-cols-4'>
          {foods.map((item, index) => (
            <div
              key={index}
              className='rounded-t-lg border shadow-lg duration-300 hover:scale-105'>
              <Image
                src={item.image}
                alt='img'
                width={500}
                height={500}
                className='h-[200px] w-full rounded-t-lg object-cover'
              />
              <div className='flex items-center justify-between px-2 py-4'>
                <p className='text-xs font-bold md:text-base'>{item.name}</p>
                <p>
                  <span className='rounded-full bg-orange-500 p-1 text-white'>
                    {item.price}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PaddingContainer>
  )
}
export default Food

//<button onClick={() => filterType('pizza')}>Pizza Ürünlerini Filtrele</button>
//filterType fonksiyonu 'pizza' değeriyle çağrılır ve bu değere sahip öğeler data dizisinden filtrelenir. Filtrelenmiş veriler, setFoods fonksiyonu aracılığıyla foods state'ine atanır ve component yeniden render edilerek sadece "pizza" kategorisine ait ürünler görüntülenir
