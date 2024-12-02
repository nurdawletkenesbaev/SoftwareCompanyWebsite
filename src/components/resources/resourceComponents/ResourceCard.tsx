import { BsArrowRight } from 'react-icons/bs'
import React from 'react'

interface props {
  image: string
  title: string
}
const ResourceCard: React.FC<props> = ({ title, image }) => {
  return (
    <div className=''>
      <div className='flex-1'>
        <img src={image} alt='' className='w-full h-full' />
      </div>
      <p className='my-[20px] text-start px-[10px]'>{title}</p>
      <div className='flex justify-end px-[10px]'>
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
