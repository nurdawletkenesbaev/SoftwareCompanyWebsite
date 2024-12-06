import { BsArrowRight } from 'react-icons/bs'
import React from 'react'

interface props {
  image: string
  title: string
}
const ResourceCard: React.FC<props> = ({ title, image }) => {
  return (
    <div className='border-[0.5px] flex flex-col border-gray-400 rounded-md shadow-lg'>
      <div className='h-[180px]'>
        <img src={image} alt='' className='rounded-md h-full object-contain' />
      </div>
      <p className='my-[20px] text-start px-[10px]'>{title}</p>
      <div className='flex justify-end px-[10px] pb-[10px]'>
        <a
          href=''
          className='text-[16px] text-[#57007B] flex items-center gap-[10px]'
        >
          Read More{' '}
          <span>
            <BsArrowRight />
          </span>
        </a>
      </div>
    </div>
  )
}

export default ResourceCard
