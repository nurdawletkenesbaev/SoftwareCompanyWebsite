import arrow from '../../../images/caseStudies/arrow.png'
import React from 'react'

interface Props {
  title: string
  description: string
  image: string
}
const CaseStudiesCard: React.FC<Props> = ({ title, description, image }) => {
  return (
    <div className='grid grid-cols-2 items-center bg-[#F1F2FF] rounded-[30px] border-[1px] border-[#E7DAED]'>
      <div>
        <img src={image} alt='' />
      </div>
      <div className='px-[50px]'>
        <h1 className='text-[28px] text-[#2D3748] font-[600]'>{title}</h1>
        <p className='text-[14px] text-[#4A5568] font-[400] mt-[30px] mb-[60px]'>
          {description}
        </p>
        <div className='flex justify-end'>
          <a href='' className='flex cursor-pointer items-center text-[14px] bg-gradient-to-r from-[#F76680] to-[#57007B] text-transparent bg-clip-text'>
            Raed more <img src={arrow} alt='' className='translate-y-[1px]' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default CaseStudiesCard
