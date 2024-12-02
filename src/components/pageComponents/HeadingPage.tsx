import React from 'react'
import line from '@/images/icons/line.png'
interface Props {
  heading: string
  span: string
  isCenter: boolean
}
const HeadingPage: React.FC<Props> = ({ heading, span, isCenter }) => {
  return (
    <div>
      <div className={`${isCenter && 'flex justify-center'} `}>
        <img src={line} alt='' />
      </div>
      <h1
        className={`${
          isCenter && 'text-center'
        } text-[#1A202C] text-[28px] md:text-[31px] lg:text-[35px] mt-[20px]`}
      >
        {heading} <br />
        <span className='font-bold'> {span}</span>
      </h1>
    </div>
  )
}

export default HeadingPage
