import React from 'react'

interface props {
  title: string
  description: string
  index: number
  isTop: boolean
}
const HowDevelopmentCard: React.FC<props> = ({
  title,
  description,
  index,
  isTop,
}) => {
  return (
    <div
      className={`md:w-[28%] flex md:flex ${
        isTop
          ? 'md:flex-col justify-end'
          : 'md:flex-col-reverse flex-row-reverse justify-start'
      } items-center`}
    >
      <div className='border-[1px]  rounded-[9px] border-[#E7DAED] px-[7px] py-[10px] md:px-[25px] md:py-[20px]'>
        <h1 className='text-[13px] md:text-[16px] lg:text-[18px] text-[#1A202C] font-bold mb-[15px]'>
          <span className='bg-gradient-to-r from-[#F76680] to-[#57007B] inline-block text-transparent bg-clip-text'>
            #{index + 1}
          </span>
          {'  '}
          {title}
        </h1>
        <p className='text-[#718096] text-[11px] md:text-[13px] lg:text-[14px]'>
          {description}
        </p>
      </div>
      <div className='h-[2px] md:h-[40px] w-[40px] md:w-[2px] bg-[linear-gradient(90deg,_#F76680,_#57007B)]'></div>
    </div>
  )
}

export default HowDevelopmentCard
