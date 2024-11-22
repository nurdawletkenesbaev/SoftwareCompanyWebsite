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
      className={`w-[28%] flex ${
        isTop ? 'flex-col' : 'flex-col-reverse'
      } items-center justify-center`}
    >
      <div className='border-[1px]  rounded-[9px] border-[#E7DAED] px-[25px] py-[20px]'>
        <h1 className='text-[18px] text-[#1A202C] font-bold mb-[15px]'>
          <span className='bg-gradient-to-r from-[#F76680] to-[#57007B] inline-block text-transparent bg-clip-text'>
            #{index + 1}
          </span>
          {'  '}
          {title}
        </h1>
        <p className='text-[#718096] text-[14px]'>{description}</p>
      </div>
      <div className='h-[40px] w-[2px] bg-[linear-gradient(90deg,_#F76680,_#57007B)]'></div>
    </div>
  )
}

export default HowDevelopmentCard
