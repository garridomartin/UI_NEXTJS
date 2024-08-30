'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { MdPlayCircleFilled } from 'react-icons/md'

export default function RightBar() {
  const pathname = usePathname()

  return (
    <div className='flex flex-grow  flex-col fixed mr-5'>
      <div className='flex flex-col rounded-lg p-5 mb-5 ml-5 bg-gradient-to-t from-primary to-soft relative '>
        <div className='absolute bottom-0 right-0 w-1/2 h-1/2'>
          <Image
            className='object-contain opacity-20'
            src='/lindo.png'
            alt='tomate'
            width={100}
            height={100}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <span className='font-bold'>Available Now</span>
          <h3 className='font-medium text-xs '>
            How to use the new version of the admin dashboard?
          </h3>
          <span className='text-xs text-gray'>Takes 4 minutes to learn</span>
          <p className='text-xs text-gray'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className='flex items-center rounded-md bg-blue-600 cursor-pointer p-1 text-sm w-max h-fit'>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className='flex flex-col rounded-lg p-5 mb-5 ml-5 bg-gradient-to-t from-primary to-soft relative '>
        <div className='absolute bottom-0 right-0 w-1/2 h-1/2'>
          <Image
            className='object-contain opacity-20'
            src='/lindo.png'
            alt='tomate'
            width={100}
            height={100}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <span className='font-bold'>Available Now</span>
          <h3 className='font-medium text-xs '>
            How to use the new version of the admin dashboard?
          </h3>
          <span className='text-xs text-gray'>Takes 4 minutes to learn</span>
          <p className='text-xs text-gray'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className='flex items-center rounded-md bg-blue-600 cursor-pointer p-1 text-sm w-max h-fit'>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
    </div>
  )
}
