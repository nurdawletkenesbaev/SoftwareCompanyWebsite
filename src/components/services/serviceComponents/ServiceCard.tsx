import React from 'react'

interface props {
  image: string
  title: string
  description: string
}
const ServiceCard: React.FC<props> = ({ image, title, description }) => {
  return (
    <div className='flex flex-col shadow-lg h-[330px] sm:h-[350px] md:h-[400px] lg:h-[350px] bg-white px-[20px] text-center py-[30px] gap-[20px] border-[1px] border-gray-300 rounded-lg'>
      <div className='flex justify-center'>
        <div className='flex items-center justify-center p-[10px] rounded-full border-[1px] border-[#F76680]'>
          <img src={image} alt='' />
        </div>
      </div>
      <h1 className='text-gray-800 text-[20px] font-[600]'>{title}</h1>
      <p className='text-gray-700 text-[14px] leading-[23px] font-[400] h-[50%]'>
        {description}
      </p>
    </div>
  )
}

export default ServiceCard
