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
      <p className='my-[20px] text-start'>{title}</p>
      <div className='flex justify-end'>
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
