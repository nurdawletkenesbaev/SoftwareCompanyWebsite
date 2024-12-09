import React from 'react'

interface props {
  image: string
  name: string
  work: string
}
const CustomerCard: React.FC<props> = ({ image, name, work }) => {
  return (
    <div className='text-center flex flex-col items-center'>
      <div className='flex justify-center items-center rounded-full w-[150px] h-[150px]'>
        <img
          src={image}
          alt=''
          className='w-full h-full rounded-full object-cover'
        />
      </div>
      <span className='text-[#AOAECO] text-[18px] font-bold my-[5px]'>
        {name}
      </span>
      <p className='text-[12px] text-[#CBD5EO]'>{work}</p>
    </div>
  )
}

export default CustomerCard
