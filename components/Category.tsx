import { categories } from '@/data/data'
import PaddingContainer from './layout/padding-container'
import Image from 'next/image'

const Category = () => {
  return (
    <PaddingContainer>
      <div>
        <h1 className='text-center text-4xl font-bold text-orange-600'>
          Top Rated Menu Items
        </h1>
        {/* categories */}
        <div className='grid grid-cols-2 gap-6 py-6 md:grid-cols-4'>
          {categories.map((item, index) => (
            <div
              key={index}
              className='flex items-center justify-between rounded-lg bg-gray-100 p-4'>
              <h2 className='font-bold sm:text-xl'>{item.name}</h2>
              <Image
                src={item.image}
                alt='img'
                width={500}
                height={500}
                className='w-20'
              />
            </div>
          ))}
        </div>
      </div>
    </PaddingContainer>
  )
}
export default Category
