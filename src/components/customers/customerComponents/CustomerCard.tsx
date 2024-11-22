import { AiFillStar } from 'react-icons/ai'
import React from 'react'

interface props {
  image: string
  name: string
  work: string
}
const CustomerCard: React.FC<props> = ({ image, name, work }) => {
  return (
    <div className='text-center'>
      <div className='flex justify-center items-center'>
        <img src={image} alt='' />
      </div>
      <div className='flex justify-center gap-[10px] text-yellow-500'>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
      <span className='text-[#AOAECO]'>{name}</span>
      <p className='text-[12px] text-[#CBD5EO]'>{work}</p>
    </div>
  )
}

export default CustomerCard
