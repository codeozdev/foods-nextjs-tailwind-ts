/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import PaddingContainer from './layout/padding-container'

const HeadlineCards = () => {
  return (
    <PaddingContainer>
      <div className='grid gap-6 py-12 md:grid-cols-3'>
        {/* card */}
        <div className='relative rounded-xl'>
          {/* overlay */}
          <div className='absolute h-full w-full rounded-xl bg-black/50 text-white'>
            <p className='px-2 pt-4 text-2xl font-bold'>
              Sun's Out, BOGO's Out
            </p>
            <p className='px-2'>Through 8/26</p>
            <button className='absolute bottom-4 mx-2 border-white bg-white text-black'>
              Order Now
            </button>
          </div>
          <Image
            src={
              'https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
            width={500}
            height={500}
            alt='img'
            className='max-h-[160px] w-full rounded-xl object-cover md:max-h-[200px]'
          />
        </div>

        <div className='relative rounded-xl'>
          {/* overlay */}
          <div className='absolute h-full w-full rounded-xl bg-black/50 text-white'>
            <p className='px-2 pt-4 text-2xl font-bold'>New Restaurants</p>
            <p className='px-2'>Added Daily</p>
            <button className='absolute bottom-4 mx-2 border-white bg-white text-black'>
              Order Now
            </button>
          </div>
          <Image
            src={
              'https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
            width={500}
            height={500}
            alt='img'
            className='max-h-[160px] w-full rounded-xl object-cover md:max-h-[200px]'
          />
        </div>

        <div className='relative rounded-xl'>
          {/* overlay */}
          <div className='absolute h-full w-full rounded-xl bg-black/50 text-white'>
            <p className='px-2 pt-4 text-2xl font-bold'>
              We Deliver Desserts Too
            </p>
            <p className='px-2'>Tasty Treats</p>
            <button className='absolute bottom-4 mx-2 border-white bg-white text-black'>
              Order Now
            </button>
          </div>
          <Image
            src={
              'https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
            width={500}
            height={500}
            alt='img'
            className='max-h-[160px] w-full rounded-xl object-cover md:max-h-[200px]'
          />
        </div>
      </div>
    </PaddingContainer>
  )
}
export default HeadlineCards
