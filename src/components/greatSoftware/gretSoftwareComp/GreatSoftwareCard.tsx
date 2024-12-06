import React from 'react'

interface softwareInformation {
  image: string
  title: string
  description: string
  mainP: string
  content: string
  author: {
    authorImage: string
    authorName: string
    authorWork: string
  }
  circles: [string, string]
  index: number
  position: [string, string]
}
const GreatSoftwareCard: React.FC<softwareInformation> = ({
  image,
  title,
  description,
  mainP,
  content,
  author,
  circles,
  index,
  position,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row gap-[50px] md:gap-[100px] ${
        index % 2 !== 0 && 'md:flex-row-reverse'
      } items-center`}
    >
      <div className='w-full md:w-[50%]'>
        <h1 className='text-[24px] md:text-[26px] lg:text-[28px] font-[600]'>
          {title}
        </h1>
        <div className='mt-[30px] mb-[25px] flex flex-col gap-[20px]'>
          <p className='text-[14px] md:text-[16px] lg:text-[18px]'>
            {description}
          </p>
          <p
            className='text-[14px] md:text-[16px] lg:text-[18px]'
            dangerouslySetInnerHTML={{
              __html: mainP,
            }}
          ></p>
          <div className='flex gap-[10px]'>
            <div className='w-[5px] rounded-sm bg-[linear-gradient(90deg,_#F76680,_#57007B)]'></div>
            <div className='bg-gradient-to-r from-[#F76680] py-[10px] to-[#57007B] inline-block text-transparent bg-clip-text'>
              {content}
            </div>
          </div>
        </div>
        <div className='flex gap-[10px] items-center'>
          <div>
            <img src={author.authorImage} alt='' />
          </div>
          <div>
            <p>{author.authorName}</p>
            <span>{author.authorWork}</span>
          </div>
        </div>
      </div>
      <div className='w-full md:w-[50%] relative'>
        <img src={image} alt='' className='w-full rounded-md' />
        <img
          src={circles[0]}
          alt=''
          className={`${position[0]} absolute z-[-2]`}
        />
        <img
          src={circles[1]}
          alt=''
          className={`${position[1]} absolute z-[-2]`}
        />
      </div>
    </div>
  )
}

export default GreatSoftwareCard
