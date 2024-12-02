import { BsArrowRight } from 'react-icons/bs'
import video from '@/images/videos/video.mp4'
import HeadingPage from '../pageComponents/HeadingPage'
import ReactPlayer from 'react-player'

const DevelopSoftware = () => {
  return (
    <div className='px-[5%] flex flex-col md:flex-row gap-[50px] py-[80px] items-center'>
      <div className='w-full md:w-[50%]'>
        <HeadingPage
          isCenter={false}
          heading='Leading companies trust us'
          span='to develop software'
        />
        <p className='text-[#718096] font-[400] text-[14px] md:text-[16px] lg:text-[18px] leading-7 md:leading-8  lg:leading-9 my-[20px] md:my-[25px] lg:my-[30px]'>
          We{' '}
          <span className='bg-gradient-to-r from-[#F76680] to-[#57007B] inline-block text-transparent bg-clip-text'>
            add development capacity
          </span>{' '}
          to tech teams. Our value isn’t limited to building teams but is
          equally distributed across the project lifecycle. We are a custom
          software development company that guarantees the successful delivery
          of your project.
        </p>
        <a className='flex items-center gap-[10px] text-[#57007B] text-[16px] cursor-pointer'>
          See more Informations{' '}
          <span>
            <BsArrowRight />
          </span>
        </a>
      </div>
      <div className='w-full md:w-[50%] h-full relative  '>
        <ReactPlayer
          controls={true}
          className='react-player'
          url={video}
          width='100%'
          height='100%'
          style={{ borderRadius: '10px', height: '100%' }}
        />
      </div>
    </div>
  )
}

export default DevelopSoftware
