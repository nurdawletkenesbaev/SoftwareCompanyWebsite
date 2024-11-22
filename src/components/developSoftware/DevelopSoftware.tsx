// import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'
import video from '../../images/videos/video.mp4'
import HeadingPage from '../pageComponents/HeadingPage'
import ReactPlayer from 'react-player'
// import { useState } from 'react'

const DevelopSoftware = () => {
//   const [isPlaying, setIsPlaying] = useState<boolean>(false) 

//   const handlePlayPause = () => {
//     setIsPlaying(!isPlaying) 
//   }
  return (
    <div className='px-[5%] flex gap-[50px] py-[80px]'>
      <div className='w-[50%]'>
        <HeadingPage
          isCenter={false}
          heading='Leading companies trust us'
          span='to develop software'
        />
        <p className='text-[#718096] font-[400] text-[18px] leading-9 my-[30px]'>
          We{' '}
          <span className='bg-gradient-to-r from-[#F76680] to-[#57007B] inline-block text-transparent bg-clip-text'>
            add development capacity
          </span>{' '}
          to tech teams. Our value isn’t limited to building teams but is
          equally distributed across the project lifecycle. We are a custom
          software development company that guarantees the successful delivery
          of your project.
        </p>
        <a className='flex items-center gap-[10px] text-[#57007B] text-[16px]'>
          See more Informations{' '}
          <span>
            <BsArrowRight />
          </span>
        </a>
      </div>
      <div className='w-[50%] h-full relative  '>
        <ReactPlayer
        //   playing={isPlaying}
          controls={true}
          className='react-player'
          url={video}
          width='100%'
          height='100%'
          style={{ borderRadius: '10px', height: '100%' }}
        />
        {/* <div
          className={`bg-white opacity-60 p-[10px] backdrop-blur-md rounded-full absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] flex items-center justify-center ${
            isPlaying && 'hidden'
          } hover:${isPlaying && 'flex'}`}
        >
          <button
            onClick={() => {
              handlePlayPause()
            }}
            className={`text-[50px] text-[#57007B] `}
          >
            {!isPlaying ? <AiFillPlayCircle /> : <AiFillPauseCircle />}
          </button>
        </div> */}
      </div>
    </div>
  )
}

export default DevelopSoftware
